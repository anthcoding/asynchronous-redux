//React
import ReactDOM from "react-dom";
//Styles
import "./index.css";
//Components
import App from "./App";
//Redux
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
