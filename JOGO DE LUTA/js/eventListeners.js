//evento de tecla pressionada
window.addEventListener('keydown', event => {
	//Jogador
	if(!player.dead) {
		switch(event.key) {
			case 'd':
				keys.d.pressed = true
				player.lastKey = 'd'
			break
			case 'a':
				keys.a.pressed = true
				player.lastKey = 'a'
			break
			case 'w':
				player.velocity.y = -20 //efeito de salto do personagem
			break
			case 's':
				player.attack()
				// player.lastKey = 's'
			break
			case 'e':
				player.attack()
				// player.lastKey = 'e'
		}
	}

	//Inimigo
	if(!enemy.dead) {
		switch(event.key) {
			case 'ArrowRight':
				keys.ArrowRight.pressed = true
				enemy.lastKey = 'ArrowRight'
			break
			case 'ArrowLeft':
				keys.ArrowLeft.pressed = true
				enemy.lastKey = 'ArrowLeft'
			break
			case 'ArrowUp':
				enemy.velocity.y = -20
			break
			case 'ArrowDown':
				enemy.attack()
				// enemy.lastKey = 'ArrowDown'
			break
			case 'l':
				enemy.attack()
				// enemy.lastKey = 'l'
		}
	}
})

//evento de tecla liberada
window.addEventListener('keyup', event => {
	switch(event.key) {
		//Jogador
		case 'd':
			keys.d.pressed = false
		break
		case 'a':
			keys.a.pressed = false
		break
		case 'w':
			keys.w.pressed = false
		break

		//Inimigo
		case 'ArrowRight':
			keys.ArrowRight.pressed = false
		break
		case 'ArrowLeft':
			keys.ArrowLeft.pressed = false
		break
	}
})

btn_restart.addEventListener('click', () => resetGame())