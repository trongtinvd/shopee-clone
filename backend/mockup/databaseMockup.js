import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "shopeeClone"
})

const date = new Date();

const flashSale = {
  date: {
    date: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear()
  },
  saleStart: {
    hour: 12,
    minute: 0,
    second: 0
  },
  saleEnd: {
    hour: Math.min(date.getHours() + 3, 24),
    minute: 0,
    second: 0
  },
  items: [
    {
      name: "Cưa tĩnh điện",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-1.png",
      price: "369.200",
      discount: "-26%",
      total: 100,
      remain: 100
    },
    {
      name: "Điện thoại thông minh",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-2.png",
      price: "16.200",
      discount: "-26%",
      total: 100,
      remain: 90
    },
    {
      name: "Minh tinh điện ảnh",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-3.png",
      price: "5.200",
      discount: "-26%",
      total: 100,
      remain: 80
    },
    {
      name: "Ảnh chụp chân không",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-4.png",
      price: "79.200",
      discount: "-26%",
      total: 100,
      remain: 70
    },
    {
      name: "Không khí đà lạc",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-5.png",
      price: "542.200",
      discount: "-26%",
      total: 100,
      remain: 60
    },
    {
      name: "Lạc đà châu phi",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-6.png",
      price: "66.200",
      discount: "-26%",
      total: 100,
      remain: 50
    },
    {
      name: "Phi hành cơ",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-7.png",
      price: "200",
      discount: "-26%",
      total: 100,
      remain: 40
    },
    {
      name: "Cơ bò không mỡ",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-8.png",
      price: "1.779.200",
      discount: "-26%",
      total: 100,
      remain: 30
    },
    {
      name: "Mỡ lợn",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-9.png",
      price: "25.768.200",
      discount: "-26%",
      total: 100,
      remain: 20
    },
    {
      name: "Lợn ba chỉ",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-10.png",
      price: "369.200",
      discount: "-26%",
      total: 100,
      remain: 10
    },
    {
      name: "Chỉ may thượng hạng",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-11.png",
      price: "369.200",
      discount: "-26%",
      total: 100,
      remain: 27
    },
    {
      name: "Hạnh nhân",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-12.png",
      price: "369.200",
      discount: "-26%",
      total: 100,
      remain: 15
    }
  ]
}

const voucherBanner = {
  image: "img/voucher-banner/three-voucher.webp",
  name: "voucher banner",
  links: [
    "https://www.google.com/",
    "https://www.google.com/",
    "https://www.google.com/"
  ]
}

const shopeeMall = {
  ad: {
    name: "shopee mall ad",
    image: "img/shopee-mall/ad-banner.jpg",
    link: "https://www.google.com/"
  },
  items: [
    {
      name: "Thuốc lá",
      image: "img/shopee-mall/item-1.webp",
      link: "https://www.google.com/",
      description: "Ưu đãi đến 50%"
    },
    {
      name: "Lá chè",
      image: "img/shopee-mall/item-2.webp",
      link: "https://www.google.com/",
      description: "Mua 1 được 2"
    },
    {
      name: "Chè đậu đen",
      image: "img/shopee-mall/item-3.webp",
      link: "https://www.google.com/",
      description: "Mua 1 tặng 1"
    },
    {
      name: "Sữa rữa mặt",
      image: "img/shopee-mall/item-4.webp",
      link: "https://www.google.com/",
      description: "Mua 1 tặng 1"
    },
    {
      name: "Mật ong miền đông",
      image: "img/shopee-mall/item-5.webp",
      link: "https://www.google.com/",
      description: "Mua 1 tặng 1"
    },
    {
      name: "Đông trùng hạ thảo",
      image: "img/shopee-mall/item-6.webp",
      link: "https://www.google.com/",
      description: "Mua là có quà"
    },
    {
      name: "Thảo mộc trung hoa",
      image: "img/shopee-mall/item-7.webp",
      link: "https://www.google.com/",
      description: "Giảm đến 50%"
    },
    {
      name: "Hoa lan hồng ngoại",
      image: "img/shopee-mall/item-8.webp",
      link: "https://www.google.com/",
      description: "Quà mọi đơn"
    },
    {
      name: "Ngoại xoi",
      image: "img/shopee-mall/item-9.webp",
      link: "https://www.google.com/",
      description: "Mua là có quà"
    },
    {
      name: "Xôi dừa",
      image: "img/shopee-mall/item-10.webp",
      link: "https://www.google.com/",
      description: "Mua 1 tặng 1"
    },
    {
      name: "Dừa khô tẩm đường",
      image: "img/shopee-mall/item-11.webp",
      link: "https://www.google.com/",
      description: "Deli siêu sale"
    },
    {
      name: "Đường nâu nhập khẩu",
      image: "img/shopee-mall/item-12.webp",
      link: "https://www.google.com/",
      description: "Mua 1 được 6"
    },
    {
      name: "Khẩu súng nhựa",
      image: "img/shopee-mall/item-13.webp",
      link: "https://www.google.com/",
      description: "Mua là có quà"
    },
    {
      name: "Nhựa chất lượng cao",
      image: "img/shopee-mall/item-14.webp",
      link: "https://www.google.com/",
      description: "Giảm đến 20%"
    },
    {
      name: "Cao cao hàn quốc",
      image: "img/shopee-mall/item-15.webp",
      link: "https://www.google.com/",
      description: "Mua là có quà"
    }
  ]
}

