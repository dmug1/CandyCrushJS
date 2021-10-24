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
squares.forEach(square => square.addEventListener('dragover',dragOver))
squares.forEach(square => square.addEventListener('dragenter',dragEnter))
squares.forEach(square => square.addEventListener('dragleave',dragLeave))

function dragStart(){
    colorBeingDragged = this.style.backgroundColor
    squareIdBeingDragged = parseInt(this.id)
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
}

function dragLeave() {
    this.style.backgroundColor = ''
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

function dragDrop(){    
    console.log(this.id, 'dragDrop')
    console.log(colorBeingDragged)
    colorBeingReplaced = this.style.backgroundColor
    squareIdBeingReplaced = parseInt(this.id)
    this.style .backgroundColor = colorBeingDragged
    squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
}










})