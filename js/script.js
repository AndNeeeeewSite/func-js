//             1.


function logItems(array){
    let elementArray
    for (elementArray of array){
        numberElement = array.indexOf(elementArray) + 1
        console.log('1. '+numberElement + ' - ' + elementArray)
    }
    console.log('')
}
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
//                    2.

 
const calculateEngravingPrice = function(message, pricePerWord=0) {
  var messageArray = message.split(' ');
  total = messageArray.length * pricePerWord
  return '2. ' + total
}
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
  //                 3.


  console.log('')
  const findLongestWord = function (string) {
    let biggestWordNumber = 0
    let biggestWord 
    var stringArray = string.split(' ');
    for(elementStringArray of stringArray){
      if(biggestWordNumber<elementStringArray.length){
        biggestWordNumber = elementStringArray.length
        biggestWord = elementStringArray
      }
    }
    return '3. '+ biggestWord
  }
    console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
    console.log(findLongestWord('Google do a roll')); // 'Google'
    console.log(findLongestWord('May the force be with you')); // 'force'   

//                     4. 
console.log('')
const formatString = function (string) {
  let  stringArrayFinal = ''
  var stringArray = string.split('');
  if (string.length >= 40){
    for(let i= 40; i < stringArray.length;){
      stringArray.pop()
    }
  } 
  for(let elementArray of stringArray){
    stringArrayFinal = stringArrayFinal + elementArray
  }
  if (string.length >= 40){
    stringArrayFinal = stringArrayFinal + '...'
  } 
  return '4. '+stringArrayFinal
  };
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  console.log(formatString('Curabitur ligula sapien.'));
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  ); 
  console.log('')
//                     5. 
const checkForSpam = function (message) {
    let isSpam
    if(  message.includes('spam') || message.includes('SPAM') || message.includes('sale') || message.includes('SALE')){
        isSpam = true
    }
    else{
        isSpam = false 
    }
    return '5. ' +isSpam
  }; 

  console.log(checkForSpam('Latest technology news')); // false

  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
  //                          6.

let k = 10
let numbers = []
console.log(' ')
while (k === 10) {
  input = prompt()
  if(input == null){
    let total = 0
    k = 0
    for(elementNumbers of numbers){
      total = total + Number.parseFloat(elementNumbers)
    }
    console.log('6. ' + total)
  }
  else{
    numbers.push(input)
  }
}