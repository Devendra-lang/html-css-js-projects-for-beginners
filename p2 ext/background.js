// // Optional: Handle installation events
// chrome.runtime.onInstalled.addListener(() => {
//     console.log("Social Share Assistant extension installed.");
//     // You could set up default settings or notifications here
// });

// // Optional: Add listeners for other events if needed
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     // Example for handling messages from the popup
//     if (request.action === "getTabUrl") {
//         chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//             sendResponse({ url: tabs[0].url });
//         });
//         return true; // Keep the message channel open for sendResponse
//     }
// });

// // You can add more background functionality as needed
