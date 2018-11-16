const startDate = Date.now();
const iterations = 100000000;
let result = 0;
for (let i = 0; i < iterations; i++) {
  result = 123456 * 32;
}
console.log(`Time elapsed for * operation : ${Date.now() - startDate} ms`);

const startDateLeftShift = Date.now();
let resultLeftShift = 0;
for (let i = 0; i < iterations; i++) {
  result = 123456 << 5;
}
console.log(`Time elapsed for >> operation : ${Date.now() - startDateLeftShift} ms`);
