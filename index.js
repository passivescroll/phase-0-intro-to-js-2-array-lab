const cats = ['Milo', 'Otis', 'Garfield']; 

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}


function destructivelyRemoveLastCat() {
    cats.pop();
    
}
function destructivelyRemoveFirstCat() {
     cats.shift();
} 

function appendCat(name) {
    const catsArray = [...cats]
    catsArray.push(name)
    return catsArray
}


function prependCat(name) {
    const catsArray = [...cats]
    catsArray.unshift(name)
    return catsArray
}

function removeLastCat() {
    const catsArray = [...cats]
    catsArray.pop()
    return catsArray
}

function removeFirstCat() {
    const catsArray = [...cats]
    catsArray.shift()
    return catsArray
}
        

 
