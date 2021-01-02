class Form
{
    constructor()
    {
        this.heading=createElement("h2")
        this.inputBox=createInput("Enter the Name")
        this.button=createButton("Play")
        this.Greating=createElement("h2")
        this.resetButton= createButton("reset")
    }
   display()
   {
       console.log("Hii")
  
  this.heading.html("Multiplayer Car Racing")   
  this.heading.position(500, 100)
  
  this.inputBox.position(500, 250)
  
  this.button.position(500,300)
  this.button.mousePressed(()=>
  {
      player.name=this.inputBox.value()
      this.inputBox.hide()
      this.button.hide()
      Count=Count+1
      player.position=Count
      player.writePlayerCount(Count)
     
     this.Greating.html("Hii "+player.name)
     this.Greating.position(500, 250)
      player.updateName()
  })
  this.resetButton.mousePressed(()=>{
      player.writePlayerCount(0)
      var C=database.ref("Allplayers")
      C.remove()
      game.writeGameState(0)
  })
   }
}