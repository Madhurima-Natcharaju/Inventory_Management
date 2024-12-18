import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./styles/global.css";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
