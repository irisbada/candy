var notifier = require('node-notifier'),
    path = require('path');

  (function() {
    //Creates desktop notification using title and message
    var createNotification = function(title, message) {
      notifier.notify({
        title: title,
        message: message,
        icon: path.join(__dirname, 'image/favicon.png'),
        sound: true,
        wait: false
      });
    };

    //Callback method for notifyButton
    var handleNotification = function() {
      var title = document.getElementById("title").value,
          message = document.getElementById("message").value;
      createNotification(title, message);
    };

    var notifyButton = document.getElementById("notifyButton");
    //Attaching a listener to notifyButton
    notifyButton.addEventListener("click", handleNotification);
  })();
