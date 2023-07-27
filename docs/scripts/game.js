//file with the game functioning

class Game {
    // constructor is a function that is going to be called any time that we create an object via class;
    //it's useful to store all the properties that belong to the future object.

    constructor(){
        //get all the possible screens
        this.startScreen = document.getElementById('game-intro');
        //game-screen and game-end are initially hidden
        this.gameScreen = document.getElementById('game-screen');
        this.gameRoad = document.getElementById('road');
        this.gameEndScreen = document.getElementById('game-end');
        this.teamScreen = document.getElementById('team-screen');


        //taking care of music
        //gameScreen music
        this.gameMusic = document.createElement("audio");
        this.gameMusic.src = "docs/sounds/pokemon-ruby-desert.mp3";
        this.gameScreen.appendChild(this.gameMusic);
        this.gameMusic.loop = true;

        //endScreen music
        this.endMusic = document.createElement("audio");
        this.endMusic.src = "docs/sounds/desert-intro-sound.mp3";
        this.gameEndScreen.appendChild(this.endMusic);
        this.endMusic.loop = true;


        //player
        this.player = new Player(
            this.gameScreen,
            200,
            590,
            80,
            40,
            "docs/images/chameleon2.png"
        );

        //style for game board
        this.width = 1000;
        this.height = 660;

        //style for road
        this.roadWidth = 1000;
        this.roadHeight = 200;

        //obstacles (since we have equal obstacles, the best way to list them is throught an array, if they differed the best would be an array of objects, where each object has an array) --> use this in game making
        //for example:
        //obstacles = {trees: [], rocks: []}  

        this.obstacles = [];
        this.fennec = [];
        this.dragonfly = [];

        //flag to give info about process of pushing (when setTimeout runs it turns to true and when in finishes returns to false)
        this.isPushingObstacle = false;

        //score
        this.score = 0;

        //lives
        this.lives = 3;

        //increasing speed of obstacles
        this.frames = 0;

        //gameOVer flag
        this.gameIsOver = false;
    }

    start(){
        //set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.gameRoad.style.height = `${this.roadHeight}px`;
        this.gameRoad.style.width = `${this.roadWidth}px`;

        //when starting we want to hide the start-screen and show the game-screen
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameRoad.style.display = "block";
        
        this.gameMusic.play();

        //when starting we want to start the game loop
        this.gameLoop();
    };



    //Creating an Animation function
    gameLoop(){
        console.log("Game Loop");

        //Check if the game is over to interrupt the game loop, hit return which stops the loop
        if(this.gameIsOver){
            return
        }

        this.update();

        this.frames ++;

        window.requestAnimationFrame(()=>this.gameLoop()) 
    }

    update(){
        //BONUS: scores and lives
        let score = document.getElementById('score');
        let lives = document.getElementById('lives');


        score.innerHTML = this.score;
        lives.innerHTML = this.lives;

        if(this.lives === 0){
            this.endGame();
            
        }

        this.player.move(); // This function calls the player to move
        
        //Cacti collisions

        //Check for collision and if an obstacle is still on the screen
        for(let i = 0; i < this.obstacles.length; i++){
            const obstacle = this.obstacles[i];
            obstacle.move();

            //Check if the player collided with an obstacle
            if(this.player.didCollide(obstacle)){
                //remove the obstacle from the DOM
                obstacle.element.remove();

                //remove the obstacle from the array
                this.obstacles.splice(i,1);

                //Reduce player's life by 1
                this.lives --;


            }


            //check if the obstacle is off-screen at the left side
            if(obstacle.left < 0){
                //congratulations to you, you avoided one obstacle
                this.score ++;

                //Remove the obstacle from the HTML
                obstacle.element.remove();

                //remove the obstacle from the array
                this.obstacles.splice(i,1);

            }
        }

        //Update obstacles
        if(!this.obstacles.length && !this.isPushingObstacle){
            this.isPushingObstacle = true;
            setTimeout(()=>{
                this.obstacles.push(new Obstacle(this.gameScreen));
                setTimeout(()=>{
                    this.obstacles.push(new Obstacle(this.gameScreen));
                    this.isPushingObstacle = false;
                }, Math.floor(Math.random()*600+25))
            }, 500)
        }


        //Fox collision

        //Check for collision and if a Fennec is still on the screen
        for(let i = 0; i < this.fennec.length; i++){
            const obstacle = this.fennec[i];
            obstacle.move();
            //Check if the player collided with an obstacle
            if(this.player.didCollide(obstacle)){
                //remove the obstacle from the DOM
                obstacle.element.remove();
                //remove the obstacle from the array
                this.fennec.splice(i,1);
                //Reduce player's life by 1
                this.lives --;
            }
            //check if the obstacle is off-screen at the left side
            if(obstacle.left < 0){
                //congratulations to you, you avoided one obstacle
                this.score ++;
                //Remove the obstacle from the HTML
                obstacle.element.remove();
                //remove the obstacle from the array
                this.fennec.splice(i,1);
            }
        }
        if(!this.fennec.length && !this.isPushingObstacle){
            this.isPushingObstacle = true;
            setTimeout(()=>{
                this.fennec.push(new Fennec(this.gameScreen));
                this.isPushingObstacle = false;
            }, Math.floor(Math.random()*1500+ 500))
        }


        //Dragonfly collision

        //Check for collision and if a Dragonfly is still on the screen
        for(let i = 0; i < this.dragonfly.length; i++){
            const obstacle = this.dragonfly[i];
            obstacle.move();
            //Check if the player collided with an obstacle
            if(this.player.didCollide(obstacle)){
                //remove the obstacle from the DOM
                obstacle.element.remove();
                //remove the obstacle from the array
                this.dragonfly.splice(i,1);
                //Reduce player's life by 1
                if(this.lives >= 3){
                    this.lives = 3;
                }
                else{this.lives ++;}
                
            }
            //check if the obstacle is off-screen at the left side
            if(obstacle.left < 0){
                //congratulations to you, you avoided one obstacle
                //Remove the obstacle from the HTML
                obstacle.element.remove();
                //remove the obstacle from the array
                this.dragonfly.splice(i,1);
            }
        }
        if(!this.dragonfly.length && !this.isPushingObstacle){
            this.isPushingObstacle = true;
            setTimeout(()=>{
                this.dragonfly.push(new Dragonfly(this.gameScreen));
                this.isPushingObstacle = false;
            },  Math.floor(Math.random()*2000+ 700))
        }
    }


    
    endGame(){
        //remove the player
        this.player.element.remove();

        //remove all obstacles from the array of obstacles
        this.obstacles.forEach((obstacle)=>{
            //removes from the HTML, here since we lost, we don't need to remove from DOM because uppon restarting the game, the obstacles array resets to its default value (an empty array).
            obstacle.element.remove();
        })
        this.gameIsOver = true;

        this.gameMusic.pause();
        this.endMusic.play();

        //Hide the game screen and road
        this.gameScreen.style.display = 'none'; //display property only accepts 'none' and 'block', while visibility property only accepts 'hidden' and 'display' --> in this case, we want the display property.

        //Show end game screen
        this.gameEndScreen.style.display = 'block';
        
    }

    meetTeam(){
        this.endMusic.play();

        //Hide the game screen and road
        this.gameEndScreen.style.display = 'none'; //display property only accepts 'none' and 'block', while visibility property only accepts 'hidden' and 'display' --> in this case, we want the display property.

        //Show end game screen
        this.teamScreen.style.display = 'block';
    }

}