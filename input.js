const connect = require("./client");
// setup interface to handle user input from stdin
let connection;

const MOVE_UP_KEY = "w";
const MOVE_LEFT_KEY = "a";
const MOVE_DOWN_KEY = "s";
const MOVE_RIGHT_KEY = "d";

const handleUserInput = function (key) {
  // your code here
  if (key === "\u0003") {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
};
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};
// setupInput();

module.exports = { setupInput };
