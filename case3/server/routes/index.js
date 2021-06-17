import path from "path";
import fs from "fs";
import { registRoute, getFileName } from "./register";

import * as Home from "../../components/pages/Home.svelte";
import * as Fruits from "../../components/pages/Fruits.svelte";

const pathStaticDir = path.resolve(__dirname, "./static");
const files = fs.readdirSync(pathStaticDir);

export const init = (instance) => {
  // Home
  registRoute(instance, "/", Home, getFileName(files, Home.fileName));
  // Fruits
  registRoute(instance, "/fruits", Home, getFileName(files, Home.fileName));


  
  return instance;
};
