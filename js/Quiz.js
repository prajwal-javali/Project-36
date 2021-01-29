class Quiz {
    constructor() {

    }

    getState() {
        database.ref('gameState').on("value", function(a) {
            gameState = a.val()
        })
    }

    updateGameState(b) {
        database.ref('/').update({
            gameState: b 
        })
    }

    async start(){
        if(gameState === 0){
          contestant = new contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
          question = new Question()
          question.display();
        }
    }
}