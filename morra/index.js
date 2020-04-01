module.exports = {
    morra: function (arg) {
        
        if (arg != "paper" && arg != "scissor" && arg != "stone") {
            return "Incorrect entry"
        }

        let casual = ["paper", "scissor", "stone"];
        let randomIndex = Math.floor(Math.random() * casual.length);
        let randomElement = casual[randomIndex];
        console.log("You choise:", arg);
        console.log("The opponent has chosen:", randomElement);

        if (arg === randomElement) {
            return {
                result: "You draw!",
                player: arg,
                computer: randomElement
            };
        } else if (arg == "paper" && randomElement == "stone" ||
            arg == "stone" && randomElement == "scissor" ||
            arg == "scissor" && randomElement == "paper") {

            return {
                result: "You win!",
                player: arg,
                computer: randomElement
            };
        } else
            return {
                result: "You lose!",
                player: arg,
                computer: randomElement
            };
    }
}
console.log(module.exports.morra("stone"));