import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import route from "./routes/index.route.js"
import db from "./app/config/db/index.js";
db.connect();

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'resources','views'));
app.set('view engine', 'pug');

route(app);

app.listen(port, () => console.log(`Listening is on port http://localhost:${port}`));
