/**
 * Task: Create a program that converts different time units. 
 * Your task is to add a click event listener to all [CONVERT] buttons. 
 * When a button is clicked, read the corresponding input field, 
 * convert the value to the three other time units and display it in the input fields.
 */
function attachEventsListeners() {
    const daysConvertBtn = document.getElementById('daysBtn');
    const hoursConvertBtn = document.getElementById('hoursBtn');
    const minutesConvertBtn = document.getElementById('minutesBtn');
    const secondsConvertBtn = document.getElementById('secondsBtn');

    daysConvertBtn.addEventListener('click', convertTimeHandler);
    hoursConvertBtn.addEventListener('click', convertTimeHandler);
    minutesConvertBtn.addEventListener('click', convertTimeHandler);
    secondsConvertBtn.addEventListener('click', convertTimeHandler);

    const daysInputRef = document.getElementById('days');
    const hoursInputRef = document.getElementById('hours');
    const minutesInputRef = document.getElementById('minutes');
    const secondsInputRef = document.getElementById('seconds');


    function convertTimeHandler (event) {
        let currentUnitInput = event.currentTarget.parentElement.children[1];
        let value = Number(currentUnitInput.value);
        let unit = currentUnitInput.id;

        switch(unit) {
            case 'days':
                propagateNewValue(value);
                break;
            case 'hours':
                propagateNewValue(value / 24);
                break;
            case 'minutes':
                propagateNewValue(value / 24 / 60);
                break;
            case 'seconds':
                propagateNewValue(value / 24 / 60 / 60);
                break;
        }
    }

    function propagateNewValue(value) {
        daysInputRef.value = value;
        hoursInputRef.value = value * 24;
        minutesInputRef.value = value * 24 * 60;
        secondsInputRef.value = value * 24 * 60 * 60;
    }
}