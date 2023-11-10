import { Express } from "express";
import { connection } from "./db";

export default class Router {

    public mapRoutes(app: Express) {

        app.get('/', (req, res) => {
            res.json({ "message": 'Hello World!' });
        });

        app.get('/users/:id', (req, res) => {
            let id = req.params["id"];

            connection.connect(err => {
                if (err) {
                    console.log(err);
                    return;
                }

                connection.query(`SELECT * from people WHERE id = ${id}`, (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    console.log(results);
                    res.json({ "data": results });
                });
    
                connection.end(err => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                });
            });
        });

        app.get('/sales/:id', (req, res) => {
            let id = req.params["id"];

            connection.connect(err => {
                if (err) {
                    console.log(err);
                    return;
                }

                connection.query(`

                    SELECT sales.deal_value, people.first_name, people.last_name
                    FROM sales
                    LEFT JOIN people ON sales.person_id = people.id
                    WHERE sales.id = ${id};
                
                `, (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    console.log(results);
                    res.json({ "data": results });
                });
    
                connection.end(err => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                });
            });
        });
    }
}