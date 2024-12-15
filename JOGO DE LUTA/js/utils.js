function rectangularCollision({rectangle1, rectangle2}){ //colisão de dois retângulos
	return(
		rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && 
		rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
		rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y && 
		rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
	)
}

//determina o vencedor
function determineWinner({player, enemy, timerId}){
	clearTimeout(timerId)
	document.querySelector('#displayText').style.display = 'flex'
	if(player.health === enemy.health){
		document.querySelector('#displayText').innerHTML = 'Tie' //empate
	}else if(player.health > enemy.health){
		document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
	}else if(player.health < enemy.health){
		document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
	}
}


let timer = 60
let timerId

//diminui o tempo do timer em contagem regressiva
function decreaseTimer(){
	if(timer > 0){
		timerId = setTimeout(decreaseTimer,1000)
		timer--
		document.querySelector('#timer').innerHTML = timer
	}

	if(timer === 0){
		determineWinner({player,enemy,timerId})
	}
}