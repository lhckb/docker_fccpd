use db;

CREATE TABLE people (
	id int primary key AUTO_INCREMENT,
	first_name varchar(50),
	last_name varchar(50)
);

CREATE TABLE cars (
	id int primary key AUTO_INCREMENT,
	maker varchar(50),
	model varchar(50),
	model_year int,
	original_price double precision
);

CREATE TABLE sales (
	id int primary key AUTO_INCREMENT,
	deal_value double precision,
	person_id int,
	car_id int,
	foreign key (person_id) references people(id),
	foreign key (car_id) references cars(id)
);

insert into people (id, first_name, last_name)
values 
      (1, 'Chuck', 'Bass'), 
      (2, 'Daniel', 'Humphrey'), 
      (3, 'Rufus', 'Humphrey'),
      (4, 'Blair', 'Waldorf'), 
      (5, 'Serena', 'van der Woodsen'), 
      (6, 'Lily', 'van der Woodsen');

insert into cars (id, maker, model, model_year, original_price)
values 
      (1, 'Porsche', '911', 1998, 300000), 
      (2, 'Volkswagen', 'T-Cross', 2024, 135000), 
      (3, 'Volkswagen', 'Polo', 2024, 135000),
      (4, 'Bentley', 'Flying Spur', 2022, 780000), 
      (5, 'Lamborghini', 'Huracán', 2024, 1000000), 
      (6, 'Ferrari', 'Portofino', 2023, 800000);

insert into sales (id, deal_value, person_id, car_id)
values 
      (1, 290000, 1, 1), 
      (2, 130000, 2, 2), 
      (3, 125000, 3, 3),
      (4, 290000, 4, 4), 
      (5, 130000, 5, 5), 
      (6, 125000, 6, 6);
