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