import "./style/index.css";
import { ClientApp } from "entx/client";
import { notNil } from "src/logic/Utils.ts";
import pages from "./generated/pages.ts";

const app = new ClientApp({
  onServerSideProps: (location, props) => {},
  rootEl: notNil(document.getElementById("root")),
  pages,
});

// TODO: handle error
app.hydrate().catch(console.error);
