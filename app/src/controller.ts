import { cars, people, sales } from "@prisma/client";
import { prisma } from "./db";

export default class Controller {
    public static async getPerson(id: string): Promise<people> {
      let numId = parseInt(id);

      return await prisma.people.findUnique({
        where: {
          id: numId
        }
      })
    }

    public static async getCar(id: string): Promise<cars> {
      let numId = parseInt(id);

      return await prisma.cars.findUnique({
        where: {
          id: numId
        }
      })
    }

    public static async getSaleWithBuyerAndCar(id: string): Promise<sales> {
      let numId = parseInt(id);

      return await prisma.sales.findUnique({
        where: {
          id: numId
        },
        include: {
          people: true,
          cars: true
        }
      })
    }

    public static async getPersonWithCars(id: string): Promise<people> {
      let numId = parseInt(id);
      
      return await prisma.people.findUnique({
        where: {
          id: numId
        },
        include: {
          sales: {
            include: {
              cars: true
            }
          }
        }
      })
    }

    public static async createPerson({ id, first_name, last_name }) {
      return await prisma.people.create({
        data: {
          id, 
          first_name,
          last_name
        }
      })
    }

    public static async createCar({ id, maker, model, model_year, original_price }) {
      return await prisma.cars.create({
        data: {
          id, 
          maker,
          model,
          model_year,
          original_price
        }
      })
    }

    public static async createSale({ id, deal_value, person_id, car_id }) {
      return await prisma.sales.create({
        data: {
          id, 
          deal_value,
          person_id,
          car_id
        }
      })
    }


    public static async deletePerson(id: string) {
      let numId = parseInt(id);

      return await prisma.people.delete({
        where: {
          id: numId
        }
      })
    }

    public static async deleteCar(id: string) {
      let numId = parseInt(id);

      return await prisma.cars.delete({
        where: {
          id: numId
        }
      })
    }

    public static async deleteSale(id: string) {
      let numId = parseInt(id);

      return await prisma.sales.delete({
        where: {
          id: numId
        }
      })
    }


    public static async updatePerson(id: string, first_name?: string, last_name?: string) {
      let numId = parseInt(id);

      if (first_name != undefined) {
        await prisma.people.update({
          where: {
            id: numId
          },
          data: {
            first_name
          }
        });
      }

      if (last_name != undefined) {
        await prisma.people.update({
          where: {
            id: numId
          },
          data: {
            last_name
          }
        });
      }
      return this.getPerson(id);
    }

    public static async updateCar(id: string, maker?: string, model?: string, model_year?: number, original_price?: number) {
      let numId = parseInt(id);

      if (maker != undefined) {
        await prisma.cars.update({
          where: {
            id: numId
          },
          data: {
            maker
          }
        });
      }

      if (model != undefined) {
        await prisma.cars.update({
          where: {
            id: numId
          },
          data: {
            model
          }
        });
      }

      if (model_year != undefined) {
        await prisma.cars.update({
          where: {
            id: numId
          },
          data: {
            model_year
          }
        });
      }

      if (original_price != undefined) {
        await prisma.cars.update({
          where: {
            id: numId
          },
          data: {
            original_price
          }
        });
      }

        return this.getCar(id);
      }

      public static async updateSale(id: string, deal_value?: number) {
        let numId = parseInt(id);
  
        if (deal_value != undefined) {
          await prisma.sales.update({
            where: {
              id: numId
            },
            data: {
              deal_value
            }
          });
        }
  
          return this.getSaleWithBuyerAndCar(id);
      }
}