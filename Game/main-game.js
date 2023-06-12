import { Game } from "./js/Game.js"

const game = new Game(document);
game.startGame(document);
console.log(game);

// СТАРОЕ
// game.init();
// game.timeout = setInterval(game.engine.update.bind(game.engine), 1000 / game.road.linesPerSecond, game); // как тут bind работает - пока непонятно
