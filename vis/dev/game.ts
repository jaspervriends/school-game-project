class Game {

    private fishes:Array<Fish> = [];

    constructor(){
        console.log("new game created!")

        for(let i = 0; i < 25; i++) {
            setTimeout(() => {
                this.fishes.push(new Fish());
            }, i * 25);
        }

        this.gameLoop();

    }

    private gameLoop() 
    {
        for(let i = 0; i < this.fishes.length; i++) {
            this.fishes[i].update();
        }

        requestAnimationFrame(() => this.gameLoop());
    }
}

window.addEventListener("load", () => new Game())
