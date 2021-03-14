// // Background code goes here
// chrome.browserAction.onClicked.addListener((/* tab */) => {
//   // Opens our extension in a new browser window.
//   // Only if a popup isn't defined in the manifest.
//   chrome.tabs.create({
//     url: chrome.extension.getURL('www/index.html')
//   }, (/* newTab */) => {
//     // Tab opened.
//   })
// })

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     // if (request.greeting == "hello")
//     // chrome.tabs.create({
//     //   url: chrome.extension.getURL('www/index.html')
//     // })
//       // sendResponse({farewell: "goodbye"});
//   }
// );