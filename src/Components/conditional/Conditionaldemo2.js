import React from 'react'

export default function Conditionaldemo2() {
 let dayNumber= +prompt('Enter day number')
 let dayName=''

 switch(dayNumber){
    case 1: dayName='Monday';break;
    case 2: dayName='Tuesday';break;
    case 3: dayName='Wednesday';break;
    case 4: dayName='Thursday';break;
    case 5: dayName='Friday';break;
    case 6: dayName='Saturday';break;
    case 7: dayName='Sunday';break;
    default:return<h2>Not a valid day</h2>
 }
 return dayName;
}
