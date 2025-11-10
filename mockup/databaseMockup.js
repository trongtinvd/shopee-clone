
const date = new Date();

const banners = {
  "main-banners": [
    {
      "img": "/img/banners/main-1.webp",
      "link": "https://www.google.com/"
    },
    {
      "img": "/img/banners/main-2.webp",
      "link": "https://www.google.com/"
    },
    {
      "img": "/img/banners/main-3.webp",
      "link": "https://www.google.com/"
    },
    {
      "img": "/img/banners/main-4.webp",
      "link": "https://www.google.com/"
    },
    {
      "img": "/img/banners/main-5.webp",
      "link": "https://www.google.com/"
    },
    {
      "img": "/img/banners/main-6.webp",
      "link": "https://www.google.com/"
    },
    {
      "img": "/img/banners/main-7.webp",
      "link": "https://www.google.com/"
    },
    {
      "img": "/img/banners/main-8.webp",
      "link": "https://www.google.com/"
    }
  ],
  "sub-banners": [
    {
      "img": "/img/banners/sub-1.webp",
      "link": "https://www.google.com/"
    },
    {
      "img": "/img/banners/sub-2.webp",
      "link": "https://www.google.com/"
    }
  ]
};

const user = {
  "username": "Cow the Holy",
  "profile-picture": "./img/user-profile/avatar-1.jpeg"
};

const suggestSearchs = [
  {
    "suggest": "Giá Đỡ Màn Hình Phụ",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "Mecha Girl",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "Đồ Công Nghệ Độc Lạ",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "Ví Kim Loại",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "Kit Nhôm",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "Đèn Edison",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "Mạch Bàn Phím Bluetooth",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "EDC",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "Ví Kim Loại",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "Kit Nhôm",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "Đèn Edison",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "Mạch Bàn Phím Bluetooth",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "EDC",
    "link": "https://www.google.com/"
  },
  {
    "suggest": "Vỏ Bàn Phím",
    "link": "https://www.google.com/"
  }
];

const notifications = [
  {
    "name": "Tham gia khảo sát",
    "img": "img/notification/type-1-voucher-extra.png",
    "link": "https://www.google.com/",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit quidem voluptate, nisi exercitationem itaque incidunt est rerum, repellat alias eligendi, ut error animi! Qui voluptatem nisi illo, non deleniti dignissimos! Ratione, accusamus? Aspernatur, dolore magni. Repellat reiciendis accusantium odit explicabo. Ea quibusdam tempora ut voluptas in impedit odit? Reprehenderit."
  },
  {
    "name": "Giảm giá khủng 40%",
    "img": "img/notification/type-2-voucher-hunting.png",
    "link": "https://www.google.com/",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit quidem voluptate, nisi exercitationem itaque incidunt est rerum."
  },
  {
    "name": "Nhận ngay mã freeship 0đ",
    "img": "img/notification/type-3-note.png",
    "link": "https://www.google.com/",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit quidem voluptate, nisi exercitationem itaque incidunt est rerum, repellat alias eligendi, ut error animi!"
  },
  {
    "name": "Giao hàng thành công",
    "img": "img/notification/type-4-fast-delivery.png",
    "link": "https://www.google.com/",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit quidem voluptate, nisi exercitationem itaque incidunt est rerum, repellat alias eligendi, ut error animi! Qui voluptatem nisi illo, non deleniti dignissimos! Ratione, accusamus? Aspernatur, dolore magni. Repellat reiciendis accusantium odit explicabo. Ea quibusdam tempora ut voluptas in impedit odit? Reprehenderit."
  },
  {
    "name": "Hủy đơn hàng thành công",
    "img": "img/notification/type-5-top-deal.png",
    "link": "https://www.google.com/",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
  }
];

const searchHistory = [
  {
    "name": "Doraemon tập 77",
    "link": "https://www.google.com/"
  },
  {
    "name": "Conan tập 21",
    "link": "https://www.google.com/"
  },
  {
    "name": "PC 2",
    "link": "https://www.google.com/"
  },
  {
    "name": "Cửa kính",
    "link": "https://www.google.com/"
  },
  {
    "name": "Cửa thủy tinh",
    "link": "https://www.google.com/"
  },
  {
    "name": "Thủy tinh đánh sơn tinh",
    "link": "https://www.google.com/"
  },
  {
    "name": "Tinh Tinh cửi rồng",
    "link": "https://www.google.com/"
  }
];

