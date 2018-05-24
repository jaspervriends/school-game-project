# CMTTHE04 Week4 oefening 1

## Pong Game Screens

Een interface voor de Pong game

## PlayScreen Bouwen

- Bekijk de `PlayScreen.ts` class. 
- Verplaats het aanmaken en updaten van de paddle en ball naar PlayScreen.
- Playscreen heeft geen `gameLoop` en ook geen `requestAnimationFrame`
- Playscreen heeft wel een `update` functie waarin je de ball en paddle kan updaten.

Hieronder zie je een voorbeeld waarbij de paddle al is overgezet naar de PlayScreen class. Je moet hier de ball nog aan toevoegen.
```
class PlayScreen {

    private paddle: Paddle

    constructor() {
        this.paddle = new Paddle(20, 87, 83)
    }

    public update(): void {
        this.paddle.update()
    }
}
```

### Game

- Game.ts heeft nu alleen nog de gameloop met `requestAnimationFrame`. 
- Game.ts krijgt een `screen` property. Het type van `screen` is `any`.
- Daarin plaats je een `new PlayScreen()`
- In de update van Game.ts roep je de update van screen aan!
- Test of dit werkt!

Game gaat er als volgt uit zien:

**Game.ts**
```
class Game {
    screen:any
    constructor(){
        this.screen = new PlayScreen()
        this.gameLoop()
    }
    gameLoop(){
        this.screen.update()
        requestAnimationFrame(() => this.gameLoop())
    }
}
```

## StartScreen Bouwen

- Bekijk de `StartScreen.ts` class. 
- Startscreen toont een html element met een splash image van je game.
- Startscreen heeft een update functie. 
- In Game.ts verander je `this.screen = new PlayScreen()` naar `this.screen = new StartScreen(this)`.
- Run de game. Zie je het splash screen?
- Plaats zelf een goede afbeelding in het splash screen!

### Van startscreen naar playscreen

- Schrijf in `Game.ts` een `showPlayScreen` functie die van scherm kan wisselen
- Je hoeft alleen de `screen` variabele aan te passen: `this.screen = new PlayScreen()`
- Je moet ook de DOM leeg maken, anders blijven de HTML elementen van het vorige scherm zichtbaar

**Game.ts**
```
class Game {
    showPlayScreen(){
        document.body.innerHTML = ""
        this.screen = new PlayScreen()
    }
}
```
Kijk nu zelf hoe je vanuit StartScreen deze functie kan aanroepen!

### GameOverScreen

- Kijk of je de bovenstaande oefening ook kan doen voor een Game Over screen.
- Het Game Over screen wordt getoond als je teveel ballen het scherm uit laat gaan.
- Het Game Over screen toont een score, en een knop om terug naar het startscreen of playscreen te gaan.