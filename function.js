function iseligible(age, hasPassport, country){
    return age>=18 && hasPassport && country==="india";
}
 function isPrime(number){
    if(number === 1)
      return false;
    for(let i=2; i<= number/2 ; i++)
    {
        if(number%i === 0)
          return false; 
    }
    return true;       
 }

 function primeSeries(limit){
    for( let i=0;i<limit;i++)
    {
        if(isPrime(i))
        {
            console.log(i);
        }
    }
 }

 function extractdigit(number){
    return number%10;
 }

 function power(w,n){
    return Math.pow(w,n);
 }

 /**
  * will return true if a number is armstrong else return false
  * @param {number}
  * @returns {boolean}
  */

 function isarmstrong(number){
    let temp=number;
    let n=nodigits(number)
    let sum=0;
    while(number!=0)
    {
        let w=extractdigit(number);
        let e=power(w,n);
        sum=sum+e;
        number=trimdigit(number);
    }
    if(sum===temp)
    {
      return true;
    }
    else{
      return false;
    }
 }
 
 function nodigits(number){
   let count=0;
   while(number!=0)
   {
      number=parseInt(number/10);
      count++;
   }
   return count;
 }

 function trimdigit(number){
   return parseInt(number/10);
 }

function armstrongseries(limit)
{
   for(let i=10;i<=limit;i++)
   {
      if(isarmstrong(i))
      {
         console.log(i);
      }
   }
}

function palindrome(number)
{
   let a=[];
   let s=nodigits(number);
   for(let i=0;i<s;i++)
   {
      let w=extractdigit(number);
      a.push(w);
      number=trimdigit(number);
   }
   a=JSON.stringify(a);
   console.log(a);


}



// const trimlastdigit = (number) => parseInt(number/10) 
// const extractlastdigit = (number) => number%10 
// const nodigit = (number) => { 
//    let count=0;
//    while(number!=0)
//    {
//       number=trimlastdigit(number);
//       count++;
//    }
//    return count
//  }
// function isarmstrong(number){
//    let temp=number;
//    let digit=nodigit(number);
//    let sum=0;
//    for(let i=0;i<digit;i++)
//    {
//       sum=sum + Math.pow(extractlastdigit(number),digit);
//       number=trimlastdigit(number);
//    }
//    if(sum===temp){
//       return true;
//    }
//    else{
//       return false;
//    }
// }
