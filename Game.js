class Game
{
    constructor()
    {
        
    }
    readGameState()
    {
        var gameState=database.ref("gameState")
        gameState.on("value",function(data){
          State=data.val()  
        })
    }
    writeGameState(A){
        database.ref("/")
        .update({
            "gameState":A
            
        }) 
    }
    startTheGame()
    {
        if(State==0){
            player=new Player()
            player.readPlayerCount()
            form=new Form()
            form.display()
        }
    }
}