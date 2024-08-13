import { createRoot } from "react-dom/client";
import "./style/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { ServiceItem } from "./page/ServiceItem";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/service/:id",
    element: <ServiceItem />,
  },
]);

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_SERVER_URL}/graphql`, // Убедитесь, что эта переменная корректно настроена
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>,
);
