let userName = prompt("Hi, who is this?");
userName ? document.getElementById('greeting').innerText = `Hello, ${userName}!`:
document.getElementById('greeting').innerText ="Hello!"

function shakeMagic8Ball () {

    let userQuestion = prompt('What is your question for the mighty 8-ball?');
    console.log(`${userName ? userName : 'User'} asks: ${userQuestion}`);
    
    const randomNumber = Math.floor(Math.random() * 8);
    
    let eightBall = '';
    
    switch (randomNumber) {
      case 0:
        eightBall = 'It is certain';
        break;
      case 1:
        eightBall = 'It is decidedly so';
        break;
      case 2:
        eightBall = 'Reply hazy try again';
        break;
      case 3:
        eightBall = 'Cannot predict now';
        break;
      case 4:
        eightBall = 'Do not count on it';
        break;
      case 5:
        eightBall = 'My sources say no';
        break;
      case 6:
        eightBall = 'Outlook not so good';
        break;
      case 7:
        eightBall = 'Signs point to yes';
        break;
    }
    
    console.log(`The Magic Eight Ball says: ${eightBall}`);
    document.getElementById('response-text').innerText =`$(Username) has asked the Magic 8 Ball $
    {userQuestion}. The wise and wordous  8 ball has replied $(eightBall)`
}

const answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

const ball = document.getElementById("ball");
const answerText = document.getElementById("answer-text");
const askButton = document.getElementById("askButton");

askButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  answerText.textContent = answers[randomIndex];
});





