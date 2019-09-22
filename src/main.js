const array = [1,5,2,4,7,2,90,100,23];

// const sortedArr = array.sort()
const sortedArr = [...array].sort((a,b) => {
  if(a > b) return 1;
  if(a < b) return -1;
})

console.log(sortedArr);
console.log(array);
