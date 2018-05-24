class Fish {
    element:HTMLElement;
    bubble:Bubble;

    fishColors = ["", "yellow", "orange", "red", "green"];

    fishColor = "";

    isDead = false;

    x = 0;
    y = 0;

    private speed:number = 1;

    constructor() {
        console.log("Fish created")

        this.fishColor = this.fishColors[Math.floor(Math.random() * this.fishColors.length)];

        this.element = document.createElement("fish");

        this.element.className = this.fishColor;

        this.y = Math.floor(Math.random() * window.innerHeight - 120);
        this.x = Math.floor(Math.random() * (window.innerWidth + 120));

        this.speed = Math.floor(Math.random() * 2) + 0.5;

        this.element.style.animationDuration = Math.floor(Math.random() * 4) + "s";

        this.element.style.top = this.y + "px";

        this.element.style.zIndex = "2";

        this.element.addEventListener("click", () => {
            this.killFish();
        });

        // Add element to the body
        document.body.appendChild(this.element);

        setTimeout(() => {
            this.bubble = new Bubble(this);
        }, Math.random() * 14000);
    }

    update() 
    {
        if(this.isDead) { return; }

        this.placement();
        if(typeof this.bubble !== "undefined") {
            this.bubble.follow();
        }
    }

    placement()
    {
        this.x = (this.x - this.speed);

        if (this.x < -160) {
            this.x = window.innerWidth;
        }
        
        this.element.style.left = this.x + "px";
    }

    killFish()
    {
        this.element.className = "dead";
        this.isDead = true;
        this.element.style.zIndex = "1";
    }
}
