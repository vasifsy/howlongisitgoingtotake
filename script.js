// No JS needed for infinite progress bar, but this file is here for future extensibility. 

const messages = [
  "Brewing a fresh cup of coffee...",
  "Convincing the cat to move off the keyboard...",
  "Untangling headphone wires...",
  "Finding the end of the tape...",
  "Waiting for paint to dry...",
  "Counting the number of stars in the sky...",
  "Reheating yesterday's pizza...",
  "Watering the office plant...",
  "Looking for lost socks...",
  "Staring out the window thoughtfully...",
  "Googling how to be more productive...",
  "Trying to remember what I was doing...",
  "Reading just one more article...",
  "Pretending to look busy...",
  "Making a to-do list for my to-do list...",
  "Checking the fridge for the fifth time...",
  "Waiting for the kettle to boil...",
  "Scrolling endlessly...",
  "Daydreaming about vacation...",
  "Asking the magic 8-ball...",
  "Counting how many times I've blinked...",
  "Waiting for the microwave to beep...",
  "Rearranging my desktop icons...",
  "Trying to find the end of a rainbow...",
  "Wondering if penguins have knees...",
  "Practicing my signature...",
  "Trying to whistle with crackers in my mouth...",
  "Staring at the ceiling...",
  "Trying to fold a fitted sheet...",
  "Counting sheep...",
  "Waiting for the next season of my favorite show...",
  "Trying to lick my elbow...",
  "Balancing a pencil on my nose...",
  "Wondering what happened to my other sock...",
  "Trying to pat my head and rub my belly...",
  "Making shadow puppets...",
  "Trying to sneeze with my eyes open...",
  "Wondering if fish get thirsty...",
  "Trying to touch my toes...",
  "Practicing my Oscar speech...",
  "Trying to remember all the state capitals...",
  "Counting the tiles on the floor...",
  "Trying to find Waldo...",
  "Making a paper airplane...",
  "Trying to beat my high score in Minesweeper...",
  "Wondering if clouds ever get tired...",
  "Trying to draw a perfect circle...",
  "Wondering if dogs dream in color...",
  "Trying to balance on one foot...",
  "Practicing my best evil laugh...",
  "Trying to snap with both hands...",
  "Wondering if I can yawn with my mouth closed...",
  "Trying to wiggle my ears...",
  "Counting the number of books I own...",
  "Trying to remember the lyrics to that song...",
  "Wondering if I left the stove on...",
  "Trying to make my plants grow faster by staring...",
  "Trying to find the end of the internet...",
  "Wondering if I can tickle myself...",
  "Trying to see my own nose without a mirror...",
  "Practicing my best dance moves...",
  "Trying to make a house of cards...",
  "Wondering if I can hear silence...",
  "Trying to make a spoon stick to my nose...",
  "Counting the number of times I've said 'um' today...",
  "Trying to remember where I put my keys...",
  "Wondering if I can make water wetter...",
  "Trying to fold a paper crane...",
  "Practicing my best superhero pose...",
  "Trying to make a coin disappear...",
  "Wondering if I can jump higher than my house...",
  "Trying to make a perfect pancake flip...",
  "Practicing my best pirate accent...",
  "Trying to balance a book on my head...",
  "Wondering if I can taste the rainbow...",
  "Trying to make a snowflake out of paper...",
  "Practicing my best animal impression...",
  "Trying to make a tower of cookies...",
  "Wondering if I can make my shadow dance...",
  "Trying to make a paper boat float...",
  "Practicing my best robot voice...",
  "Trying to make a pencil spin on my finger...",
  "Wondering if I can make a wish on a shooting star...",
  "Trying to make a perfect paper heart...",
  "Practicing my best monster roar...",
  "Trying to make a paper fortune teller...",
  "Wondering if I can make my reflection wink...",
  "Trying to make a paper frog jump...",
  "Practicing my best ghost impression...",
  "Trying to make a paper hat...",
  "Wondering if I can make my dreams come true...",
  "Trying to make a paper airplane fly backwards...",
  "Practicing my best wizard spell...",
  "Trying to make a paper star...",
  "Wondering if I can make my own luck...",
  "Trying to make a paper chain...",
  "Practicing my best superhero landing...",
  "Trying to make a paper snowman...",
  "Wondering if I can make my own path...",
  "Trying to make a paper butterfly...",
  "Practicing my best ninja move...",
  "Trying to make a paper rocket...",
  "Wondering if I can make my own story...",
  "Trying to make a paper flower...",
  "Practicing my best magician trick...",
  "Trying to make a paper crown...",
  "Wondering if I can make my own adventure...",
  "Waiting for the toast to pop...",
  "Trying to catch a falling leaf...",
  "Counting the bubbles in my drink...",
  "Trying to find the perfect playlist...",
  "Wondering if I can teach my dog to code...",
  "Trying to balance a spoon on my nose...",
  "Practicing my best superhero voice...",
  "Trying to make a card pyramid...",
  "Wondering if I can make my own holiday...",
  "Trying to make a paper lantern...",
  "Practicing my best opera note...",
  "Trying to make a paper plane do a loop...",
  "Wondering if I can make my own language...",
  "Trying to make a paper spinner...",
  "Practicing my best slow clap...",
  "Trying to make a paper windmill...",
  "Wondering if I can make my own board game...",
  "Trying to make a paper mask...",
  "Practicing my best fake sneeze...",
  "Trying to make a paper fish...",
  "Wondering if I can make my own handshake...",
  "Trying to make a paper pizza...",
  "Practicing my best tongue twister...",
  "Trying to make a paper pizza slice...",
  "Wondering if I can make my own emoji...",
  "Trying to make a paper cupcake...",
  "Practicing my best air guitar...",
  "Trying to make a paper sandwich...",
  "Wondering if I can make my own dance move...",
  "Trying to make a paper taco...",
  "Practicing my best drum solo...",
  "Trying to make a paper burger...",
  "Wondering if I can make my own ice cream flavor...",
  "Trying to make a paper hotdog...",
  "Practicing my best kazoo solo...",
  "Trying to make a paper donut...",
  "Wondering if I can make my own superhero...",
  "Trying to make a paper cookie...",
  "Practicing my best robot dance...",
  "Trying to make a paper pie...",
  "Wondering if I can make my own pizza topping...",
  "Trying to make a paper cake...",
  "Practicing my best yodel...",
  "Trying to make a paper ice cream cone...",
  "Wondering if I can make my own sandwich...",
  "Trying to make a paper milkshake...",
  "Practicing my best bird call...",
  "Trying to make a paper pancake...",
  "Wondering if I can make my own breakfast...",
  "Trying to make a paper waffle...",
  "Practicing my best lion roar...",
  "Trying to make a paper croissant...",
  "Wondering if I can make my own pastry...",
  "Trying to make a paper bagel...",
  "Practicing my best elephant trumpet...",
  "Trying to make a paper muffin...",
  "Wondering if I can make my own muffin flavor..."
];

