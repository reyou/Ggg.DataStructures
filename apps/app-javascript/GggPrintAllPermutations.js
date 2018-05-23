// https://www.youtube.com/watch?v=AfxHGNRtFac
// http://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
// backtracking

function print(obj) {
    var result = JSON.stringify(obj, null, 4);
    console.log(result);
}
// ============================================================================
var resultArr = new Array();
let permute = function (str, left, right, depth) {
    console.log("let permute = function (str, left, right, depth) {");
    console.log("let permute = function (" + str + ", " + left + ", " + right + ", " + depth + ") {");
    console.log("\n");
    console.log("if (left == right) {");
    console.log("if (" + left + " == " + right + ") {");
    console.log("\n");
    if (left == right) {
        resultArr.push(str);
        console.log("str", str, "\n");
        console.log();
    }
    else {
        console.log("for (var index = left; index <= right; index++) {");
        console.log("for (var " + index + " = " + left + "; " + index + " <= " + right + "; " + index + "++) {");
        console.log("\n");
        for (var index = left; index <= right; index++) {
            console.log("str = swap(str, left, index);");
            console.log("" + str + " = swap(" + str + ", " + left + ", " + index + ");");
            console.log("\n");
            str = swap(str, left, index);
            console.log("After: str = swap(str, left, index);");
            console.log("" + str + " = swap(" + str + ", " + left + ", " + index + ");");
            console.log("\n");
            console.log("permute(str, left + 1, right, depth++);");
            console.log("permute(" + str + ", " + left + " + 1, " + right + ", " + depth + ");");
            console.log("\n");
            permute(str, left + 1, right, depth++);
            console.log("2- str = swap(str, left, index);");
            console.log("" + str + " = swap(" + str + ", " + left + ", " + index + ");");            
            str = swap(str, left, index);
            console.log("2- After: str = swap(str, left, index);");
            console.log("" + str + " = swap(" + str + ", " + left + ", " + index + ");");
            console.log("\n");
        }
    }

}

function swap(a, i, j) {
    var temp;
    var charArray = a.split('');
    temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join("");
}

var str = "AB";
var n = str.length;
permute(str, 0, n - 1, 0);
console.log("\n");
for (var i = 0; i < resultArr.length; i++) {
    console.log(resultArr[i]);
};


