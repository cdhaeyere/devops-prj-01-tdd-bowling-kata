class Game {

    constructor(){
        this.rollsTable = [];
    }

    roll (numberOfPins) {
        this.rollsTable.push(numberOfPins);    
    }

    get score(){
        let score = 0;
        let rollIndex = 0;

        for(let frameIndex=0;frameIndex<10;frameIndex++){ 

            let frameScore = this.rollsTable[rollIndex] + this.rollsTable[rollIndex+1] 
            
            if (frameScore === 10) {
                score += 10 + this.rollsTable[rollIndex+2];
            } else {
                score += frameScore;
            }

            rollIndex+=2
        }

        return score;
    }
}

module.exports = Game;