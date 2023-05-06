// find notifications, read-indicators, and the notif number
// on mark all as read click: remove them

function main() {
  let notifications = document.getElementsByClassName("notification");
  let readIndicators = document.getElementsByClassName("read-indicator");
  let notifNumber = document.getElementById("notif-number");

  let markAllAsReadButton = document.getElementById("toggle-read");
  markAllAsReadButton.addEventListener("click", () => {
    for (let i = 0; i < notifications.length; i++) {
      let notification = notifications[i];
      let readIndicator = readIndicators[i];

      notification.classList.remove("unread-notification");
      readIndicator.classList.remove("unread-indicator");
      notifNumber.style.visibility = "hidden";
    }
  });
}

main();
