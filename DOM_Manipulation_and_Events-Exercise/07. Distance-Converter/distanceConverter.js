/**
 * Task: Your task is to convert from one distance unit to another by adding a click event listener to a button. 
 * When it is clicked, read the value from the input field and get the selected option from the input 
 * and output units dropdowns. 
 * Then calculate and display the converted value in the disabled output field.
 */
function attachEventsListeners() {
    const fromInputRef = document.getElementById('inputDistance');
    const fromUnitRef = document.getElementById('inputUnits');

    const toInputRef = document.getElementById('outputDistance');
    const toUnitRef = document.getElementById('outputUnits');

    const converBtn = document.getElementById('convert');

    converBtn.addEventListener('click', converHandler);

    function converHandler(event) {
        // Next line does nothing in this situation, but i like to make it a habit!
        // Whenever i have a button and eventlistener to prevent the reload of the page!
        event.preventDefault();

        const fromInputValue = fromInputRef.value;
        const fromUnitValue = fromUnitRef.value;

        const toUnitValue = toUnitRef.value;
    
        if (fromInputValue) {
            //from unit km
            if (fromUnitValue == 'km') {
                switch (toUnitValue) {
                    case 'km':
                        toInputRef.value = fromInputValue;
                        break;
                    case 'm':
                        toInputRef.value = fromInputValue * 1000;
                        break;
                    case 'cm':
                        toInputRef.value = fromInputValue * 100000;
                        break;
                    case 'mm':
                        toInputRef.value = fromInputValue * 1000000;
                        break;
                    case 'mi':
                        toInputRef.value = (fromInputValue * 1000) / 1609.34;
                        break;
                    case 'yrd':
                        toInputRef.value = (fromInputValue * 1000) / 0.9144;
                        break;
                    case 'ft':
                        toInputRef.value = (fromInputValue * 1000) / 0.3048;
                        break;
                    case 'in':
                        toInputRef.value = (fromInputValue * 1000) / 0.0254;
                        break;
                }
            }
            //from unit m
            if (fromUnitValue == 'm') {
                switch (toUnitValue) {
                    case 'km':
                        toInputRef.value = fromInputValue / 1000;
                        break;
                    case 'm':
                        toInputRef.value = fromInputValue;
                        break;
                    case 'cm':
                        toInputRef.value = fromInputValue * 100;
                        break;
                    case 'mm':
                        toInputRef.value = fromInputValue * 1000;
                        break;
                    case 'mi':
                        toInputRef.value = fromInputValue / 1609.34;
                        break;
                    case 'yrd':
                        toInputRef.value = fromInputValue / 0.9144;
                        break;
                    case 'ft':
                        toInputRef.value = fromInputValue / 0.3048;
                        break;
                    case 'in':
                        toInputRef.value = fromInputValue / 0.0254;
                        break;
                }
            }
            //from unit cm
            if (fromUnitValue == 'cm') {
                switch (toUnitValue) {
                    case 'km':
                        toInputRef.value = fromInputValue / 100000;
                        break;
                    case 'm':
                        toInputRef.value = fromInputValue / 100;
                        break;
                    case 'cm':
                        toInputRef.value = fromInputValue;
                        break;
                    case 'mm':
                        toInputRef.value = fromInputValue * 10;
                        break;
                    case 'mi':
                        toInputRef.value = (fromInputValue / 100) / 1609.34;
                        break;
                    case 'yrd':
                        toInputRef.value = (fromInputValue / 100) / 0.9144;
                        break;
                    case 'ft':
                        toInputRef.value = (fromInputValue / 100) / 0.3048;
                        break;
                    case 'in':
                        toInputRef.value = (fromInputValue / 100) / 0.0254;
                        break;
                }
            }
            //from unit mm
            if (fromUnitValue == 'mm') {
                switch (toUnitValue) {
                    case 'km':
                        toInputRef.value = fromInputValue / 1000000;
                        break;
                    case 'm':
                        toInputRef.value = fromInputValue / 1000;
                        break;
                    case 'cm':
                        toInputRef.value = fromInputValue / 10;
                        break;
                    case 'mm':
                        toInputRef.value = fromInputValue;
                        break;
                    case 'mi':
                        toInputRef.value = fromInputValue / (1609.34 * 1000);
                        break;
                    case 'yrd':
                        toInputRef.value = fromInputValue / (0.9144 * 1000);
                        break;
                    case 'ft':
                        toInputRef.value = fromInputValue / (0.3048 * 1000);
                        break;
                    case 'in':
                        toInputRef.value = fromInputValue / (0.0254 * 1000);
                        break;
                }
            }
            //from unit mi
            if (fromUnitValue == 'mi') {
                switch (toUnitValue) {
                    case 'km':
                        toInputRef.value = fromInputValue * 1.60934;
                        break;
                    case 'm':
                        toInputRef.value = fromInputValue * 1609.34;
                        break;
                    case 'cm':
                        toInputRef.value = fromInputValue * 1609.34 * 100;
                        break;
                    case 'mm':
                        toInputRef.value = fromInputValue * 1609.34 * 1000;
                        break;
                    case 'mi':
                        toInputRef.value = fromInputValue;
                        break;
                    case 'yrd':
                        toInputRef.value = fromInputValue * 1609.34 / 0.9144;
                        break;
                    case 'ft':
                        toInputRef.value = fromInputValue * 1609.34 / 0.3048;
                        break;
                    case 'in':
                        toInputRef.value = fromInputValue * 1609.34 / 0.0254;
                        break;
                }
            }
            //from unit yrd
            if (fromUnitValue == 'yrd') {
                switch (toUnitValue) {
                    case 'km':
                        toInputRef.value = (fromInputValue / 1000) * 0.9144;
                        break;
                    case 'm':
                        toInputRef.value = fromInputValue * 0.9144;
                        break;
                    case 'cm':
                        toInputRef.value = (fromInputValue * 100) * 0.9144;
                        break;
                    case 'mm':
                        toInputRef.value = (fromInputValue * 1000) * 0.9144;
                        break;
                    case 'mi':
                        toInputRef.value = (fromInputValue * 0.9144) / 1609.34;
                        break;
                    case 'yrd':
                        toInputRef.value = fromInputValue;
                        break;
                    case 'ft':
                        toInputRef.value = (fromInputValue * 0.9144) / 0.3048;
                        break;
                    case 'in':
                        toInputRef.value = (fromInputValue * 0.9144) / 0.0254;
                        break;
                }
            }
            //from unit ft
            if (fromUnitValue == 'ft') {
                switch (toUnitValue) {
                    case 'km':
                        toInputRef.value = (fromInputValue / 1000) * 0.3048;
                        break;
                    case 'm':
                        toInputRef.value = fromInputValue * 0.3048;
                        break;
                    case 'cm':
                        toInputRef.value = (fromInputValue * 100) * 0.3048;
                        break;
                    case 'mm':
                        toInputRef.value = (fromInputValue * 1000) * 0.3048;
                        break;
                    case 'mi':
                        toInputRef.value = (fromInputValue * 0.3048) / 1609.34;
                        break;
                    case 'yrd':
                        toInputRef.value = (fromInputValue * 0.3048) / 0.9144;
                        break;
                    case 'ft':
                        toInputRef.value = fromInputValue;
                    break;
                    case 'in':
                        toInputRef.value = (fromInputValue * 0.3048) / 0.0254;
                        break;
                }
            }
            //from unit in
            if (fromUnitValue == 'in') {
                switch (toUnitValue) {
                    case 'km':
                        toInputRef.value = (fromInputValue / 1000) * 0.0254;
                        break;
                    case 'm':
                        toInputRef.value = fromInputValue * 0.0254;
                        break;
                    case 'cm':
                        toInputRef.value = (fromInputValue * 100) * 0.0254;
                        break;
                    case 'mm':
                        toInputRef.value = (fromInputValue * 1000) * 0.0254;
                        break;
                    case 'mi':
                        toInputRef.value = (fromInputValue * 0.0254) / 1609.34;
                        break;
                    case 'yrd':
                        toInputRef.value = (fromInputValue * 0.0254) / 0.9144;
                        break;
                    case 'ft':
                        toInputRef.value = (fromInputValue * 0.0254) / 0.3048;
                        break;
                    case 'in':
                        toInputRef.value = fromInputValue;
                    break;
                }
            }
        } else {
            return;
        }
        
    }
}