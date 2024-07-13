import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {QueryClient,
  QueryClientProvider,
  } from '@tanstack/react-query'
  import {
    RouterProvider,
  } from "react-router-dom";
  import router from "./router"
  import { ChakraBaseProvider } from '@chakra-ui/react'
  import theme from './theme/theme'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
        <ChakraBaseProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
        </ChakraBaseProvider>
  </React.StrictMode>,
);
