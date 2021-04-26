import React from "react";
import Seo from "../components/common/Seo";

const Order = ({ location }) => (
  <>
    <Seo
      title="Order Pizza!"
      description="Order Pizza."
      location={location.href}
    />
    <form>
      <fieldset>
        <legend>Your Info</legend>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
      </fieldset>
      <fieldset>
        <legend>MENU</legend>
      </fieldset>
      <fieldset>
        <legend>ORDER</legend>
      </fieldset>
    </form>
  </>
);

export default Order;