const cart = [
  {
    "name": "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "image": "img/cart/item-1.jpg",
    "link": "https://www.google.com/",
    "price": "123.000"
  },
  {
    "name": "Cắp quang",
    "image": "img/cart/item-2.jpg",
    "link": "https://www.google.com/",
    "price": "5.000"
  },
  {
    "name": "Bánh quy",
    "image": "img/cart/item-3.jpg",
    "link": "https://www.google.com/",
    "price": "12.000"
  },
  {
    "name": "xe máy",
    "image": "img/cart/item-4.jpg",
    "link": "https://www.google.com/",
    "price": "123.000.000"
  },
  {
    "name": "Xe hơi honda điện kỹ thuật số AI Max Pro",
    "image": "img/cart/item-5.jpg",
    "link": "https://www.google.com/",
    "price": "1.123.000.000"
  }
];

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
      remain: 110
    },
    {
      name: "Hạnh nhân",
      link: "https://www.google.com/",
      image: "img/flash-sale/flash-sale-item-12.png",
      price: "369.200",
      discount: "-26%",
      total: 100,
      remain: 120
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

const shopeeMall ={
  ad:{
    name:"shopee mall ad",
    image:"img/shopee-mall/ad-banner.jpg",
    link:"https://www.google.com/"
  },
  items:[
    {
      name:"Thuốc lá",
      image:"img/shopee-mall/item-1.webp",
      link:"https://www.google.com/",
      description:"Ưu đãi đến 50%"
    },
    {
      name:"Lá chè",
      image:"img/shopee-mall/item-2.webp",
      link:"https://www.google.com/",
      description:"Mua 1 được 2"
    },
    {
      name:"Chè đậu đen",
      image:"img/shopee-mall/item-3.webp",
      link:"https://www.google.com/",
      description:"Mua 1 tặng 1"
    },
    {
      name:"Sữa rữa mặt",
      image:"img/shopee-mall/item-4.webp",
      link:"https://www.google.com/",
      description:"Mua 1 tặng 1"
    },
    {
      name:"Mật ong miền đông",
      image:"img/shopee-mall/item-5.webp",
      link:"https://www.google.com/",
      description:"Mua 1 tặng 1"
    },
    {
      name:"Đông trùng hạ thảo",
      image:"img/shopee-mall/item-6.webp",
      link:"https://www.google.com/",
      description:"Mua là có quà"
    },
    {
      name:"Thảo mộc trung hoa",
      image:"img/shopee-mall/item-7.webp",
      link:"https://www.google.com/",
      description:"Giảm đến 50%"
    },
    {
      name:"Hoa lan hồng ngoại",
      image:"img/shopee-mall/item-8.webp",
      link:"https://www.google.com/",
      description:"Quà mọi đơn"
    },
    {
      name:"Ngoại xoi",
      image:"img/shopee-mall/item-9.webp",
      link:"https://www.google.com/",
      description:"Mua là có quà"
    },
    {
      name:"Xôi dừa",
      image:"img/shopee-mall/item-10.webp",
      link:"https://www.google.com/",
      description:"Mua 1 tặng 1"
    },
    {
      name:"Dừa khô tẩm đường",
      image:"img/shopee-mall/item-11.webp",
      link:"https://www.google.com/",
      description:"Deli siêu sale"
    },
    {
      name:"Đường nâu nhập khẩu",
      image:"img/shopee-mall/item-12.webp",
      link:"https://www.google.com/",
      description:"Mua 1 được 6"
    },
    {
      name:"Khẩu súng nhựa",
      image:"img/shopee-mall/item-13.webp",
      link:"https://www.google.com/",
      description:"Mua là có quà"
    },
    {
      name:"Nhựa chất lượng cao",
      image:"img/shopee-mall/item-14.webp",
      link:"https://www.google.com/",
      description:"Giảm đến 20%"
    },
    {
      name:"Cao cao hàn quốc",
      image:"img/shopee-mall/item-15.webp",
      link:"https://www.google.com/",
      description:"Mua là có quà"
    }
  ]
}

const database = {
  banners: function () {
    return banners;
  },

  user: function (userId) {
    return user;
  },

  suggestSearchs: function (userId) {
    return suggestSearchs;
  },

  notifications: function (userId) {
    return notifications;
  },

  searchHistory: function (userId) {
    return searchHistory;
  },

  cart: function (userId) {
    return cart;
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
}
export default database;