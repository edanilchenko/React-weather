import React from "react"
import { createRoot } from "react-dom/client"

import Wheather from "./Wheather";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Wheather/>
);