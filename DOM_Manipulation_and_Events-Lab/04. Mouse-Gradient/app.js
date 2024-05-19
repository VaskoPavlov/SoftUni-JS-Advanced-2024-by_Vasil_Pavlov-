/**
 * Task: Write a program that detects and displays how far along a gradient the user has moved their mouse.
 * The result should be rounded down and displayed as a percentage inside the <div> with id "result". 
Submit only the attachGradientEvents() function in Judge. 
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
 */
function attachGradientEvents() {
    const divRef = document.getElementById('gradient');

    divRef.addEventListener('mousemove', hoverHandler);

    function hoverHandler(event){
        const x = event.offsetX;
        const percent = Math.floor(x / 300 * 100);
        document.getElementById('result').textContent = percent + '%';
    }
}