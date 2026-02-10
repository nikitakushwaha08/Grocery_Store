 use grocerystore; 
 select database(); 

CREATE TABLE IF NOT EXISTS Product(
product_id int auto_increment primary key, 
product_name varchar(50) not null, 
price decimal(20, 2), 
quantity int, 
created_at timestamp default current_timestamp
);

INSERT INTO Product(product_name, price, quantity)
VALUES ('Soap', 35.50, 100), 
('Shampu', 1, 50), 
('Chips', 10, 50), 
('Chocolate', 50, 20);

DROP TABLE Product;
SELECT * FROM Product;


CREATE TABLE IF NOT EXISTS item(
item_id int auto_increment primary key, 
item_name varchar(50) not null,
price DECIMAL(10,2),
quantity INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO item (item_name, price, quantity)
VALUES
('Pencil', 5.00, 200),
('Notebook', 50.00, 80),
('Eraser', 3.00, 150);

DROP TABLE item;
SELECT * FROM item;

CREATE TABLE IF NOT EXISTS user(
user_id int auto_increment primary key, 
user_name varchar(50) not null,
phone VARCHAR(10),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user(user_name, phone) 
VALUES ('Nikita', 3474347537);


DROP TABLE user;
SELECT * FROM user;

SHOW TABLES;