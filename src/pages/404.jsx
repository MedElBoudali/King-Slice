import React from "react";
import Seo from "../components/common/Seo";

const NotFoundPage = ({ location }) => (
  <>
    <Seo
      title="Page Not Found"
      description="Page Not Found."
      location={location.href}
    />
    <h1>Not Found Page</h1>
  </>
);

export default NotFoundPage;