const setbackMessages = [
  "Oops, spilled coffee on the keyboard...",
  "Accidentally closed the wrong tab...",
  "Cat walked across the keyboard...",
  "Forgot what I was doing for a second...",
  "Dropped my pen and had to find it...",
  "Got distracted by a butterfly...",
  "Had to answer a spam call...",
  "Realized I was on mute the whole time...",
  "Sent a message to the wrong group chat...",
  "Accidentally hit 'undo' too many times...",
  "Tried to fix it, made it worse...",
  "Lost my train of thought...",
  "Had to restart for an update...",
  "Stepped away for a snack break...",
  "Forgot to save, starting over...",
  "Paused to laugh at a meme...",
  "Accidentally hit snooze...",
  "Got caught in a daydream...",
  "Had to double-check the instructions...",
  "Realized I was using the wrong tool..."
];

const progressBar = document.querySelector('.progress');
const messageDiv = document.getElementById('progress-message');

let progress = 0;
const maxProgress = 95; // Never reach 100%
const minStep = 1;
const maxStep = 4;
const minBackStep = 3;
const maxBackStep = 10;
const interval = 2000; // ms
const setbackChance = 0.13; // 13% chance to move backward

function showRandomMessage(isSetback) {
  if (isSetback) {
    const msg = setbackMessages[Math.floor(Math.random() * setbackMessages.length)];
    messageDiv.textContent = msg;
  } else {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    messageDiv.textContent = msg;
  }
}

function inchProgress() {
  // Randomly decide if this is a setback
  if (progress > 10 && Math.random() < setbackChance) {
    // Move backward
    const step = Math.floor(Math.random() * (maxBackStep - minBackStep + 1)) + minBackStep;
    progress -= step;
    if (progress < 5) progress = 5;
    progressBar.style.width = progress + '%';
    showRandomMessage(true);
  } else {
    // Move forward
    if (progress < maxProgress) {
      progress += Math.floor(Math.random() * (maxStep - minStep + 1)) + minStep;
      if (progress > maxProgress) progress = maxProgress;
      progressBar.style.width = progress + '%';
    }
    showRandomMessage(false);
  }
}

// Initial state
progressBar.style.width = '5%';
inchProgress();
setInterval(inchProgress, interval); 