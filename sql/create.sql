use db;

CREATE TABLE people (
	id int primary key,
	first_name varchar(50),
	last_name varchar(50)
);

CREATE TABLE cars (
	id int primary key,
	maker varchar(50),
	model varchar(50),
	model_year int,
	original_price double precision
);

CREATE TABLE sales (
	id int primary key,
	deal_value double precision,
	person_id int,
	car_id int,
	foreign key (person_id) references people(id),
	foreign key (car_id) references cars(id)
);

INSERT INTO people (id, first_name, last_name)
VALUES (1, "Luís", "Cruz"), (2, "Gabriel", "Grinspun"), (3, "Rafael", "Alves");

INSERT INTO cars (id, maker, model, model_year, original_price)
VALUES (1, "Porsche", "911", 1998, 300000), (2, "Volkswagen", "T-Cross", 2024, 135000), (3, "Volkswagen", "Polo", 2024, 135000);

INSERT INTO sales (id, deal_value, person_id, car_id)
VALUES (1, 290000, 2, 1), (2, 130000, 1, 2), (3, 125000, 3, 3);
