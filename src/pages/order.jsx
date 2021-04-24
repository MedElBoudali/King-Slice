import React from "react";
import SEO from "../components/common/SEO";

const Order = ({ location }) => (
  <>
    <SEO
      title="Order Pizza!"
      description="Order Pizza."
      location={location.href}
    />
    <h1>Hello! i'm Order page</h1>
  </>
);

export default Order;