const topSeached = {
  items: [
    {
      name: "Mô hình thép 3D",
      link: "https://www.google.com/",
      image: "img/top-searched/item-1.jpg",
      sold: "51k"
    },
    {
      name: "Mô hình 3D",
      link: "https://www.google.com/",
      image: "img/top-searched/item-2.jpg",
      sold: "5k"
    },
    {
      name: "Áo ngực không dây",
      link: "https://www.google.com/",
      image: "img/top-searched/item-3.jpg",
      sold: "71k"
    },
    {
      name: "Đầu chuyển Otg type C",
      link: "https://www.google.com/",
      image: "img/top-searched/item-4.jpg",
      sold: "66k"
    },
    {
      name: "Cắp HDMI",
      link: "https://www.google.com/",
      image: "img/top-searched/item-5.jpg",
      sold: "39k"
    },
    {
      name: "Giá đõ điện thoại",
      link: "https://www.google.com/",
      image: "img/top-searched/item-6.jpg",
      sold: "14k"
    },
    {
      name: "Đồ chơi lego",
      link: "https://www.google.com/",
      image: "img/top-searched/item-7.jpg",
      sold: "7k"
    },
    {
      name: "Đồng hồ gián tường",
      link: "https://www.google.com/",
      image: "img/top-searched/item-8.jpg",
      sold: "4k"
    },
    {
      name: "Bàn phím giả cơ",
      link: "https://www.google.com/",
      image: "img/top-searched/item-9.jpg",
      sold: "45k"
    },
    {
      name: "Đồ chơi cho bé",
      link: "https://www.google.com/",
      image: "img/top-searched/item-10.jpg",
      sold: "3k"
    },
    {
      name: "Chuột chơi game",
      link: "https://www.google.com/",
      image: "img/top-searched/item-11.jpg",
      sold: "4k"
    },
    {
      name: " Son kem lì mịn môi",
      link: "https://www.google.com/",
      image: "img/top-searched/item-12.jpg",
      sold: ""
    },
    {
      name: "Ổ điện",
      link: "https://www.google.com/",
      image: "img/top-searched/item-13.jpg",
      sold: "2k"
    },
    {
      name: "Quần lót nữ cotton",
      link: "https://www.google.com/",
      image: "img/top-searched/item-14.jpg",
      sold: "16k"
    },
    {
      name: "Tinh dầu bưởi Cocoon",
      link: "https://www.google.com/",
      image: "img/top-searched/item-15.jpg",
      sold: "4k"
    },
    {
      name: "Keycap",
      link: "https://www.google.com/",
      image: "img/top-searched/item-16.jpg",
      sold: "17k"
    },
    {
      name: "Áo babydoll nữ tay bèo",
      link: "https://www.google.com/",
      image: "img/top-searched/item-17.jpg",
      sold: "12k"
    },
    {
      name: "Áo lót nữ không gọng",
      link: "https://www.google.com/",
      image: "img/top-searched/item-18.jpg",
      sold: "14k"
    }
  ]
}

