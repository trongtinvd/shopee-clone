import htmlRenderer from "./htmlRenderer.js";
import eventManager from "./eventManager.js";

console.log("start");

function renderBanner() {
  fetch("/api/banners/2025/11/6")
    .then(data => data.json())
    .then(data => {
      htmlRenderer.renderBanner(data);
      eventManager.addBannerEventListeners();
    });
}

function renderUser() {
  fetch("/api/user/1")
    .then(data => data.json())
    .then(data => htmlRenderer.renderUser(data));
}

function renderSuggestSearch() {
  fetch("/api/suggest-search/1")
    .then(data => data.json())
    .then(data => htmlRenderer.renderSuggestSearch(data));
}

function renderNotification() {
  fetch("/api/notification/1")
    .then(data => data.json())
    .then(data => htmlRenderer.renderNotification(data));
}

function renderSearchHistory() {
  fetch("/api/search-history/1")
    .then(data => data.json())
    .then(data => htmlRenderer.renderSearchHistory(data));
}

function renderCart() {
  fetch("/api/cart/1")
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

renderUser();
renderSuggestSearch();
renderBanner();
renderNotification();
renderSearchHistory();
renderCart();
renderSelection();
renderFlashSale();
renderVoucherBanner();

