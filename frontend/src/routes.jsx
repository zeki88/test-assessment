import App from "./App";
import CountryInfoPage from "./CountryInfoPage";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "country/:code",
    element: <CountryInfoPage code={":code"}/>,
  },
];

export default routes;