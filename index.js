function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var trees = ['the giant redwood','the larch', 'the fir', 'the mighty scots pine']
  trees.forEach(callback)
  return trees
}

function doToArray(array, callback) {
  array.forEach(callback)
}