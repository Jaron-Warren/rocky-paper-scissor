
// let choices = {
//   rock: {
//     name: "rock",
//     beats: 'scissor'
//   },
//   scissors: {
//     name: "scissors",
//     beats: 'paper'
//   },
//   paper: {
//     name: "paper",
//     beats: 'rock'
//   }
// }
let winConditions = []

winConditions['paper'] = 'rock'
winConditions['rock'] = 'scissors'
winConditions['scissors'] = 'paper'

function randomChoice() {
  let random = Math.floor((Math.random() * 3) + 1)
  switch (random) {
    case 1:
      return 'rock'
    case 2:
      return 'scissors'
    case 3:
      return 'paper'
  }
}

function rockPaperScissor(playerChoice) {
  let computerChoice = randomChoice()
  console.log(computerChoice)
  if (playerChoice == computerChoice) {
    console.log('draw')
  } else if (winConditions[playerChoice] == computerChoice) {
    console.log('you win!')
  } else console.log('you lose!')
}


