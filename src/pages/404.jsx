import React from "react";
import SEO from "../components/common/SEO";

const NotFoundPage = ({ location }) => (
  <>
    <SEO
      title="Page Not Found"
      description="Page Not Found."
      location={location.href}
    />
    <h1>Not Found Page</h1>
  </>
);

export default NotFoundPage;
