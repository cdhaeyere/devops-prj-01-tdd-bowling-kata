const Game = require('../game');
let game;

beforeEach(() => {
    game = new Game();
});

describe('Test game class', () => {
    test('should return 0 for a game of all 0', () => {
        for (i = 0; i < 20; i++) {
            game.roll(0);
        }
        expect(game.score).toEqual(0);
    });
});
