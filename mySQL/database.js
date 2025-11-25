import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import { encryptPassword } from "../utils/utils.js";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "shopeeClone"
})

const database = {
  banners: async function (main, sub) {
    const [mainBanners,] = await connection.query(`select image, link from banners where type = 'mainBanner' order by dateAdded limit ${main};`);
    const [subBanners,] = await connection.query(`select image, link from banners where type = 'subBanner' order by dateAdded limit ${sub};`);
    return { mainBanners, subBanners }
  },

  userInfo: async function (data) {
    const [rows, fields] = await connection.query(`select displayName, profilePicture from users
                                                  join userSessions as us on users.id = us.userId
                                                  where us.session = '${data.sessionCode}';`)
    return rows[0];
  },

  suggestSearchs: async function () {
    const [rows, fields] = await connection.query(`select suggest, link
                                                  from suggestSearches
                                                  limit 8;`)
    return rows;
  },

  notifications: async function (data) {
    const [rows, fields] = await connection.query(`select title, image, description 
                                                  from notifications as n
                                                  join userSessions as us on us.userId = n.userId
                                                  where session = '${data.sessionCode}';`)
    return rows;
  },

  searchHistories: async function (data) {
    const [rows, fields] = await connection.query(`select distinct keyword, max(time) as time from searchHistories as sh
                                                  join userSessions as us on sh.userId = us.userId
                                                  where session = '${data.sessionCode}'
                                                  group by keyword
                                                  order by time desc limit 9;`);
    return rows;
  },

  cart: async function (data) {
    const [rows, fields] = await connection.query(`select users.username, p.name, p.image, concat('product/',p.id) as link, p.variation1, pv.value1, p.variation2, pv.value2, p.variation3, pv.value3, pv.price, ci.amount, (pv.price * ci.amount) as total 
                                                  from cartItems as ci 
                                                  join users on ci.userId = users.id 
                                                  join productVariations as pv on ci.productVariationId = pv.id 
                                                  join products as p on pv.productId = p.id 
                                                  where username = '${data.username}' and password = '${data.password}';`)
    return rows;
  },

  flashSale: async function (data) {
    const [[times,], fields1] = await connection.query(`select start, end from flashSales where start <= curdate() and curdate() <= end;`);
    const [items, fileds2] = await connection.query(`select p.id, p.name, concat('product/', p.id) as link, p.image, min(v.price) as price, i.percentDiscount as discount, i.total, i.remain, i.stamp 
                                                    from products as p 
                                                    join flashSaleItems as i on  p.id = i.productId 
                                                    join flashSales as fl on fl.id = i.flashSaleId
                                                    join productVariations as v on p.id = v.productId
                                                    where start = start <= curdate() and curdate() <= end
                                                    group by p.id, p.name, link, p.image, discount, i.total, i.remain, i.stamp;`);
    return { ...times, items };
  },

  voucherBanners: async function () {
    const [rows, fields] = await connection.query(`select name, image, link1, link2, link3 
                                                  from voucherBanners 
                                                  where start <= curdate() and curdate() <= end 
                                                  order by start desc, end asc limit 1;`);
    return rows[0];
  },

  mallBanners: async function () {
    const [rows, fields] = await connection.query(`select name, image, link from mallBanners where start <= curdate() and curdate() <= end order by start desc, end asc limit 1;`);
    return rows[0];
  },

  mallPromotions: async function () {
    const [rows, fields] = await connection.query(`select concat('/vendor/', vendors.id) as link, image, name, slogan
                                                  from mallPromotions as mp
                                                  join vendors on mp.vendorId = vendors.id and vendors.isMall = true and start <= curdate() and curdate() <= end
                                                  limit 13;`);
    return rows;
  },

  topSearches: async function () {
    const [rows, fields] = await connection.query(`select name, image, searches, sold, concat('selection/', id) as link from productTypes order by searches desc limit 16;`);
    return rows;
  },

  todaySuggestions: async function () {
    const [result,] = await connection.query(`select p.id, p.image, p.name, concat('/product/', p.id) as link, concat('/productType/', t.id) as similarItems, l.text, min(price) as price, sum(v.sold) as sold, l.text, l.style
                                        from products as p
                                        join productVariations as v on v.productId = p.id 
                                        join productTypes as t on p.typeId = t.id
                                        left join applyLabel as al on al.productId = p.id
                                        left join labels as l on l.id = al.labelId
                                        group by p.id, p.image, p.name, link, similarItems, l.text, l.style
                                        order by rand() limit 24;`);
    for (const item of result) {
      [[item.overlays,],] = await connection.query(`select v2.image, v2.percentDiscount as discount from products as p2
                                                join applyVoucher as av2 on p2.id = av2.productId 
                                                join discountVouchers as v2 on v2.id = av2.voucherId
                                                where p2.id = ${item.id}
                                                order by v2.percentDiscount desc limit 1;`);

      [item.tags,] = await connection.query(`select text, style from products as p
                                                join applyTag as at on at.productId = p.id
                                                join tags as t on t.id = at.tagId
                                                where p.id = ${item.id};`);
    }
    return result;
  },

  productTypes: async function () {
    const [rows, fields] = await connection.query(`select name, image, concat('productType/', id) as link from productTypes where parentId is null;`);
    return rows;
  },

  signup: async function (data) {
    const hashedPassword = await encryptPassword(data.password);
    const result = await connection.query(`insert into users(username, hashedPassword, displayName, profilePicture) values 
                                          ('${data.username}', '${hashedPassword}', '${data.displayname ? data.displayname : data.username}', '/img/user-profile/blank.jpg')`);
    return { username: data.username, password: hashedPassword };
  },

  getUser: async function (data) {
    const [rows, fields] = await connection.query(`select username, hashedPassword, displayName, profilePicture from users where username = '${data.username}';`);
    return rows.length ? rows[0] : null;
  },

  addUserSession: async function (data) {
    const [rows, fields] = await connection.query(`insert into userSessions(userId, session) values 
                                                    ((select id from users where username = '${data.username}'), '${data.sessionCode}') 
                                                    ON DUPLICATE KEY UPDATE
                                                    session = '${data.sessionCode}';`)
    return rows.affectedRows;
  },

  endUserSession: async function (data) {
    const [rows, fields] = await connection.query(`delete from userSessions 
                                                  where session = '${data.sessionCode}';`)
    return rows.affectedRows;
  },

  saveSearchHistory: async function (data) {
    if (!data.sessionCode) {
      return null;
    }

    const [rows, fields] = await connection.query(`insert into searchHistories(userId, keyword) values
                                                  ((select userId from userSessions where session = '${data.sessionCode}'), '${data.keyword}');`)
    return rows.affectedRows;
  },

  searchProducts: async function (data) {
    const [rows, fields] = await connection.query(`select * from products where name like '%${data.keyword}%';`);
    return rows;
  },

  searchAd: async function (data) {
    const [rows, fields] = await connection.query(`select keyword, link, image, start 
                                                  from searchAds 
                                                  where start < curdate() 
                                                  order by start desc limit 1;`);
    return rows[0];
  },

  product: async function (id) {

    const [images,] = await connection.query(`select image from productImages
                                      where productId = ${id}
                                      union
                                      select image from products
                                      where id = ${id}
                                      union
                                      select image from productVariations
                                      where productId = ${id}
                                      order by image;`);
    const [vouchers,] = await connection.query(`select dv.name, percentDiscount from applyVoucher as av
                                                join discountVouchers as dv on dv.id = av.voucherId
                                                join products as p on p.id = av.productId
                                                where p.id = ${id};`)
    const [[product,],] = await connection.query(`select name, description, variation1, variation2, variation3
                                                  from products as p
                                                  join productVariations pv on pv.productId = p.id 
                                                  where p.id = ${id};`);
    const [variations,] = await connection.query(`select price, pv.image, value1, value2, value3, sold, instock
                                                    from products as p
                                                    join productVariations pv on pv.productId = p.id 
                                                    where p.id = ${id};`);
    const result = {
      ...product,
      productImages: images.map(row => row.image).filter(item=>item),
      vouchers: vouchers,
      reviewScore: null, // implement later
      reviewCount: null,  // implement later
      variations
    };
    return result;
  }
}
export default database;