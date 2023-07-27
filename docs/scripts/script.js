window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const playIntroMusic = document.getElementById("game-intro-button");
    const teamButton = document.getElementById('team-button')
    const finalButton = document.getElementById('final-button')

    //grabbing social buttons
    const aamirLinkBtn = document.getElementById("aamir-link");
    const aamirGitBtn = document.getElementById("aamir-git");
    const andreLinkBtn = document.getElementById("andre-link");
    const andreGitBtn = document.getElementById("andre-git");


    //Intro music
    let backgroundMusicIntro = document.createElement("audio");
    backgroundMusicIntro.src = "/docs/sounds/desert-intro-sound.mp3";
    backgroundMusicIntro.loop = true;

    let startScreen = document.getElementById('game-intro');
    startScreen.appendChild(backgroundMusicIntro);

    let game;
  
    startButton.addEventListener("click", function () {
      startGame();
      //when starting we want to stop the intro music
      backgroundMusicIntro.pause();
    });
  
    restartButton.addEventListener('click', function(){
      location.reload();
    })

    finalButton.addEventListener('click', function(){
      location.reload();
    })

    teamButton.addEventListener('click', function(){
      game.meetTeam()
    })

    // Make social buttons work
    // Add click event handlers to each button
    aamirLinkBtn.addEventListener("click", function () {
      goSocial("http://linkedin.com/in/aamir-mushtaq-97236224a");
    });

    aamirGitBtn.addEventListener("click", function () {
      goSocial("https://github.com/Aamir269");
    });

    andreLinkBtn.addEventListener("click", function () {
      goSocial("https://www.linkedin.com/in/mpintoandre/");
    });

    andreGitBtn.addEventListener("click", function () {
      goSocial("https://github.com/pinto-andre");
    });

    playIntroMusic.addEventListener('click', function(){
      backgroundMusicIntro.play();
    })

    function startGame() {
      console.log("start game");
  
      game = new Game(); //here it recognizes the class created in the game.js file which defines our specs(?)
  
      game.start(); //here it recognizes the function created in the game.js file which defines our starting the game
    }
    
    //creating a function that opens social websites on other browser tabs - without "blank", doesn't work
    function goSocial(socialUrl) {
      window.open(socialUrl, "blank");
    }
    
    //Function that handles keydown events (pressing the key)
  function handleKeydown (event){
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowUp",
      "ArrowRight",
      "ArrowLeft"
    ];

    //Checking if the pressed key belongs to the array of possible keys
    if(possibleKeystrokes.includes(key)){
      //prevent the default key actions from happening, in this case it's scrolling up, down, right and left in the browser window
      event.preventDefault();

      //Only when we have a game loaded, we are able to move the player
      if(game){
        switch(key){
          case "ArrowLeft":
          game.player.directionX = 0; //since left is "origin" if we press it, it moves closer to the origin (-Xpx)
          break;

          case "ArrowRight":
          game.player.directionX = 0; //since right is the end of the board if we press it, it moves closer to the outter horizontal limit
          break;

          case "ArrowUp":
          console.log("test");
          if (game.player.top >= 589){
            game.player.handleJump()
            break;
          }; // we want to jump X pixels when hitting space
          break;
        }
      }
    }
  }
  //Function that handles keyup events (releasing the key)
  function handleKeyup (event){
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowUp",
      "ArrowRight",
      "ArrowLeft"
    ]

    //Checking if the pressed key belongs to the array of possible keys
    if(possibleKeystrokes.includes(key)){
      //prevent the default key actions from happening, in this case it's scrolling up, down, right and left in the browser window
      event.preventDefault();

      //Only when we have a game loaded, we are able to move the player
      if(game){
        switch(key){
          case "ArrowLeft":
          game.player.directionX = 0; //since left is "origin" if we press it, it moves closer to the origin (-1px)
          break;

          case "ArrowRight":
          game.player.directionX = 0; //since right is the end of the board if we press it, it moves closer to the outter horizontal limit
          break;

          case "ArrowUp":
          game.player.directionY = 0; 
          break;
        }
      }
    }
  }
    //Associate the handleKeydown function with an Event Listener
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
    
    
  

  };
  