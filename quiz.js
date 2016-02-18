var button = document.getElementById('button');
var height = document.getElementById('height');
var type = document.getElementById('type');
var makeTree = {
  height: '',
  character: ''
}

function tree () {
  //logic gate, user must enter in a number for the height, and a valid character for the "type"//
  if (height.value === '' || isNaN(height.value)) {
   return alert('Please put a number in for the height');
  }
  if (type.value === '' || type.value.length > 1 || type.value === ' ') {
    return alert('Please insert a single, valid keyboard character');
  } 

  makeTree.height = parseInt(height.value); //grabs the heigh input of the tree as an integer
  makeTree.character = type.value; //grabs the type of character put into the text box ie (* & # !)
  var char = makeTree.character; // saves the character as a malleable variable
  var space = ' '; //spacing before the character(s) for the tree
  var treeString = char.repeat(2); // 
  // for loop tells code to repeat the char and add 2 chars for each line of the tree, and subtracts spaces for each line of the tree
  for (var i = 1; i < makeTree.height +1; i++) {
    char += treeString;
    var printString = char.slice(0, char.length -2);
    console.log(space.repeat(makeTree.height - i) + printString);

  };
  console.log('♩♩♩ O\' Christmas Tree, O\' Christmas Tree...  ♩♩♩')
};


button.addEventListener('click', tree);