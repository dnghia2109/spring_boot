function calculateFactorial(num) {
	if (num = 1) {
        return 1;
    }
    return num * calculateFactorial(num - 1);
}
console.log(calculateFactorial(3));

// Câu 2:
function reverseStringname(text) {
    let reverseString = "" ;
    for (let i = text.length - 1; i >= 0; i--) {
        reverseString += text[i];
    }
    return reverseString;
}
console.log(reverseStringname("hello"));