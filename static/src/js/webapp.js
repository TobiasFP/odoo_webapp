odoo.define('webapp.webapp', function (require) {
  "use strict";

  require('web.dom_ready');  // your code goes here
  let deferredPrompt;
  console.log('webbappJS loaded');

  document.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt happened');

    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    btnAdd.style.display = 'block';
  });

  btnAdd = document.getElementById("appButton");
  btnAdd.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    console.log('appButton clicked');
    btnAdd.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});