let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];


function matches(strings, regex) {
  let final = [];
  for(let i = 0; i < strings.length; i++ ) {
    if(strings[i].match(regex)) {
      final.push(strings[i]);
    }
  }
  return final;
}
console.log(matches(words, /lab/));
