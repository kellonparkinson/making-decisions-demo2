// Give Jon Snow a backpack and add three items
let backpack = [];

backpack.push('sword', 'shield', 'food');

// Remove sword from backpack and add it to his belt
let extItems = []

extItems.push(backpack.shift());

console.log(`Backpack: ${backpack}`);
console.log(`External items: ${extItems}`)

// Jon adds a fur coat to backpack
let furCoat = 'fur coat';

backpack.push(furCoat);

console.log(`Backpack: ${backpack}`);

// Jon decides to put on his fur coat
extItems = backpack.pop();

console.log(`Backpack: ${backpack}`);

// Track number of items in the backpack
let itemCount = backpack.length;

console.log(`Backpack contains ${itemCount} items.`);

// Need more in backpack for survival. Add more items
backpack.push('flint', 'blanket', 'knife', 'toothbrush');
itemCount = backpack.length;

console.log(`Backpack contains ${itemCount} items (${backpack})`);

// Jon puts items from his backpack to his saddlebags
let saddlebags = backpack.splice(2, 4);

console.log(`Saddlebags: ${saddlebags}`);

console.log(saddlebags);

// View each item in saddlebags one-by-one
for (let i = 0; i < saddlebags.length; i++) {
    console.log(`Saddlebags contain ${saddlebags[i]}.`);
};

// View each item in backpack one-by-one

for (let i = 0; i < backpack.length; i++) {
    console.log(`Backpack contains ${backpack[i]}`);
};

// Challenge
let guessMe = 54;
let timeRan = 0;

while (guessMe < 100) {
    timeRan++
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log('Guess Me is divisible by 4 or 5. Added 25.');
        guessMe += 25;
    } else if (guessMe % 3 === 0) {
        console.log('Guess Me is divisible by 3. Subtracted 27.');
        guessMe -= 27;
    } else {
        console.log('Added 3.')
        guessMe += 3;
    };
    guessMe += 22;
    console.log(`Added 22. Guess Me is now ${guessMe}.`);
};

console.log(`Loop ran ${timeRan} times.`);