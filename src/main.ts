import './style.css'
//console.log("hhh")

//console.log(typeof 12) 'number'
// let year = 2010
// if (year==2015) {
//   console.log('yes')
// } else {
//   console.log('no')
// }

function factorial(num: number) : number{
  if (num==0) return 1
  else return num * factorial(num - 1)
}

console.log('factorial 5 is:')
console.log(factorial(5))