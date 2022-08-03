const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on("connect", () => {
    console.log("Connection established to game server");
    conn.write("Name: MBM");
    // conn.write("Move: up");
  });
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });

  return conn;
};
// console.log("Connecting ...");
connect();

module.exports = connect;
