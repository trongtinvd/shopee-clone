console.log("start");

// fetch data

function changeBanner(newIndex) {
  const mainBanner = document.querySelector(".main-banner");
  const oldBanner = document.querySelector(".active-main-banner");
  const oldIndex = oldBanner.dataset.bannerIndex;
  const oldButton = document.querySelector(`[data-banner-navigation-index='${oldIndex}']`);
  const newBanner = document.querySelector(`[data-banner-index='${newIndex}']`);
  const newButton = document.querySelector(`[data-banner-navigation-index='${newIndex}']`);
  if (newBanner) {
    mainBanner.scrollLeft = oldBanner.clientWidth * newIndex;

    oldBanner.classList.remove("active-main-banner");
    newBanner.classList.add("active-main-banner");

    oldButton.classList.remove("active-banner-navigation-button");
    newButton.classList.add("active-banner-navigation-button");
  }
}

function addBannerEventListeners() {
  document.querySelector(".next-banner-button").addEventListener("click", event => {
    console.log("next banner");
    const currentBanner = document.querySelector(".active-main-banner");
    const currentIndex = currentBanner.dataset.bannerIndex;
    changeBanner(Number(currentIndex) + 1);
  });

  document.querySelector(".previous-banner-button").addEventListener("click", event => {
    console.log("previous banner");
    const currentBanner = document.querySelector(".active-main-banner");
    const currentIndex = currentBanner.dataset.bannerIndex;
    changeBanner(Number(currentIndex) - 1);
  });

  document.querySelectorAll(".banner-navigation-button").forEach(button => {
    button.addEventListener("click", event => {
      console.log("change banner");
      const nextIndex = button.dataset.bannerNavigationIndex;
      changeBanner(nextIndex);
    })
  });
}

function loadBannerHTML(data) {
  /*
    <div class="ads-banners">
      <div class="main-banner">
        <a href="#" target="_blank"><img data-banner-index="0" class="active-main-banner" src="img/banners/main-1.webp" alt=""></a>
        <a href="#" target="_blank"><img data-banner-index="1" src="img/banners/main-2.webp" alt=""></a>
        <a href="#" target="_blank"><img data-banner-index="2" src="img/banners/main-3.webp" alt=""></a>
        <a href="#" target="_blank"><img data-banner-index="3" src="img/banners/main-4.webp" alt=""></a>
        <a href="#" target="_blank"><img data-banner-index="4" src="img/banners/main-5.webp" alt=""></a>
        <a href="#" target="_blank"><img data-banner-index="5" src="img/banners/main-6.webp" alt=""></a>
        <a href="#" target="_blank"><img data-banner-index="6" src="img/banners/main-7.webp" alt=""></a>
        <a href="#" target="_blank"><img data-banner-index="7" src="img/banners/main-8.webp" alt=""></a>
      </div>
      <a href="#" target="_blank"><div class="banner"><img src="img/banners/sub-1.webp" alt=""></div></a>
      <a href="#" target="_blank"><div class="banner"><img src="img/banners/sub-2.webp" alt=""></div></a>
      <button class="previous-banner-button"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="next-banner-button"><i class="fa-solid fa-chevron-right"></i></button>
      <div class="banner-navigation">
        <button data-banner-navigation-index="0" class="banner-navigation-button active-banner-navigation-button"></button>
        <button data-banner-navigation-index="1" class="banner-navigation-button"></button>
        <button data-banner-navigation-index="2" class="banner-navigation-button"></button>
        <button data-banner-navigation-index="3" class="banner-navigation-button"></button>
        <button data-banner-navigation-index="4" class="banner-navigation-button"></button>
        <button data-banner-navigation-index="5" class="banner-navigation-button"></button>
        <button data-banner-navigation-index="6" class="banner-navigation-button"></button>
        <button data-banner-navigation-index="7" class="banner-navigation-button"></button>
      </div>
    </div>
  */

  const mainBanner = data["main-banners"];
  const subBanner = data["sub-banners"];
  let html = `<div class="main-banner">`;

  for (let i = 0; i < mainBanner.length; i++) {
    if (i === 0) {
      html += `<a href="${mainBanner[i].link}" target="_blank"><img data-banner-index="${i}" class="active-main-banner" src="${mainBanner[i].img}" alt="main banner #${i}"></a>`;
    }
    else {
      html += `<a href="${mainBanner[i].link}" target="_blank"><img data-banner-index="${i}" src="${mainBanner[i].img}" alt="main banner #${i}"></a>`;
    }
  }

  html += `</div>
      <a href="${subBanner[0].link}" target="_blank"><div class="banner"><img src="${subBanner[0].img}" alt="sub banner #${0}"></div></a>
      <a href="${subBanner[1].link}" target="_blank"><div class="banner"><img src="${subBanner[1].img}" alt="sub banner #${1}"></div></a>
      <button class="previous-banner-button"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="next-banner-button"><i class="fa-solid fa-chevron-right"></i></button>
      <div class="banner-navigation">`;

  for (let i = 0; i < mainBanner.length; i++) {
    if (i === 0) {
      html += `<button data-banner-navigation-index="${i}" class="banner-navigation-button active-banner-navigation-button"></button>`;
    }
    else {
      html += `<button data-banner-navigation-index="${i}" class="banner-navigation-button"></button>`;
    }
  }

  html += `</div>`;

  console.log(html);
  document.querySelector(".ads-banners").innerHTML = html;
  addBannerEventListeners();
}

fetch("./jsons/banners.json")
  .then(data => data.json())
  .then(data => {
    console.log(`load banner data: ${data}`);
    loadBannerHTML(data);
  });

