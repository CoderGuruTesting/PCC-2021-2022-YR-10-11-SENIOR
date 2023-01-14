process.stdin.resume();
process.stdin.setEncoding('ascii');
var stdin = "";
process.stdin.on('data', (data) => {stdin += data});
process.stdin.on('end', () => {stdin = stdin.split("\n");stdin.reverse();main()});
prompt = () => stdin.pop();

function main() {
    // Enter your code here
}
