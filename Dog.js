class Dog 
{
    constructor(x,y)
    {
     super(x, y, 50, 50)
     this.image=loadImage("Images/doglmg.png")
     this.image2=loadImage("Images/doglmg1.png")
     this.A=[]
    }
    display()
    {
      super.display()
      if(this.body.velocity.x>10)
      {
        var position=[this.body.position.x,this .body.position.y]
        this.A.push(position)

      }
      for(var i=0;i<this.A.length;i++)
    {

    }
  }
}