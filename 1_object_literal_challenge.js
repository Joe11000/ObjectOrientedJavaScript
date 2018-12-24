// combining the template literal, the object literal, and object destructuring
function addressMaker(address) {
  const {city, state} = address

  const newAddress = {
    city,
    state,
    country: 'United States'
  }
  for(let i in newAddress){
    console.log(i, newAddress[i])
  }
}

addressMaker({city: 'Austin', state: 'Texas'})



// for..of lets you iterate through any iterable
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
for(let letter of alphabet){
  console.log(letter)
}



const exampleSet = new Set([1,2,3,1,2,3,4,4,3,2,1,3,2,4,1,3,2,1])
console.log(exampleSet)
exampleSet.add(5).add(6)
