/* Bucles */

/* While */
let score = 10;

while(score < 18) {
    console.log(`Score: ${score}`);
    console.log(`Your scores is less than 18`);
    score += 1;
}
console.log(`Your scores is now great`);

/* do while */
let score2 = 16;

do {
    score2 += 1;
    console.log(`Score: ${score2}`);
} while(score2 < 18);
console.log(`Your scores is now great`);

/* For */
let numbers = [6, 18, 22, 13, 11, 89]

for(let i = 0; i < numbers.length ; i++) 
{
    console.log(`numbers[${i}]: ${numbers[i]}`)
}

let names = ['Andrea', 'Pedro', 'Juan', 'Sax'];

for (let name of names)
{
    console.log(name);
}
for (let index in names)
{
    console.log(index)
}

/* break
   continue 
Funcionan igual que en python */