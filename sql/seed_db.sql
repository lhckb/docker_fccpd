insert into people (id, first_name, last_name)
values (1, 'Luís', 'Cruz'), (2, 'Gabriel', 'Grinspun'), (3, 'Rafael', 'Alves');

insert into cars (id, maker, model, model_year, original_price)
values (1, 'Porsche', '911', 1998, 300000), (2, 'Volkswagen', 'T-Cross', 2024, 135000), (3, 'Volkswagen', 'Polo', 2024, 135000);

insert into sales (id, deal_value, person_id, car_id)
values (1, 290000, 2, 1), (2, 130000, 1, 2), (3, 125000, 3, 3);