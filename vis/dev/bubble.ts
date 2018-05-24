class Bubble
{
    element:HTMLElement;
    _fish:Fish;

    constructor(fish:Fish)
    {
        this.element = document.createElement("bubble");


        document.body.appendChild(this.element);

        this._fish = fish;
        this.element.style.top = fish.element.style.top;
    }

    follow()
    {
        this.element.style.left = this._fish.x + "px";
    }
}