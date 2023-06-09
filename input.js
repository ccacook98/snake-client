let connection;

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  switch (key) {
  case '\u0003':
    process.exit();
    break;
  case 'w':
    connection.write("Move: up");
    break;
  case 's':
    connection.write("Move: down");
    break;
  case 'a':
    connection.write("Move: left");
    break;
  case 'd':
    connection.write("Move: right");
    break;
  case 'h':
    connection.write("Say: Hi!");
    break;
  case 'y':
    connection.write("Say: Yes.");
    break;
  case 'n':
    connection.write("Say: No.");
    break;
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = {
  setupInput,
};

