var dog, dogImage;

function preload()
{

}

function setup() {
	createCanvas(500, 600);
  dog=new Dog(250, 300, 50, 50)
  dog1=new Dog(300, 350, 50, 50)
 
}


function draw() {
  background(0)
  dog.display()  
  dog1.display()
  

}



