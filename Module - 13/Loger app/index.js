// console.log(process);
// console.log(process.env);

// console.log(process.argv);

const inputArgument = process.argv.slice(2);

const text = inputArgument.join(" ");

if (text === "") {
    console.log("Please provide some text to log.");
    process.exit(1);
}


const filePath = __dirname + "./log.txt";

console.log("Logging:", text);