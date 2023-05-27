import * as ReactDOM from "react-dom/client";
import App from "./app";
import { Provider } from "react-redux";
import { store } from "./store";
import { SnackbarProvider } from "notistack";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <SnackbarProvider
      preventDuplicate
      autoHideDuration={1000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </Provider>
);
