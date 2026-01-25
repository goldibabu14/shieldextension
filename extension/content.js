// Content Script

console.log("Shield Extension Content Script Loaded");

const url = window.location.href;

chrome.runtime.sendMessage(
  { action: "getCookies", url: window.location.href },
  (cookies) => {
    console.log(cookies);
  }
);