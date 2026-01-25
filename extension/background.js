// Background Service Worker

// Initialize default state on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ isActive: true });
  console.log("Shield Extension Installed");
});

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === "getCookies") {
    chrome.cookies.getAll({ url: req.url }, (cookies) => {
      sendResponse(cookies);
    });
    return true;
  }
});
