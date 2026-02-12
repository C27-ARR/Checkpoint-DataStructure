let i = [2,6,1,3] 
let y = [4,5,2,1]
let x = 9

BEGIN 
let distinct = [
  ...i.filter(value => !y.includes(value)),
  ...y.filter(value => !i.includes(value))
] 
let sum = distinct.reduce ((total, value)=> totale + value, 0);

console.log(distinct); // [2,1]
console.log(sum); // 3
END

Variables 
tableau values (2,5,1,3,4,5,2,1)
x= sum distinct
BEGIN
let value (2,5,1) // distinct values
