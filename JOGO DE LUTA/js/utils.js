function rectangularCollision({ rectangle1, rectangle2 }) {
	return(
		rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && 
		rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
		rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y && 
		rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
	)
}

function determineWinner({ player, enemy, timerId }) {
	clearTimeout(timerId)
	document.querySelector('#displayText').style.display = 'flex'
	
	if(player.health === enemy.health) {
		document.querySelector('#displayText').innerHTML = 'Tie'
	}
	else if(player.health > enemy.health) {
		document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
	}
	else if(player.health < enemy.health) {
		document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
	}
}

let timer = 60
let timerId
function decreaseTimer() {
	if(timer > 0) {
		timerId = setTimeout(decreaseTimer,1000)
		timer--
		document.querySelector('#timer').innerHTML = timer
	}

	if(timer === 0) determineWinner({ player,enemy,timerId })
}

const resetGame = () => {
	background = new Sprite({ position: { x: 0, y: 0 }, imageSrc: './img/background.png' })
	shop = new Sprite({ position: { x: 600, y: 128 }, imageSrc: './img/shop.png', scale: 2.75, framesMax: 6 })
	player = new Fighter({
		position: { x: 0, y: 0 },
		velocity: { x: 0, y: 0 },
		offset: { x: 0, y: 0 },
		imageSrc: './img/samuraiMack/Idle.png',
		framesMax: 8,
		scale: 2.5,
		offset: { x: 215, y: 157 },
		sprites: {
			idle: { imageSrc: './img/samuraiMack/Idle.png', framesMax: 8 },
			run: { imageSrc: './img/samuraiMack/Run.png', framesMax: 8 },
			jump: { imageSrc: './img/samuraiMack/Jump.png', framesMax: 2 },
			fall: { imageSrc: './img/samuraiMack/Fall.png', framesMax: 2 },
			attack1: { imageSrc: './img/samuraiMack/Attack1.png', framesMax: 6 },
			attack2: { imageSrc: './img/samuraiMack/Attack2.png', framesMax: 6 },
			takeHit: { imageSrc: './img/samuraiMack/Take Hit - white silhouette.png', framesMax: 4 },
			death: { imageSrc: './img/samuraiMack/Death.png', framesMax: 6 }
		},
		attackBox: { offset: { x:100, y:50 }, width: 160, height: 50 }
	})
	
	enemy = new Fighter({
		position: { x: 400, y: 100 },
		velocity: { x: 0, y: 0 },
		color: "#00f",
		offset: { x: -50, y: 0 },
		imageSrc: './img/kenji/Idle.png',
		framesMax: 4,
		scale: 2.5,
		offset: { x: 215, y: 167 },
		sprites: {
			idle: { imageSrc: './img/kenji/Idle.png', framesMax: 4 },
			run: { imageSrc: './img/kenji/Run.png', framesMax: 8 },
			jump: { imageSrc: './img/kenji/Jump.png', framesMax: 2 },
			fall: { imageSrc: './img/kenji/Fall.png', framesMax: 2 },
			attack1: { imageSrc: './img/kenji/Attack1.png', framesMax: 4 },
			attack2: { imageSrc: './img/kenji/Attack2.png', framesMax: 4 },
			takeHit: { imageSrc: './img/kenji/Take hit.png', framesMax: 3 },
			death: { imageSrc: './img/kenji/Death.png', framesMax: 7 }
		},
		attackBox: { offset: { x:-170, y:50 }, width: 170, height: 50 }
	})

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

	gsap.to('#playerHealth', { width: player.health + '%' })
	gsap.to('#enemyHealth', { width: enemy.health + '%' })

	timer = 60
}