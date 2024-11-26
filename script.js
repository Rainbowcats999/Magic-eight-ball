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





