// import database from "../mySQL/database.js";
// function renderSearchResults(keyword) {
//   if (keyword) {
//     document.querySelector("body").innerHTML = keyword; // implement later
//   }
// }
// function performSearch() {
//   try {
//     renderSearchResults(keyword);
//     sessionCode ? database.saveSearchHistory({ sessionCode, keyword }) : 0;
//   }
//   catch (error) {
//     console.log(`error when perform search: ${JSON.stringify(error)}`);
//   }
// }
// performSearch();
const params = new URLSearchParams(document.location.search);
const keyword = params.get("keyword");
const sessionCode = Cookies.get('sessionCode');

fetch('/api/search', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ sessionCode, keyword })
})
  .then(response => response.json())
  .then(response => {
    document.querySelector('code').innerHTML = JSON.stringify(response.data);
  })
  .catch(error => {
    console.log(`error when perform search: ${JSON.stringify(error)}`);
  })