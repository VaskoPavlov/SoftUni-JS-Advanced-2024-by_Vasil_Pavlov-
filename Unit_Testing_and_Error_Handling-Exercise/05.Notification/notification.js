/**
 * Task: Write a JS function that receives a string message and displays it inside a div with 
 * id "notification. The div starts hidden and when the function is called, reveal it. 
 * After the user clicks on it, hide the div. In the example document, 
 * a notification is shown when you click on the button ["Get notified"].
 */
/**
 * @param {string} message 
 */
function notify(message) {
    const notificationRef = document.getElementById('notification');
  
    notificationRef.textContent = message;
    notificationRef.style.display = 'block';
  
    notificationRef.addEventListener('click', hideMessageHandler);
  
    function hideMessageHandler(event) {
      event.target.style.display = 'none';
    }
  }