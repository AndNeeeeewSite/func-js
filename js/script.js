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


const calculateEngravingPrice = function (message, pricePerWord=0) {
    let leterCounter = 0
    let LastLetter = 0
    let wordCounter = 0
    let total = 0
    for (let messageArray of message) {
       isLetter =  messageArray.toLowerCase() !== messageArray.toUpperCase();
       if(LastLetter >= 1 && isLetter == true){
        LastLetter++
       }
       else{
        LastLetter = 0
       }
       if(LastLetter == 0 && isLetter == true){
        LastLetter++ 
        wordCounter++
       }
    }
    total = wordCounter * pricePerWord
    return '2. '+ total
  };
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
    let leterCounter = 0
    let LastLetter = 0
    let wordCounter = 0
    biggestWord = 0
    nowWord = ''
    biggestWordNotNum = ''
    for (let messageArray of string) {
       isLetter =  messageArray.toLowerCase() !== messageArray.toUpperCase();
       if(LastLetter >= 0 && isLetter == true){
        LastLetter++
        nowWord = nowWord+ messageArray
        if(biggestWord<LastLetter){
            biggestWord = LastLetter
            biggestWordNotNum = nowWord
        }
       }
       else{
        LastLetter = 0
        nowWord = ''
       }
       if(LastLetter == 0 && isLetter == true){
        LastLetter++ 
        wordCounter++
        nowWord = nowWord+ messageArray
        
       }

    }
    return '3. ' + biggestWordNotNum
  }
    console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
    console.log(findLongestWord('Google do a roll')); // 'Google'
    console.log(findLongestWord('May the force be with you')); // 'force'   

//                     4.
console.log('')
const formatString = function (string) {
    let stringFinal = ''
    let stringArrays = []
    for(let stringArray of string){
        stringArrays.push(stringArray)       
    }
    if(stringArrays.length >40){
        while(stringArrays.length >40){
            stringArrays.pop()
        }
        for(let stringArray of stringArrays){
            stringFinal = stringFinal + stringArray
        }
        stringFinal = stringFinal + '...'
    }
    else{
        for(let stringArray of stringArrays){
            stringFinal = stringFinal + stringArray
        }
    }

    return '4. ' +stringFinal

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
    if(  message.includes('spam') == true || message.includes('SPAM') == true || message.includes('sale') == true || message.includes('SALE') == true){
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
    const numbers = [];
    let total = 0;
    k = 10
    let input = prompt();
    numbers.push(input)
    if(input == null){
        for (let numbersArray of numbers){
            total = total + Number.parseFloat(numbersArray) 
        }
    }
    else{    
        let input = prompt()
        numbers.push(input)
        while(k == 10){
            if(input == null){
                k = 0
                for (let numbersArray of numbers){
                    
                    total = total + Number.parseFloat(numbersArray) 
                }
            }
            else{
                
                let input = prompt()
                numbers.push(input)
                if(input == null){
                    k = 0
                    numbers.pop()
                    for (let numbersArray of numbers){
                        total = total + Number.parseFloat(numbersArray) 
                    }
                }
            }
        }   
    }
    if(total == NaN){
        total = 0
    }
    console.log(total)