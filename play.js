//include client code from client.js
const {connect} = require("./client.js");
//include input code from input.js
const {setupInput} = require("./input.js");

console.log("Connecting ...");
const conn = connect();
setupInput(conn);




