drop database if exists shopeeClone;
create database if not exists shopeeClone;
use shopeeClone;
create table if not exists productTypes (
	id integer not null auto_increment,
    parentId integer,
    name varchar(255),
    code varchar(255) unique,
    description varchar(255),
    primary key(id),
    foreign key(parentId) references productTypes(id)
);

create table products(
	id integer not null auto_increment,
    typeId integer,
    sellerId integer,
    brandId integer,
    name varchar(255),
    description varchar(255),
    link varchar(255),
    primary key (id),
    foreign key (typeId) references productTypes(id)
);

create table if not exists users (
	id integer not null auto_increment,
    username varchar(32),
    password varchar(32),
    displayName varchar(32),
    profilePicture varchar(255),
    firstName varchar(32),
    middleName varchar(32),
    lastName varchar(32),
	primary key(id)
);

create table if not exists addresses (
	id integer not null unique auto_increment,
    userId integer not null,
    address varchar(255),
    coordinate point,
    primary key (userId, address),
    foreign key(userId) references users(id)
);

create table if not exists product_variation(
	id integer not null auto_increment,
    productId integer not null,
    price varchar(32),
    image1 varchar(255),
    name1 varchar(255),
    type1 varchar(255),
    image2 varchar(255),
    name2 varchar(255),
    type2 varchar(255),
    primary key (id),
	foreign key (productId) references products(id)
);

create table if not exists banners(
	id integer not null auto_increment,
    image varchar(255),
    link varchar(255),
    dateAdded datetime,
    type varchar(255),
    primary key(id)
);

create table if not exists suggestSearches (
	userId integer not null,
    suggest varchar(255),
    link varchar(255),
    foreign key (userId) references users(id)
);

insert into productTypes(name, code) values 
('Thời Trang Nam','thoi-trang-nam'),
('Thời Trang Nữ','thoi-trang-nu'),
('Điện Thoại & Phụ Kiện','dien-thoai'),
('Mẹ & Bé','me-vaBe'),
('Thiết Bị Điện Tử','thietBi-dien-tu'),
('Nhà Cửa & Đời Sống','nha-cua'),
('Máy Tính & Laptop','may-tinh'),
('Sắc Đẹp','lam-dep'),
('Máy Ảnh & Quay Phim','may-anh'),
('Sức Khỏe','suc-khoe'),
('Đồng Hồ','dong-ho'),
('Giày Dép Nữ','giay-dep-nu'),
('Giày Dép Nam','giay-dep-nam'),
('Túi Ví Nữ','tui-vi-nu'),
('Thiết Bị Điện Gia Dụng','gia-dung'),
('Phụ Kiện & Trang Sức Nữ','phu-kien'),
('Thể Thao & Du Lịch','the-thao'),
('Bách Hóa Online','bach-hoa'),
('Ô Tô & Xe Máy & Xe Đạp','xe-may'),
('Nhà Sách Online','nha-sach'),
('Balo & Túi Ví Nam','balo'),
('Thời Trang Trẻ Em','thoi-trang-tre'),
('Đồ Chơi','do-choi'),
('Giặt Giữ & Chăm Sóc Nhà Cửa','giat-giu'),
('Chăm Sóc Thú Cưng','thu-cung'),
('Voucher & Dịch Vụ','voucher'),
('Dụng Cụ & Thiết Bị Tiện Ích','dung-cu');


insert into products(typeId, name, description) values
(
	(select id from productTypes where name = 'Thời Trang Nam'),
	'Quần Short unisex chất cotton cao cấp,Quần Short nam nữ phong cách thể thao -NANA SHOP.',
	'MÔ TẢ SẢN PHẨM)'
);

insert into banners(image, link, type, dateAdded) values
('/img/banners/main-1.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-2.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-3.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-4.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-5.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-6.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-7.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-8.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-9.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-10.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-11.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-12.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-13.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-14.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-15.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/main-16.webp', '#', 'mainBanner', current_timestamp()),
('/img/banners/sub-1.webp', '#', 'subBanner', current_timestamp()),
('/img/banners/sub-2.webp', '#', 'subBanner', current_timestamp()),
('/img/banners/sub-3.webp', '#', 'subBanner', current_timestamp()),
('/img/banners/sub-4.webp', '#', 'subBanner', current_timestamp());

insert into users(username, password, displayName, profilePicture) values
('username', 'password', 'The cow that is holy', '/img/user-profile/avatar-1.jpeg'),
('zeropassword', 'namelessuser', 'The cat that bite', '/img/user-profile/avatar-2.jpeg');

insert into suggestSearches(userId, link, suggest) values
(1, '#', 'Xi măng đồng tháp'),
(1, '#', 'Măng non nội bài'),
(1, '#', 'Bài tiến lên hàn quốc'),
(1, '#', 'Mecha Girl'),
(1, '#', 'Đồ Công Nghệ Độc Lạ'),
(1, '#', 'Ví Kim Loại'),
(1, '#', 'Kit Nhôm'),
(1, '#', 'Đèn Edison'),
(1, '#', 'Mạch Bàn Phím Bluetooth'),
(1, '#', 'EDC');

select suggest, link from suggestSearches as ss join users as u where ss.userId = u.id and u.username = 'username' and u.password = 'password' limit 7;






















