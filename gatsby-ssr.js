import React from "react";
import Layout from "./src/components/layout/Layout";
import { OrderProvider } from "./src/hooks/context/OrderContext";

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <OrderProvider>{element}</OrderProvider>
);
