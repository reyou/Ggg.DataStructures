// Find the missing number | GeeksforGeeks
// https://www.youtube.com/watch?v=lBk6fVhuCyw
// http://www.geeksforgeeks.org/find-the-missing-number/
function getMissingNo(a, n) {
    console.log("var i = 0;");
    console.log("var " + i + " = 0;");
    console.log("\n");
    var i = 0;
    console.log("var total = (n + 1) * (n + 2) / 2;");
    console.log("var " + total + " = (" + n + " + 1) * (" + n + " + 2) / 2;");
    console.log("\n");
    var total = (n + 1) * (n + 2) / 2;
    console.log(" for (i = 0; i < n; i++) {");
    console.log(" for (" + i + " = 0; " + i + " < " + n + "; " + i + "++) {");
    console.log("\n");
    for (i = 0; i < n; i++) {
        console.log("a: ", a);
        console.log("/n");
        console.log("total -= a[i];");
        console.log("" + total + " -= a[" + i + "];");
        console.log("\n");
        total -= a[i];
        console.log("total -= a[i];");
        console.log("" + total + " -= a[" + i + "];");
        console.log("\n");
    }
    console.log("return total;");
    console.log("return " + total + ";");
    console.log("\n");
    return total;
}

var a = [1, 2, 4, 5, 6]
var miss = getMissingNo(a, a.length);
console.log(miss);