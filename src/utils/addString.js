export function addString(numbers) {
   
    if (!numbers.trim()) {
        return 0;
    }

    const delimiterPattern = /[\n,;]+/;
    const separateNumbers = numbers.replace(/"/g, "").split(delimiterPattern);
    
    let sum = 0;
    const negatives = [];

    for (const num of separateNumbers) {
        const parsedNum = parseInt(num, 10);
        
        if (!isNaN(parsedNum)) {
            if (parsedNum < 0) {
                negatives.push(parsedNum);
            } else {
                sum += parsedNum;
            }
        }
    }

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return sum; 
}
