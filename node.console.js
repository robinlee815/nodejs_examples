console.time('alpha');

var output = 1;
for (var i=1; i<=10; i++) {
    output *= i;
}
console.log('Result', output);

console.timeEnd('alpha');

console.log('\u001b[31m]', 'Hello World..!');
console.log('\u001b[0m');