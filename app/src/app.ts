import express from 'express';
import Router from './router';

const app = express();
app.use(express.json());
const PORT = 3000;
const router = new Router();

router.mapRoutes(app);

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
