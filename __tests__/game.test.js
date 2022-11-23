/* eslint-disable*/

const Game = require('../game')
let game

beforeEach(() => {
  game = new Game()
})

describe('Test game class', () => {
  test('should return 0 for a game of all 0', () => {
    for (i = 0; i < 20; i++) {
      game.roll(0)
    }
    expect(game.score).toEqual(0)
  })
  test('should return 20 for game of all ones', () => {
    rollMany(20, 1)
    expect(game.score).toEqual(20)
  })
  test('handles a spare with correct bonus', () => {
    game.roll(5)
    game.roll(5)
    game.roll(1)
    rollMany(17, 0)
    expect(game.score).toEqual(12)
  })
  test('handles a strike with correct bonus', () => {
    game.roll(10)
    game.roll(1)
    game.roll(1)
    rollMany(17, 0)
    expect(game.score).toEqual(14)
  })
  test('max score is 300', () => {
    rollMany(1000000, 10)
    expect(game.score).toEqual(300)
  })
  test('example scenario number 1', () => {
    game.roll(5)
    game.roll(5)
    game.roll(1)
    expect(game.score).toEqual(16)
  })
})

function rollMany (rolls, pins) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins)
  }
}