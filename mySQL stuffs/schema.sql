drop database shopee_clone;
create database if not exists shopee_clone;
use shopee_clone;
create table if not exists product_types (
	id integer not null auto_increment,
    parent_id integer,
    name varchar(255),
    code varchar(255) unique,
    description varchar(255),
    primary key(id),
    foreign key(parent_id) references product_types(id)
);

create table products(
	id integer not null auto_increment,
    type_id integer,
    seller_id integer,
    brand_id integer,
    name varchar(255),
    description varchar(255),
    link varchar(255),
    primary key (id),
    foreign key (type_id) references product_types(id)
);

create table if not exists users (
	id integer not null auto_increment,
    username varchar(32),
    password varchar(32),
    display_name varchar(32),
    profile_picture varchar(255),
    first_name varchar(32),
    middle_name varchar(32),
    last_name varchar(32),
	primary key(id)
);

create table if not exists addresses (
	id integer not null unique auto_increment,
    user_id integer not null,
    address varchar(255),
    coordinate point,
    primary key (user_id, address),
    foreign key(user_id) references users(id)
);

create table if not exists product_variation(
	id integer not null auto_increment,
    product_id integer not null,
    price varchar(32),
    image_1 varchar(255),
    name_1 varchar(255),
    type_1 varchar(255),
    image_2 varchar(255),
    name_2 varchar(255),
    type_2 varchar(255),
    primary key (id),
	foreign key (product_id) references products(id)
);

create table if not exists banners(
	id integer not null auto_increment,
    image varchar(255),
    link varchar(255),
    date_added datetime,
    type varchar(255),
    primary key(id)
);

insert into product_types(name, code) values 
('Thời Trang Nam','thoi-trang-nam'),
('Thời Trang Nữ','thoi-trang-nu'),
('Điện Thoại & Phụ Kiện','dien-thoai'),
('Mẹ & Bé','me-va-be'),
('Thiết Bị Điện Tử','thiet-bi-dien-tu'),
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


insert into products(type_id, name, description) values
(
	(select id from product_types where name = 'Thời Trang Nam'),
	'Quần Short unisex chất cotton cao cấp,Quần Short nam nữ phong cách thể thao -NANA SHOP.',
	'MÔ TẢ SẢN PHẨM)'
);

insert into banners(image, link, type, date_added) values
('/img/banners/main-1.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-2.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-3.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-4.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-5.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-6.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-7.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-8.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-9.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-10.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-11.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-12.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-13.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-14.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-15.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/main-16.webp', '#', 'main-banner', current_timestamp()),
('/img/banners/sub-1.webp', '#', 'sub-banner', current_timestamp()),
('/img/banners/sub-2.webp', '#', 'sub-banner', current_timestamp()),
('/img/banners/sub-3.webp', '#', 'sub-banner', current_timestamp()),
('/img/banners/sub-4.webp', '#', 'sub-banner', current_timestamp());

insert into users(username, password, display_name, profile_picture) values
('username', 'password', 'The cow that is holy', '/img/user-profile/avatar-1.jpeg'),
('zeropassword', 'namelessuser', 'The cat that bite', '/img/user-profile/avatar-2.jpeg');

select display_name, profile_picture from users where username = 'username' and password = 'password';



























