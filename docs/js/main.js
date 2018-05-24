"use strict";
var Bubble = (function () {
    function Bubble(fish) {
        this.element = document.createElement("bubble");
        document.body.appendChild(this.element);
        this._fish = fish;
        this.element.style.top = fish.element.style.top;
    }
    Bubble.prototype.follow = function () {
        this.element.style.left = this._fish.x + "px";
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        this.fishColors = ["", "yellow", "orange", "red", "green"];
        this.fishColor = "";
        this.isDead = false;
        this.x = 0;
        this.y = 0;
        this.speed = 1;
        console.log("Fish created");
        this.fishColor = this.fishColors[Math.floor(Math.random() * this.fishColors.length)];
        this.element = document.createElement("fish");
        this.element.className = this.fishColor;
        this.y = Math.floor(Math.random() * window.innerHeight - 120);
        this.x = Math.floor(Math.random() * (window.innerWidth + 120));
        this.speed = Math.floor(Math.random() * 2) + 0.5;
        this.element.style.animationDuration = Math.floor(Math.random() * 4) + "s";
        this.element.style.top = this.y + "px";
        this.element.style.zIndex = "2";
        this.element.addEventListener("click", function () {
            _this.killFish();
        });
        document.body.appendChild(this.element);
        setTimeout(function () {
            _this.bubble = new Bubble(_this);
        }, Math.random() * 14000);
    }
    Fish.prototype.update = function () {
        if (this.isDead) {
            return;
        }
        this.placement();
        if (typeof this.bubble !== "undefined") {
            this.bubble.follow();
        }
    };
    Fish.prototype.placement = function () {
        this.x = (this.x - this.speed);
        if (this.x < -160) {
            this.x = window.innerWidth;
        }
        this.element.style.left = this.x + "px";
    };
    Fish.prototype.killFish = function () {
        this.element.className = "dead";
        this.isDead = true;
        this.element.style.zIndex = "1";
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.fishes = [];
        console.log("new game created!");
        for (var i = 0; i < 25; i++) {
            setTimeout(function () {
                _this.fishes.push(new Fish());
            }, i * 25);
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var i = 0; i < this.fishes.length; i++) {
            this.fishes[i].update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map