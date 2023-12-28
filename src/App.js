import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./i18n";
function App() {
  const content = useRoutes(routes);
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | BORIGA BARAKA" defaultTitle="BORIGA BARAKA" />
      {content}
    </HelmetProvider>
  );
}

export default App;
