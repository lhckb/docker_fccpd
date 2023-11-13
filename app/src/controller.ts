import { connection } from "./db";

export default class Controller {
    public static returnResultFromQuery(query, res) {
        connection.connect(err => {
            if (err) {
                console.log(err);
                return;
            }
    
            connection.query(query, (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return;
                }
    
                console.log(results);
                res.json({ data: results });
                
                // connection.end(err => {
                //     if (err) {
                //         console.log(err);
                //         return;
                //     }
                // });
            });
    
        });
    }
}