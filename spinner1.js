process.stdout.write('hello from spinner1.js... \rheyyy\n');
let spinnerArray = ['|', '/', '-', '\\'];
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);

// ... fill in the rest yourself ...
let i = 0;
let round = 0;

const animateSpinner = () => {
  process.stdout.write(`\r${spinnerArray[i++]}`);
  i %= spinnerArray.length;
  round++;
  // limited the spinning rounds to make it end properly
  if (round < 20) {
    setTimeout(animateSpinner, 100);
  } else {
    process.stdout.write('\n');
  }
  
};

animateSpinner();