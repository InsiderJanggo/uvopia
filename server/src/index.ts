import { SHA256 } from "crypto-js";
import Server from "./server";
const server = new Server()
server.start();

console.log(SHA256('WISLY').toString())