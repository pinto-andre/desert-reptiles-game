// File where we define our players specs

class Player{
    constructor(gameScreen, left, top, width, height, imgSrc){ 
        this.gameScreen = gameScreen;
        //defining the horizontal position of the player (via position absolute)
        this.left = left;
        //defining the vertical position of the player (via position absolute)
        this.top = top;
        //defining the width of our player
        this.width = width;
        //defining the height of our player
        this.height = height;

        //direction of the players moving horizontally
        this.directionX = 0;
        //direction of the players moving vertically
        this.directionY = 0;

        this.velocityY = 0;

        //Create the img tag for the player, define src and do default styling
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";



        //Set up default element's properties
        this.element.style.width = `${width}px`; //players width
        this.element.style.height = `${height}px`; //players height
        this.element.style.left = `${left}px`; //players horizontal position
        this.element.style.top = `${top}px`; //players vertical position
        

        this.isJumping = false;

        //Append the player to the game screen
        this.gameScreen.appendChild(this.element);
    }
    //To create the movement actions of the player, we create a move function out of the constructor. This will update the player's position based on direction X and direction Y
    move(){
        this.left += this.directionX;
        this.top += this.directionY;

        //Ensure the player stays within the limits of the game screen for this:
            //Handle left and right borders (.offsetWidth() - returns the width of an element in data type number)

            //Right side
        if(this.left + this.width > this.gameScreen.offsetWidth){
                this.left = this.gameScreen.offsetWidth - this.width;
        }
            //Left side
        else if(this.left < 0){
                this.left = 0;
        }

        if(this.top > 590 && this.isJumping){
            this.velocityY = 0;
            this.top = 589;
            this.isJumping = false;
         }

        //Top side
        if(this.top < 200){
            this.top = 200;
        }

        else if (this.top >= 200 && this.isJumping){
            this.velocityY += 0.5
            this.top += this.velocityY;
            
        }
        

        this.updatePosition();
    }

    //Create a function that updates positions and to be used in the move function above
    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    handleJump(){
        this.velocityY = -17.5;
        this.isJumping = true;
    }

    didCollide(obstacle){
        //.getBoundingClientRect() --> returns info about top, left, right, bottom, width, height, about a HTML element

        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if(playerRect.left < obstacleRect.right &&
           playerRect.right > obstacleRect.left &&
           playerRect.top < obstacleRect.bottom &&
           playerRect.bottom > obstacleRect.top)
           {
            return true
           }
           else {
            return false;
           }
    }
}