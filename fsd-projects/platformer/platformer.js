$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(550, 615, 100, 10,"hotpink")
    createPlatform(800, 550, 100, 10,"teal")
    createPlatform(1050, 490, 100, 10,"hotpink")
    createPlatform(1225, 400, 100, 10, "teal")
    createPlatform(620, 420, 100, 10, "hotpibk")
    createPlatform(450, 310, 100, 10, "hotpink")
    createPlatform(250, 385, 100, 10, "teal")
    createPlatform(100, 290, 100 , 10, "hotpink")
    
    // TODO 3 - Create Collectables
    createCollectable("steve", 805, 500,)
    createCollectable("diamond", 1285, 350)
    createCollectable("diamond", 100, 200)


    // TODO 4 - Create Cannons
    createCannon("top", 700, 2000)
    createCannon("left", 300, 4000)
    createCannon("top", 1300, 2000)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
