
//Cactus 1 obstacle

class Obstacle{
    constructor(gameScreen){
        this.gameScreen = gameScreen

        //random position for the appearance of the obstacles
        this.top = 540; //we only want obstacles appearing on 300px heigth and starting on pixel 300.

        //appear on right
        this.left = 970;
        this.width = 85;
        this.height = 125;

        //create the HTML element and default styling

        this.element = document.createElement("img");
        this.element.src = "docs/images/cacti2.png";
        this.element.style.position = "absolute";
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;

        this.gameScreen.appendChild(this.element);

    }

    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }


    move(){
        //Drop the obstacle 3px to the bottom (you can chose the number of pixels)
        this.left -= 6;
        this.updatePosition();
    }
}

// falcon obstacle

    class Falcon{
        constructor(gameScreen){
            this.gameScreen = gameScreen
            //random position for the appearance of the obstacles
            this.top = Math.floor(Math.random()*300+250); //we only want obstacles appearing on 300px heigth and starting on pixel 300.
            //appear on right
            this.left = 970;
            this.width = 100;
            this.height = 50;
            //create the HTML element and default styling
            this.element = document.createElement("img");
            this.element.src = "docs/images/falcon.png";
            this.element.style.position = "absolute";
            this.element.style.top = `${this.top}px`;
            this.element.style.left = `${this.left}px`;
            this.element.style.height = `${this.height}px`;
            this.element.style.width = `${this.width}px`;
            this.gameScreen.appendChild(this.element);
        }
        updatePosition(){
            this.element.style.left = `${this.left}px`;
            this.element.style.top = `${this.top}px`;
        }
        move(){
            //Drop the obstacle 3px to the bottom (you can chose the number of pixels)
            this.left -= 8;
            this.updatePosition();
        }
    }


//Dragonfly obstacle

    class Dragonfly{
        constructor(gameScreen){
            this.gameScreen = gameScreen
            //random position for the appearance of the obstacles
            this.top =  Math.floor(Math.random()*150+350); //we only want obstacles appearing on 300px heigth and starting on pixel 300.
            //appear on right
            this.left = 970;
            this.width = 100;
            this.height = 50;
            //create the HTML element and default styling
            this.element = document.createElement("img");
            this.element.src = "docs/images/dragonfly.png";
            this.element.style.position = "absolute";
            this.element.style.top = `${this.top}px`;
            this.element.style.left = `${this.left}px`;
            this.element.style.height = `${this.height}px`;
            this.element.style.width = `${this.width}px`;
            this.gameScreen.appendChild(this.element);
        }
        updatePosition(){
            this.element.style.left = `${this.left}px`;
            this.element.style.top = `${this.top}px`;
        }
        move(){
            //Drop the obstacle 3px to the bottom (you can chose the number of pixels)
            this.left -= 6;
            this.updatePosition();
        }
    
}

