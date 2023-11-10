import React from "react";
import ReactDOMClient from "react-dom/client";
import { CircleofaOrgBy } from "./screens/CircleofaOrgBy";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CircleofaOrgBy />);
