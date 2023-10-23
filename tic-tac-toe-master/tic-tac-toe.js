document.addEventListener('DOMContentLoaded', function() {
    const gridSquares = document.querySelectorAll('#board div')

    gridSquares.forEach(square => {
        square.classList.add('square')
    })

    
});