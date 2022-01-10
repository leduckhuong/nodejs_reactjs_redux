import express from "express";
import site from "../../app/controllers/Site.Controller.js";
const route = express.Router();
route.get('/', site.index);
export default route;