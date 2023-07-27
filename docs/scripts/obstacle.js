
//Cactus obstacle

class Obstacle{
    constructor(gameScreen){
        this.gameScreen = gameScreen

        //random position for the appearance of the obstacles
        this.top = 580; //we only want obstacles appearing on 300px heigth and starting on pixel 300.

        //appear on right
        this.left = 970;
        this.width = 30;
        this.height = 60;

        //create the HTML element and default styling

        this.element = document.createElement("img");
        this.element.src = "./docs/images/cacti.png";
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

// Fox obstacle

    class Fennec{
        constructor(gameScreen){
            this.gameScreen = gameScreen
            //random position for the appearance of the obstacles
            this.top = 590; //we only want obstacles appearing on 300px heigth and starting on pixel 300.
            //appear on right
            this.left = 970;
            this.width = 85;
            this.height = 35;
            //create the HTML element and default styling
            this.element = document.createElement("img");
            this.element.src = "./docs/images/fennec.png";
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


//Dragonfly obstacle

    class Dragonfly{
        constructor(gameScreen){
            this.gameScreen = gameScreen
            //random position for the appearance of the obstacles
            this.top = 530; //we only want obstacles appearing on 300px heigth and starting on pixel 300.
            //appear on right
            this.left = 970;
            this.width = 100;
            this.height = 50;
            //create the HTML element and default styling
            this.element = document.createElement("img");
            this.element.src = "./docs/images/dragonfly.png";
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

