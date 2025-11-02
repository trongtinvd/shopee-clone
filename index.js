import htmlRenderer from "./htmlRenderer.js";
import eventManager from "./eventManager.js";

console.log("start");

function renderBanner() {
  fetch("./jsons/banners.json")
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderBanner(data);
      eventManager.addBannerEventListeners();
    });
}

function getAndRenderUser() {
  fetch("./jsons/user.json")
    .then(data => data.json())
    .then(data => htmlRenderer.renderUser(data));
}

getAndRenderUser();
renderBanner();