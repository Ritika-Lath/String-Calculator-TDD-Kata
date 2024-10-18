export const addString=(numbers)=>{
    if(!numbers){
        return 0
    }
    const numArray = numbers.split(',').map(num => parseInt(num, 10));
  
  // Step 3: Handle multiple numbers
  return numArray.reduce((sum, num) => sum + (isNaN(num)?0:num),0)
}