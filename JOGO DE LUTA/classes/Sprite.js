class Sprite {
	constructor({
		position, 
		imageSrc, 
		scale = 1, framesMax = 1,
		offset = {
			x:0,
			y:0
		}
	}) {
		this.position = position
		this.width = 50
		this.height = 150
		this.image = new Image()
		this.image.src = imageSrc
		this.scale = scale //escala
		this.framesMax = framesMax //quantidade máxima de frames
		this.framesCurrent = 0 //frame atual
		this.framesElapsed = 0//quantidade de frames decorridos na animação
		this.framesHold = 5 //tempo de espera entre um frame e outro
		this.offset = offset //deslocamento
	}

	//desenhando os sprites
	draw() {
		c.drawImage(
			this.image,
			this.framesCurrent * (this.image.width / this.framesMax),
			0,
			this.image.width / this.framesMax,
			this.image.height,
			this.position.x - this.offset.x,
			this.position.y - this.offset.y,
			(this.image.width / this.framesMax) * this.scale,
			this.image.height * this.scale
		)
	}

	animateFrames() {
		this.framesElapsed++
		
		if(this.framesElapsed % this.framesHold === 0){
			if(this.framesCurrent < this.framesMax -1){
				this.framesCurrent++
			}else{
				this.framesCurrent = 0
			}
		}
	}

	update(){
		this.draw()
		this.animateFrames()
	}
}