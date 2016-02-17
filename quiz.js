var button = document.getElementById('button');
var height = document.getElementById('height');
var type = document.getElementById('type');
var char = '%';
var makeTree = {
  height: '',
  character: ''
}
// console.log(tree.height, tree.character)

function tree () {
  if (height.value === '' || isNaN(height.value)) {
   return alert('Put a number for the height, dummy');
  }
  if (type.value === '' || type.value.length > 1) {
    return alert('Go home and think about what you did.');
  } 
  makeTree.height = parseInt(height.value);
  makeTree.character = type.value;
  var char = makeTree.character;
  var space = [' '];
  
  for (var i = 0; i < makeTree.height; i++) {
    var treeString = char.repeat(2);
    console.log(treeString.repeat(i+1))
  };
};


button.addEventListener('click', tree);