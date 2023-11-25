import { Express } from "express";
import Controller from "./controller";

export default class Router {

    public mapRoutes(app: Express) {

        // READS
        app.get('/people/:id', async (req, res) => {
            let id = req.params["id"];

            let person = await Controller.getPerson(id);
            res.json({ data: person });
        });

        app.get('/cars/:id', async (req, res) => {
          let id = req.params["id"];

          let car = await Controller.getCar(id);
          res.json({ data: car });
        });

        app.get('/people/:id/sales', async (req, res) => {
          let id = req.params["id"];

          let userAndCars = await Controller.getPersonWithCars(id);
          res.json({ data: userAndCars });
      });

      app.get('/sales/:id', async (req, res) => {
          let id = req.params["id"];

          let sale = await Controller.getSaleWithBuyerAndCar(id);
          res.json({ data: sale });
      });

      // CREATES
      app.post('/people', async (req, res) => {
          let body = req.body;

          let created = await Controller.createPerson(body);
          res.json({ data: created });
      });

      app.post('/cars', async (req, res) => {
        let body = req.body;

        let created = await Controller.createCar(body);
        res.json({ data: created });
      });

      app.post('/sales', async (req, res) => {
        let body = req.body;

        let created = await Controller.createSale(body);
        res.json({ data: created });
    });

    // DELETES
    app.delete('/people/:id', async (req, res) => {
      let id = req.params["id"];

      let deleted = await Controller.deletePerson(id);
      res.json({ data: deleted });
    });

    app.delete('/cars/:id', async (req, res) => {
      let id = req.params["id"];

      let deleted = await Controller.deleteCar(id);
      res.json({ data: deleted });
    });

    app.delete('/sales/:id', async (req, res) => {
      let id = req.params["id"];

      let deleted = await Controller.deleteSale(id);
      res.json({ data: deleted });
    });

    // UPDATES
    app.put('/people/:id', async (req, res) => {
      let id = req.params["id"];
      let body = req.body

      let updated = await Controller.updatePerson(id, body.first_name, body.last_name);
      res.json({ data: updated });
    });

    app.put('/cars/:id', async (req, res) => {
      let id = req.params["id"];
      let body = req.body

      let updated = await Controller.updateCar(id, body.maker, body.model, body.model_year, body.original_price);
      res.json({ data: updated });
    });

    app.put('/sales/:id', async (req, res) => {
      let id = req.params["id"];
      let body = req.body

      let updated = await Controller.updateSale(id, body.deal_value);
      res.json({ data: updated });
    });
  }
}