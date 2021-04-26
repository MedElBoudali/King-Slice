import React from "react";
import Seo from "../components/common/Seo";

const Order = ({ location }) => (
  <>
    <Seo
      title="Order Pizza!"
      description="Order Pizza."
      location={location.href}
    />
    <h1>Hello! i'm Order page</h1>
  </>
);

export default Order;
