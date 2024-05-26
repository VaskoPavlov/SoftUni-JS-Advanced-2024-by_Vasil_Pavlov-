/**
 * Task: In this problem, you should create a JS functionality that shows and 
 * hides the additional information about users.
 
When one of the [Show more] buttons is clicked, the hidden information inside the div should
be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.
 
If the hidden information is displayed and we lock the profile again, 
the [Hide it] button should not be working! 
Otherwise, when the profile is unlocked and we click on the [Hide it] button, 
the new fields must hide again
 */
function lockedProfile() {
    //                                                                  this is how 
    //                                                              we choose attribute(:)
    // const currentRadioBtn = document.querySelector(".profile input[type='radio']:checked");
    const showMoreBtnsRef = Array.from(document.querySelectorAll('button'));
    

    showMoreBtnsRef.forEach(btn => btn.addEventListener('click', onClickHandler));

    function onClickHandler (event) {
        let hiddenInfo = event.currentTarget.parentElement.querySelector('div');
        let currentRadioBtn = event.target.parentElement.querySelector("input[type='radio']:checked");

        if (currentRadioBtn.value === 'unlock') {
            if (event.currentTarget.textContent === 'Show more'){
                event.currentTarget.textContent = 'Hide it';
                hiddenInfo.style.display = 'block';
            } else {
                event.currentTarget.textContent = 'Show more';
                hiddenInfo.style.display = 'none';
            }
        }
    }
}