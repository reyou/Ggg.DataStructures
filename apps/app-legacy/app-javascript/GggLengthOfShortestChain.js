// Word Ladder (Length of shortest chain to reach a target word)
// https://www.youtube.com/watch?v=6pIC20wCm20
// http://www.geeksforgeeks.org/word-ladder-length-of-shortest-chain-to-reach-a-target-word/
// BFS

let isadjacent = function (a, b) {
    var count = 0;
    var n = a.length;

    // iterate through all characters and return false
    // if there are more than one mismatching characters
    for (var i = 0; i < n; i++) {
        if (a[i] != b[i]) {
            count += 1;
        }
        if (count > 1) {
            break;
        }
    }
    return count == 1;
}


let shortestChainLen = function (start, target, D) {
    console.log("let shortestChainLen = function (start, target, D) {");
    console.log("let shortestChainLen = function (" + start + ", " + target + ", " + D + ") {");
    console.log("\n");
    // create a queue for BFS and insert
    // 'start' as source vertex
    var Q = [];
    var item = {
        word: start,
        len: 1
    };
    console.log("Q.push(item);");
    console.log("Q.push(" + JSON.stringify(item) + ");");
    console.log("\n");
    Q.push(item);
    console.log("while (Q.length > 0) {");
    console.log("while (" + Q.length + " > 0) {");
    console.log("\n");
    while (Q.length > 0) {
        console.log("var curr = Q.pop();");
        console.log("var " + curr + " = Q.pop();");
        console.log("\n");
        var curr = Q.pop();
        console.log("var curr = Q.pop();");
        console.log("var " + JSON.stringify(curr) + " = Q.pop();");
        console.log("\n");
        // go through all words of dictionary
        console.log("for (var i = 0; i < D.length; i++) {")
        console.log("for (var " + i + " = 0; i < " + D.length + "; i++) {")
        console.log("\n");
        for (var i = 0; i < D.length; i++) {
            // process a dictionary word if it is
            // adjacent to current word (or vertex) of BFS
            var it = D[i];
            console.log("var it = D[i];");
            console.log("var " + it + " = " + D[i] + ";");
            console.log("\n");
            var temp = it;
            console.log("var temp = it;");
            console.log("var " + temp + " = " + it + ";");
            console.log("\n");
            console.log("if (isadjacent(curr.word, temp)) {");
            console.log("if (isadjacent(" + curr.word + ", " + temp + ")) {");
            console.log("\n");
            console.log("isadjacent(curr.word, temp)");
            console.log("isadjacent(" + curr.word + ", " + temp + ")");
            console.log(isadjacent(curr.word, temp));
            console.log("\n");
            if (isadjacent(curr.word, temp)) {
                // add the dictionary word to Q
                console.log("item.word = temp;");
                console.log("" + item.word + " = " + temp + ";");
                console.log("\n");
                item.word = temp;
                console.log("item.len = curr.len + 1;");
                console.log("" + item.len + " = " + curr.len + " + 1;");
                console.log("\n");
                item.len = curr.len + 1;
                console.log("Q.push(item);");
                console.log("Q.push(" + JSON.stringify(item) + ");");
                console.log("\n");
                Q.push(item);

                // remove from dictionary so that this
                // word is not processed again. this is
                // like marking visited
                console.log("D.splice(i, 1);");
                console.log("D.splice(" + i + ", 1);");
                console.log("\n");
                D.splice(i, 1);

                // if we reached target
                console.log("if (temp == target) {");
                console.log("if (" + temp + " == " + target + ") {");
                console.log("\n");
                if (temp == target) {
                    console.log("return item.len;");
                    console.log("return " + item.len + ";");
                    console.log("\n");
                    return item.len;
                }
            }
        }
    }

    return -1;
}

var example1 = function () {
    var D = new Array();
    D.push("poon");
    D.push("plee");
    D.push("same");
    D.push("poie");
    D.push("plie");
    D.push("poin");
    D.push("plea");
    let start = "toon";
    let target = "plea";
    console.log("Length of shortest chain is:", shortestChainLen(start, target, D));
}
example1();

var example2 = function () { 
     let start = "hit";
    let target = "plea";
}