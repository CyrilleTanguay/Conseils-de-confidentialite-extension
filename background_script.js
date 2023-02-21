// Put all the javascript code here, that you want to execute in background.

/*
Log that we received the message.
Then display a notification. The notification contains the URL,
which we read from the message.
*/
// function notify(message) {
//   console.log("background script received message");
//   let title = browser.i18n.getMessage("notificationTitle");
//   //let content = browser.i18n.getMessage("notificationContent", message.url);
//   browser.notifications.create({
//     "type": "basic",
//     "iconUrl": browser.extension.getURL("icons/link-48.png"),
//     "title": title,
//     "message": message
//   });
// }

// /*
// Assign `notify()` as a listener to messages from the content script.
// */
// browser.runtime.onMessage.addListener(notify);



    //document.getElementById("messageExt").innerHTML = "Vous pourriez faire des modifications dans ces paramètres";

// define a new property on the window
// window.foo = "This global variable was added by a page script";

// // redefine the built-in window.confirm() function
// window.confirm = () => {
//   alert("The page script has also redefined 'confirm'");

// }


//     browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
//         let tab = tabs[0]; // Safe to assume there will only be one result
//         console.log(tab.url);

//     }, console.error), 

// console.log("yes");
console.log(location.href);
