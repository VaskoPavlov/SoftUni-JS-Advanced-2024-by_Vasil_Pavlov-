function solve() {
    const inputsRef = document.querySelectorAll('tbody>tr>td>input')

    let success = false;
    
    const button = document.querySelector('button');
    button.addEventListener('click', checkHandler);

    const clearBtn = document.querySelectorAll('button')[1];
    clearBtn.addEventListener('click', clearHandler);

    const resultParagraph = document.querySelector('#check>p');
    const table = document.querySelector('table');

    function checkHandler(event) {
        event.preventDefault();

        //Getting the number inside each cell in 3x3 sudoku
        const firstCell = inputsRef[0].value;
        const secondCell = inputsRef[1].value;
        const thirdCell = inputsRef[2].value;
        const fourthCell = inputsRef[3].value;
        const fifthCell = inputsRef[4].value;
        const sixthCell = inputsRef[5].value;
        const seventhCell = inputsRef[6].value;
        const eighthCell = inputsRef[7].value;
        const ninthCell = inputsRef[8].value;
        
        //IN SUDOKU THERE EXIST A PATTERN EVERY LAST NUMBER IN 3X3 EQUALS THE 1 NUMBER OF THE NEXT ROW
        //EXAMPLE: 3rd num == 4th num && 6th num == 7th num !!!

        //checking for identical numbers in FIRST row
        if    (firstCell !== secondCell 
            && secondCell !== thirdCell 
            && firstCell !== thirdCell
            && thirdCell == fourthCell
        //checking for identical numbers in SECOND row
            && fifthCell !== fourthCell
            && fifthCell !== thirdCell
            && sixthCell !== fifthCell
            && sixthCell == seventhCell
        //checking for identical numbers in THIRD row
            && seventhCell !== fifthCell
            && seventhCell !== eighthCell
            && eighthCell !== ninthCell
            && seventhCell !== ninthCell) 
            
            {
                success = true;
            } else {
                success = false;
            }

        if (success) {
            table.style.border = '2px solid green';
            resultParagraph.textContent = 'You solve it! Congratulations!';
            resultParagraph.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            resultParagraph.textContent = 'NOP! You are not done yet...';
            resultParagraph.style.color = 'red';

        }
    }
    function clearHandler(event) {
        event.preventDefault();
        for (const input of inputsRef) {
            input.value = '';
        }
        resultParagraph.textContent = '';
        table.style.border = 'none';
    }
}