const todaySuggestions = [
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-1.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Mall", style: "mall-label" }],
    tags: [
      { text: "Rẻ vô địch", style: "cheap-tag" },
      { text: "Giảm 80k", style: "discount-tag" }
    ],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Bàn làm việc",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-2.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Yêu thích", style: "liked-label" }],
    tags: [{ text: "Flash sale 10/11", style: "flash-sale-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-3.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Xử lý", style: "process-label" }],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-4.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Yêu thích", style: "liked-label" }],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-5.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Yêu thích+", style: "liked-label" }],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-6.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-7.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Yêu thích+", style: "liked-label" }],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-8.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-9.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Yêu thích+", style: "liked-label" }],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-10.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Yêu thích+", style: "liked-label" }],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-11.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-12.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Yêu thích", style: "liked-label" }],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-13.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Yêu thích", style: "liked-label" }],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-14.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Yêu thích", style: "liked-label" }],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-15.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Yêu thích", style: "liked-label" }],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-16.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Mall", style: "mall-label" }],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-17.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [{ text: "Yêu thích", style: "liked-label" }],
    tags: [{ text: "10% giảm", style: "discount-tag" }],
    similarItems: "https://www.google.com/"
  },
  {
    name: "Mô hình lắp rắp",
    link: "https://www.google.com/",
    image: "img/today-suggestions/item-18.webp",
    price: "120.000",
    sold: "5k",
    overlays:
    {
      discount: "-27%",
      video: true,
      image: "img/today-suggestions/overlay-1-voucher.png"
    },
    labels: [],
    tags: [
      { text: "Rẻ vô địch", style: "cheap-tag" },
      { text: "Giảm 30%", style: "discount-tag" }
    ],
    similarItems: "https://www.google.com/"
  }
]

const database = {
  banners: function (main, sub) {
    const mainBanner = connection.query(`select image, link from banners where type = 'mainBanner' order by dateAdded limit ${main};`);
    const subBanner = connection.query(`select image, link from banners where type = 'subBanner' order by dateAdded limit ${sub};`);
    return Promise.all([mainBanner, subBanner])
      .then(data => {
        const result = {
          mainBanners: data[0][0],
          subBanners: data[1][0]
        }
        return result;
      })
  },

  userInfo: function (data) {
    return connection.query(`select displayName, profilePicture from users where username = '${data.username}' and password = '${data.password}';`)
      .then(([result,]) => {
        return result[0];
      })
  },

  suggestSearchs: function (data) {
    return connection.query(`select suggest, link from suggestSearches as ss join users as u where ss.userId = u.id and u.username = '${data.username}' and u.password = '${data.password}' limit 7`)
      .then(([result,]) => {
        return result;
      });
  },

  notifications: function (data) {
    return connection.query(`select userId, title, image, concat('notifications/', notifications.id) as link, description
                              from notifications
                              join users on userId = users.id
                              where username = '${data.username}' and password='${data.password}';`)
      .then(([result,]) => {
        return result;
      });
  },

  searchHistories: function (data) {
    return connection.query(`select name, link from searchHistories where userId = (select id from users where username = '${data.username}' and password='${data.password}');`)
      .then(([result,]) => {
        return result;
      });
  },

  cart: function (data) {
    return connection.query(`select users.username, p.name, p.image, concat('product/',p.id) as link, p.variation1, pv.value1, p.variation2, pv.value2, p.variation3, pv.value3, pv.price, ci.amount, (pv.price * ci.amount) as total 
                              from cartItems as ci 
                              join users on ci.userId = users.id 
                              join productVariations as pv on ci.productVariationId = pv.id 
                              join products as p on pv.productId = p.id 
                              where username = '${data.username}' and password = '${data.password}';`)
      .then(([result,]) => {
        return result;
      });
  },

  flashSale: function (year, month, date) {
    return flashSale;
  },

  voucherBanner: function (year, month, date) {
    return voucherBanner;
  },

  shopeeMall: function (year, month, date) {
    return shopeeMall;
  },

  topSeached: function () {
    return topSeached;
  },

  todaySuggestions: function () {
    return todaySuggestions;
  }
}
export default database;