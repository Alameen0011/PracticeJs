
/*

Problem: Return true if two strings have the same letters, rearranged.

Input:
"listen", "silent"

Output:
true

*/
    /*
    IN anargam length of both string should be same, 
    * it should conatin exact same length
    * the frequency of each letter should be same,
    Two strings are anagrams if:
                They contain exactly the same letters In any order
                With same frequency of each letter
    
    */


const checkAnargams = (str1,str2) => {
         if(str1.length !== str2.length) return false ;

        const sorted1 = str1.split('').sort().join('')
        const sorted2 = str2.split('').sort().join('')
        //sorted1 - eilnst
        //sorted2 - ehllow


        return sorted1 === sorted2

}
const str1 = "listen";
const str2 = "hellow" ;


console.log(checkAnargams(str1,str2))