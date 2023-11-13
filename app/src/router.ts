import { Express } from "express";
import Controller from "./controller";

export default class Router {

    public mapRoutes(app: Express) {

        app.get('/users/:id', (req, res) => {
            let id = req.params["id"];

            let query = `SELECT * from people WHERE id = ${id}`;

            Controller.returnResultFromQuery(query, res);
        });

        app.get('/users/:id/cars', (req, res) => {
            let id = req.params["id"];

            let query = `
                SELECT people.first_name, people.last_name, cars.maker, cars.model
                FROM people
                JOIN sales ON people.id = sales.person_id
                JOIN cars ON sales.car_id = cars.id
                WHERE people.id = ${id} 
            `;

            Controller.returnResultFromQuery(query, res);
        });

        app.get('/sales/:id/buyer', (req, res) => {
            let id = req.params["id"];

            let query = `
                SELECT sales.deal_value, people.first_name, people.last_name
                FROM sales
                LEFT JOIN people ON sales.person_id = people.id
                WHERE sales.id = ${id};
            `;

            Controller.returnResultFromQuery(query, res);
        });
    }
}