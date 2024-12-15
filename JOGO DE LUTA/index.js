const canvas=document.querySelector('canvas')
const c = canvas.getContext('2d')
const btn_restart = document.querySelector('#btn_restart')

canvas.width = 1024
canvas.height = 576

//background do game
c.fillRect(0, 0, canvas.width, canvas.height) // posIniX, posIniY, posFinX, posFinY

//gravidade
const gravity = 0.7 

//planos de fundo
const background = new Sprite({
	position: {
		x: 0,
		y: 0
	},
	imageSrc: './img/background.png'
})

const shop = new Sprite({
	position: {
		x: 600,
		y: 128
	},
	imageSrc: './img/shop.png',
	scale: 2.75,
	framesMax: 6
})

//jogador
const player = new Fighter({
	position: {
		x: 0,
		y: 0
	},
	velocity: {
		x: 0,
		y: 0
	},
	offset: {
		x: 0,
		y: 0
	},
	imageSrc: './img/samuraiMack/Idle.png',
	framesMax: 8,
	scale: 2.5,
	offset: {
		x: 215,
		y: 157
	},
	sprites: {
		idle: {//parado
			imageSrc: './img/samuraiMack/Idle.png',
			framesMax: 8
		},
		run: {//correr
			imageSrc: './img/samuraiMack/Run.png',
			framesMax: 8
		},
		jump: {//saltar
			imageSrc: './img/samuraiMack/Jump.png',
			framesMax: 2
		},
		fall: {//queda
			imageSrc: './img/samuraiMack/Fall.png',
			framesMax: 2
		},
		attack1: {//ataque 1
			imageSrc: './img/samuraiMack/Attack1.png',
			framesMax: 6
		},
		takeHit: {//recebendo um golpe
			imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
			framesMax: 4
		},
		death: {//morte
			imageSrc: './img/samuraiMack/Death.png',
			framesMax: 6
		}
	},
	attackBox: {
		offset: {
			x:100,
			y:50
		},
		width: 160,
		height: 50
	}

})

//player.draw()

//inimigo
const enemy = new Fighter({
	position: {
		x: 400,
		y: 100
	},
	velocity: {
		x: 0,
		y: 0
	},
	color: "#00f",
	offset: { //deslocamento da caixa de ataque
		x: -50,
		y: 0
	},
	imageSrc: './img/kenji/Idle.png',
	framesMax: 4,
	scale: 2.5,
	offset: {//move o player para o topo e esquerda
		x: 215,
		y: 167
	},
	sprites: {
		idle: {//ocioso: parado
			imageSrc: './img/kenji/Idle.png',
			framesMax: 4
		},
		run: {//correr
			imageSrc: './img/kenji/Run.png',
			framesMax: 8
		},
		jump: {//saltar
			imageSrc: './img/kenji/Jump.png',
			framesMax: 2
		},
		fall: {//queda
			imageSrc: './img/kenji/Fall.png',
			framesMax: 2
		},
		attack1: {//ataque 1
			imageSrc: './img/kenji/Attack1.png',
			framesMax: 4
		},
		takeHit: {//recebendo um golpe
			imageSrc: './img/kenji/Take hit.png',
			framesMax: 3
		},
		death: {//morte
			imageSrc: './img/kenji/Death.png',
			framesMax: 7
		}
	},
	attackBox: {
		offset: {
			x:-170,
			y:50
		},
		width: 170,
		height: 50
	}
})

//enemy.draw()
//console.log(player)

//teclas pressionadas
const keys = {
	//Jogador
	a:{ pressed: false },
	d:{ pressed: false },
	w:{ pressed: false },

	//Inimigo
	ArrowRight: { pressed: false },
	ArrowLeft: { pressed: false }
}

window.addEventListener('load', decreaseTimer())

//loop do game
const animate = () => {
	window.requestAnimationFrame(animate)
	
	c.fillStyle = '#000'
	c.fillRect(0, 0, canvas.width, canvas.height)
	
	background.update()
	shop.update()
	
	c.fillStyle = 'rgba(255,255,255,0.15)'
	c.fillRect(0,0,canvas.width,canvas.height)
	
	player.update()
	enemy.update()

	player.velocity.x = 0
	enemy.velocity.x = 0

	//Controla a movimentação através da tecla pressionada e controla os limites de tela da esquerda e direita

	//Jogador
	if(keys.a.pressed && player.lastKey === 'a'){//esquerda
		if(player.position.x - player.width <= 0) {
			player.velocity.x = 0
			player.switchSprite('idle')
		}
		else {
			player.velocity.x = -5
			player.switchSprite('run')
		}
	}
	else if(keys.d.pressed && player.lastKey === 'd') {//direita
		if(player.position.x + player.width >= canvas.width - 20) {
			player.velocity.x = 0
			player.switchSprite('idle')
		}
		else {
			player.velocity.x = 5
			player.switchSprite('run')
		}
	}
	else player.switchSprite('idle')
	
	//saltar e cair
	if(player.velocity.y < 0) player.switchSprite('jump')
	else if(player.velocity.y > 0) player.switchSprite('fall')
	
	//Inimigo
	if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {//esquerda
		enemy.velocity.x = -5
		enemy.switchSprite('run')
	} 
	else if(keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {//direita
		enemy.velocity.x = 5
		enemy.switchSprite('run')
	}
	else enemy.switchSprite('idle')
	
	//saltar e cair
	if(enemy.velocity.y < 0) enemy.switchSprite('jump')
	else if(enemy.velocity.y > 0) enemy.switchSprite('fall')
	
	//Colisão do jogador com o inimigo
	if(rectangularCollision({
			rectangle1: player,
			rectangle2: enemy
		}) &&
		player.isAttacking && player.framesCurrent === 4
	) {
		enemy.takeHit()
		player.isAttacking = false

		//document.querySelector('#enemyHealth').style.width = enemy.health + '%'
		gsap.to('#enemyHealth', { width: enemy.health + '%' })
	}

	//Se o jogador errar o golpe
	if(player.isAttacking && player.framesCurrent === 4) player.isAttacking = false
	
	//Colisão do inimigo com o jogador
	if(rectangularCollision({
			rectangle1: enemy,
			rectangle2: player
		}) &&
		enemy.isAttacking && enemy.framesCurrent === 2
	){
		player.takeHit()
		enemy.isAttacking = false

		//document.querySelector('#playerHealth').style.width = player.health + '%'
		gsap.to('#playerHealth', { width: player.health + '%' })
	}

	//Se o inimigo errar o golpe
	if(enemy.isAttacking && enemy.framesCurrent === 2) enemy.isAttacking = false
	
	//fim de jogo baseado na energia dos jogadores
	if(enemy.health <= 0 || player.health <= 0) determineWinner({ player,enemy, timerId })
}

window.addEventListener('load', animate())