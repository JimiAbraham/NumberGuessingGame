const prompter = require('prompt-sync')

const prompt = prompter();

var startingNumber = 2; // because the user will first guess between 1 and 2

var score = 0 // this score will later increament!

var playerInput // this holds what the user input will be..


const playerName = prompt('Hey Buddie, Gimme your user name!:..') // get player name from here


function numberGenerator(num) // this function takes a paramter through which it generates a randon number and returns as num

{

    var num = Math.floor(Math.random() * num + 1)

    return num

}


while (playerName) { //it is while loop, you go guess tireeee!!  - and as you can see, i no break ham 🥹 LOL!
    rand = numberGenerator(startingNumber) //call the number generator passing in an argument

    function failedAttempt() { // you won't always get it abiii, then we call this function once you guess worngly

        playerInput = prompt(`Oops, ${playerName}, try picking again  a number between 1 and ${startingNumber}:...`)


        return playerInput
    }


    playerInput = prompt(`Game On! choose a number between 1 and ${startingNumber}:>>>>`) // this where we check, like judgment day!! o ti lo? abi you pass

    if (rand == playerInput) { // then the increamenting and all comes here!!
        score++;
        startingNumber++;
        console.log(`👏👏👏 Bravoo! That was correct!, Your new score is:  ${score} and you are on level ${startingNumber - 1}`)

    } else {
        failedAttempt()

    }
}