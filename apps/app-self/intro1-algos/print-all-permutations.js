let counter = 1;
function permutations(input, builder = '', remaining = '') {
  if (remaining === '') {
    remaining = input;
  }
  // if we completed one permutation then print it
  // we are at the bottom of the tree
  if (builder.length === input.length) {
    console.log(`${counter++}: ${builder}`);
    return;
  }

  // start building
  for (let i = 0; i < remaining.length; i++) {
    let builder2 = builder + remaining[i];
    let remaining2 = remaining.slice(0, i).concat(remaining.slice(i + 1));
    permutations(input, builder2, remaining2);
  }
}

permutations('abcd');
