export const addString = (numbers) => {
    if (!numbers.trim()) return 0;

    let delimiter= /[^0-9-]+/;

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2);
        delimiter = new RegExp(`[${parts[0].substring(2)}]`);
        numbers = parts[1];
    }

    numbers = numbers.replace(/['"\s]/g, '');

    const numArray = numbers
        .split(delimiter)
        .map(num => parseInt(num, 10))
        .filter(num => !isNaN(num));

    return numArray.reduce((sum, num) => sum + num, 0);
};
