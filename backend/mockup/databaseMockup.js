import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "shopeeClone"
})

const date = new Date();

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

  flashSale: function (data) {
    const c1 = connection.query(`select start, end from flashSales where start <= curdate() and curdate() <= end;`);
    const c2 = connection.query(`select p.id, p.name, concat('product/', p.id) as link, p.image, min(v.price) as price, i.percentDiscount as discount, i.total, i.remain, i.stamp 
                                  from products as p 
                                  join flashSaleItems as i on  p.id = i.productId 
                                  join flashSales as fl on fl.id = i.flashSaleId
                                  join productVariations as v on p.id = v.productId
                                  where start = start <= curdate() and curdate() <= end
                                  group by p.id, p.name, link, p.image, discount, i.total, i.remain, i.stamp;`);

    return Promise.all([c1, c2])
      .then(data => {
        const [[[result1,], name1], [result2, name2]] = data;
        return { ...result1, items: result2 };
      })
  },

  voucherBanners: function () {
    return connection.query(`select name, image, link1, link2, link3 from voucherBanners where start <= curdate() and curdate() <= end order by start desc, end asc limit 1;`)
      .then(([result,]) => {
        return result[0];
      });
  },

  mallBanners: function () {
    return connection.query(`select name, image, link from mallBanners where start <= curdate() and curdate() <= end order by start desc, end asc limit 1;`)
      .then(([result,]) => {
        return result[0];
      });
  },

  mallPromotions: function () {
    return connection.query(`select concat('/vendor/', vendors.id) as link, image, name, slogan
                              from mallPromotions as mp
                              join vendors on mp.vendorId = vendors.id and vendors.isMall = true and start <= curdate() and curdate() <= end
                              limit 13;`)
      .then(([result,]) => {
        return result;
      });
  },

  topSearches: function () {
    return connection.query(`select name, image, searches, sold, concat('selection/', id) as link from productTypes order by searches desc limit 16;`)
      .then(([result,]) => {
        return result;
      });
  },

  todaySuggestions: function () {
    return todaySuggestions;
  },

  productTypes: function () {
    return connection.query(`select name, image, concat('productType/', id) as link from productTypes where parentId is null;`)
      .then(([result,]) => {
        return result;
      });
  }
}
export default database;