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

function renderUser() {
  fetch("./jsons/user.json")
    .then(data => data.json())
    .then(data => htmlRenderer.renderUser(data));
}

function renderSuggestSearch() {
  fetch("./jsons/suggest-search.json")
    .then(data => data.json())
    .then(data => htmlRenderer.renderSuggestSearch(data));
}

function renderNotification(){
  fetch("./jsons/notification.json")
    .then(data => data.json())
    .then(data => htmlRenderer.renderNotification(data));
}

function renderSearchHistory(){
  fetch("./jsons/search-history.json")
    .then(data => data.json())
    .then(data => htmlRenderer.renderSearchHistory(data));
}

function renderCart(){
  fetch("./jsons/cart.json")
    .then(data => data.json())
    .then(data => htmlRenderer.renderCart(data));
}

renderUser();
renderSuggestSearch();
renderBanner();
renderNotification();
renderSearchHistory();
renderCart();