import htmlRenderer from "./htmlRenderer.js";
import eventManager from "./eventManager.js";
import dataManager from "./dataManager.js";
import { devData } from "./utils.js";

console.log("start");

function renderBanner() {
  fetch("/api/banners")
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderBanner(data);
      eventManager.addBannerEventListeners();
    });
}

function renderUser() {
  fetch("/api/user/", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(devData.user.loginData) })
    .then(data => data.json())
    .then(data => {
      dataManager.saveUser(data);
      htmlRenderer.renderUser(dataManager.getUser());
    });
}

function renderSuggestSearch() {
  fetch("/api/suggest-search/", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(devData.user.loginData) })
    .then(data => data.json())
    .then(data => htmlRenderer.renderSuggestSearch(data));
}

function renderNotification() {
  fetch("/api/notification/", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(devData.user.loginData) })
    .then(data => data.json())
    .then(data => htmlRenderer.renderNotification(data));
}

function renderSearchHistory() {
  fetch("/api/search-history/")
    .then(data => data.json())
    .then(data => htmlRenderer.renderSearchHistory(data));
}

function renderCart() {
  fetch("/api/cart/", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(devData.user.loginData) })
    .then(data => data.json())
    .then(data => htmlRenderer.renderCart(data))
    .catch(error => htmlRenderer.renderEmptyCart());
}

function renderSelection() {
  eventManager.addSelectionSectionEventListener();
}

function renderFlashSale() {
  const date = new Date();
  fetch(`/api/flashsale/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderFlashSale(data);
      eventManager.addFlashSaleSectionListener();
    })
}

function renderVoucherBanner() {
  const date = new Date();
  fetch(`./api/voucherBanner/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderVoucherBanner(data);
    })
}

function renderShopeeMall() {
  const date = new Date();
  fetch(`./api/shopeeMall/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderShopeeMall(data);
      eventManager.addShopeeMallSectionListener();
    })
}

function renderTopSearched() {
  fetch(`./api/topSearched/`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderTopSearched(data);
      eventManager.addTopSearchedSectionListener();
    })
}

function renderTodaySuggestions() {
  fetch(`./api/todaySuggestions/`)
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderTodaySuggestions(data);
    })
}



renderUser();
renderSuggestSearch();
renderBanner();
renderNotification();
renderSearchHistory();
renderCart();
renderSelection();
renderFlashSale();
renderVoucherBanner();
renderShopeeMall();
renderTopSearched();
renderTodaySuggestions();

