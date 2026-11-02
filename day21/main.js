console.log("main.js");

// 파일의 대표 하나 가져오기 (Default Import)
import printer from "./printer.js";

printer.print(printer.title);

const count = 3;
console.log(printer.title, count);