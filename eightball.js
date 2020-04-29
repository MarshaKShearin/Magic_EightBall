var userName = prompt('What is your name?');

console.log('Hello ' + userName);

var userQuestion = prompt('What is your question?');

alert('You asked me ' + userQuestion);

var randomQuestion = Math.floor(Math.random() * 9);

var eightBall = ' ';

switch(randomQuestion){
    case 0:
        eightBall = 'Hmm... Let me think about that one';
        break;
    case 1:
        eightBall = 'Stupid is as stupid does';
        break;
    case 2:
        eightBall = 'Only during a full moon';
        break;
     case 3:
        eightBall = 'Are you practicing every day?';
        break;
    case 4:
        eightBall = 'A candle always burns brighter in the dark';
        break;
    case 5:
        eightBall = 'Ha Ha Ha - That\'s funny';
        break;
    case 6:
        eightBall = 'What did you Mom say?';
        break;
    case 7:
        eightBall = 'Stop thinking about it and just do it';
        break;
    case 8:
        eightBall = 'The answer to you question is Yes!  Definitely!';
        break;
}

alert('The eight Ball says: ' + eightBall);