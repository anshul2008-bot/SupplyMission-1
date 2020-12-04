var helicopterIMG, helicopterSprite, packageSprite, packageBody, packageIMG;
var packageBody, ground, boxSide1, boxSide2, boxSide3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)

	boxSide1 = createSprite(250,610,10,100);
	boxSide1.shapeColor = color("red");

	boxSide2 = createSprite(550,610,10,100);
	boxSide2.shapeColor = color("red");

	boxSide3 = createSprite(400,665,310,10);
	boxSide3.shapeColor = color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.1, isStatic: true });
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);

	Engine.run(engine);

	boxSide1 = Bodies.rectangle(200,200,10, 100, { isStatic: true });
	World.add(world, boxSide1);


}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.setStatic(packageBody, false);

	}
}



