console.log("printer.js");

const title = "CodePrinter";
function print(value) {
    console.log(value);
}

// 기본 내보내기 (Default Export)
export default {
    title,
    print,
};