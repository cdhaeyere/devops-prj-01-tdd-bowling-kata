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

        for (let frameIndex=0;frameIndex<10;frameIndex++){ 

            if (this.rollsTable[rollIndex] === 10) {
                score += this.strikeBonus(rollIndex);
                rollIndex++;
                continue;
            }

            let frameScore = this.sumFrame(rollIndex);
            
            if (frameScore === 10) {
                score += this.spareBonus(rollIndex);
            } else {
                score += frameScore;
            }

            rollIndex+=2
        }

        return score;
    }

    sumFrame(rollIndex){
        return this.rolls[rollIndex] + this.rolls[rollIndex+1];
    }

    spareBonus(rollIndex){
        return 10 + this.rolls[rollIndex+2];
    }

    strikeBonus(rollIndex){
        return 10+this.rolls[rollIndex+1]+this.rolls[rollIndex+2];
    }
}

module.exports = Game;