const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  name: 'What\'s your name? Nicknames are also acceptable :)',
  hobby: 'What\'s an activity you like doing?',
  song: 'What do you listen to while doing that?',
  mealtime: 'Which meal is your favourite (eg: dinner, brunch, etc.)',
  meal: 'What\'s your favourite thing to eat for that meal?',
  sport: 'Which sport is your absolute favourite?',
  superpower: 'What is your superpower? In a few words, tell us what you are amazing at!'
};

let answers = {};

rl.question(questions.name + "\n", (answer) => {
  answers["name"] = answer;
  rl.question(questions.hobby + "\n", (answer) => {
    answers["hobby"] = answer;
    rl.question(questions.song + "\n", (answer) => {
      answers["song"] = answer;
      rl.question(questions.mealtime + "\n", (answer) => {
        answers["mealtime"] = answer;
        rl.question(questions.meal + "\n", (answer) => {
          answers["meal"] = answer;
          rl.question(questions.sport + "\n", (answer) => {
            answers["sport"] = answer;
            rl.question(questions.superpower + "\n", (answer) => {
              answers["superpower"] = answer;
              console.log(`${answers.name} loves listening to ${answers.song} while ${answers.hobby}, devouring ${answers.meal} for ${answers.mealtime}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
