exports.even_and_odd0 = function (arg) {
    let num = arg % 2;
    console.log(arg);
    console.log(num);

    if (num == 0) {
        return "The number is even....!"
    } else
        return "The number is odd....!"

};
console.log(exports.even_and_odd0(9999999));

exports.even_and_odd1 = function () {
    let choice = Math.floor(Math.random() * 9999999);
    console.log(choice);
    let num = choice % 2;
    console.log(num);
    if (num == 0) {
        return (
            console.log("The number is even!")
        )
    } else
        return (
            console.log("The number is odd!")
        )
}
exports.even_and_odd1();

exports.even_and_odd = function (arg) {

    if (arg != "even" && arg != "odd") {
        return (console.log("Incorrect entry, enter even or odd"))
    }

    let choice = Math.floor(Math.random() * 9999999);
    console.log(arg);
    console.log(choice);
    let num = choice % 2;
    console.log(num);
    
    if (arg == "even" && num == 0 || arg == "odd" && num == 1) {
        return (
            console.log("You win! " + "choice: " + arg + " number: " + choice)
        )
    } else
        return (
            console.log("You lose! " + "choice: " + arg + " number: " + choice)
        )
}
exports.even_and_odd("even");