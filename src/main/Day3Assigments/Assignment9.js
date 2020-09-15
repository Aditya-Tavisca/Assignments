// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function palindromeLogic(string1){
       string1=string1.split(' ').join('')
       for(let i=0,j=string1.length-1;i<parseInt(string1.length-1/2);i++,j--)
       {
           if(string1.charAt(i)!=string1.charAt(j))
             return false;
       }
       return true;
   
}


function palindrome(String1){
       string1=string1.split(' ').join('')
        if(String1.match(String1.split("").reverse().join("")))
         return true;
        else
         return false; 
}

var input="nurses run"

  if(palindromeLogic(input))
   {
          console.log(`${input} it is a pallindrome`)
   }
   else
   {
       console.log(`${input} it is not a pallindrome`)
   }


   // optimization required

   // handel spaces