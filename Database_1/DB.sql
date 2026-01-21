 use grocerystore; 
 select database(); 

CREATE TABLE IF NOT EXISTS Product(
product_id int auto_increment primary key, 
product_name varchar(50) not null, 
price decimal(10, 2), 
quantity int, 
created_at timestamp default current_timestamp
);

INSERT INTO Product (product_name, price, quantity)
VALUES ('Soap', 35.50, 100), 
('Shampu', 1, 50), 



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



CREATE TABLE IF NOT EXISTS user(
user_id int auto_increment primary key, 
user_name varchar(50) not null
);

DROP TABLE item;


SHOW TABLES;
SELECT * FROM Product;
SELECT * FROM item;
SELECT * FROM user;