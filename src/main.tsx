import { createRoot } from "react-dom/client";
import "./style/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { ServiceItem } from "./page/ServiceItem";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { AppErrorBoundary } from "@/components/AppErrorBoundary";
import { logClientError } from "@/lib/diagnostics";

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

const serverUrl = import.meta.env.VITE_SERVER_URL as string | undefined;
const graphqlUri = `${serverUrl}/graphql`;

if (!serverUrl) {
  logClientError(new Error("VITE_SERVER_URL is not defined"), {
    source: "bootstrap",
  });
}

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  graphQLErrors?.forEach((graphqlError) => {
    logClientError(graphqlError, {
      source: "apollo-graphql",
      operationName: operation.operationName,
      graphqlUri,
    });
  });

  if (networkError) {
    logClientError(networkError, {
      source: "apollo-network",
      operationName: operation.operationName,
      graphqlUri,
    });
  }
});

const client = new ApolloClient({
  link: from([
    errorLink,
    new HttpLink({
      uri: graphqlUri,
    }),
  ]),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <AppErrorBoundary>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </AppErrorBoundary>,
);
