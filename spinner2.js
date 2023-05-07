process.stdout.write('hello from spinner1.js... \rheyyy\n');
let spinnerArray = ['|', '/', '-', '\\'];

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