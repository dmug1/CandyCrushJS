document.addEventListener('DOMContentLoaded', () =>{
    const grid = document.querySelector('.grid')
    const width = 8
    const squares = []

const candyColors = [
    'red','yellow','orange','green','purple','blue'
]
    //creating the board
function createBoard(){
    for (let i=0; i < width*width; i++){
        const square = document.createElement('div')
        
        square.setAttribute('draggable', true)
        square.setAttribute('id', i)

        let randomColor = Math.floor(Math.random()* candyColors.length)
        square.style.backgroundColor = candyColors[randomColor]
        grid.appendChild(square)
        squares.push(square)
    }
}

createBoard()


//drag the candies
let colorBeingDragged
let colorBeingReplaced
let squareIdBeingDragged
let squareIdBeingReplaced


squares.forEach(square => square.addEventListener('dragdrop', dragDrop))
squares.forEach(square => square.addEventListener('dragstart',dragStart))
squares.forEach(square => square.addEventListener('dragend',dragEnd))
//'dragover',dragOver))

squares.forEach(
    square => square.addEventListener("dragover", function( event ) {
    event.preventDefault();
    }
, false))

squares.forEach(
    square => square.addEventListener("dragenter", function( event ) {
    event.preventDefault();
    }
, false))

//squares.forEach(square => square.addEventListener('dragenter',dragEnter))
squares.forEach(square => square.addEventListener('dragleave',dragLeave))

function dragStart(){
    colorBeingDragged = this.style.backgroundColor
    squareIdBeingDragged = parseInt(this.id)
}

function dragOver(e) {
    e.preventDefault()
    console.log("DragOver")
}

function dragEnter(e) {
    e.preventDefault()
    console.log("DragEnter")
}

function dragLeave() {
    //this.style.backgroundColor = ''
}

function dragDrop() {
    colorBeingReplaced = this.style.backgroundColor
    squareIdBeingReplaced = parseInt(this.id)
    this.style.backgroundColor = colorBeingDragged
    squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
}

function dragEnd(e){
    console.log(this.id, 'dragEnd')

    let validMoves = [squareIdBeingDragged -1 ,
         squareIdBeingDragged -width,
         squareIdBeingDragged +1,
         squareIdBeingDragged +width
    ]

    let validMove = validMoves.includes(squareIdBeingReplaced)
    
}











})