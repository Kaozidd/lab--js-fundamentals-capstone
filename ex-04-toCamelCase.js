
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */

function toCamelCase(string) {
	let camel = string.toLowerCase();
	const arr = camel.split(' ');
	let tempWord = '';
	let tempFinArr = [];
	tempFinArr.push(arr[0]);
	let camelRes = "";
	for (let i=1; i<arr.length; i++) {
		tempWord = arr[i];
		let tempArr = tempWord.split('');
		tempArr[0] = tempArr[0].toUpperCase();
		tempWord = tempArr.join('')
		tempFinArr.push(tempWord);
	}
	camelRes = tempFinArr.join('');
	return camelRes;
}

//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.log("[1] Should return 'fetchRecords'");
console.assert(toCamelCase("fetch records") === 'fetchRecords')
console.log("====================================");
console.log();

console.log("[2] Should return 'createTableRow'");
console.assert(  toCamelCase("create table row") === 'createTableRow'  )
console.log("====================================");
console.log();

console.log("[3] Should return 'convertToHtml'");
console.assert(  toCamelCase("convert to HTML") === 'convertToHtml'  )
console.log("====================================");
console.log();

console.log("[4] Should return 'getUserAccountId'");
console.assert(  toCamelCase("get user account ID") === 'getUserAccountId'  )
console.log("====================================");
