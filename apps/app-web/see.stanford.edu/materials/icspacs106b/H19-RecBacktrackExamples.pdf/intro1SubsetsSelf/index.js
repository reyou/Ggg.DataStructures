/*
abc
    {}
    a
        ab
            abc
        ac
    b
        bc
    c
*/

function subsetprint(text) {
    let builder = "";
    subset(builder, text)
}
function subset(builder, rem) {
    console.log("subset: " + builder);
    if (rem.length == 0) {
        return;
    }
    for (let i = 0; i < rem.length; i++) {
        subset(builder + rem[i], rem.substring(i + 1));
    }
}
subsetprint("betul")

