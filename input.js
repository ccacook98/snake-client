const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  switch (key) {
  case '\u0003':
    process.exit();
    break;
  case 'w':
    console.log("Move: up");
    break;
  case 's':
    console.log("Move: down");
    break;
  case 'a':
    console.log("Move: left");
    break;
  case 'd':
    console.log("Move: right");
    break;
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = {
  setupInput,
}

