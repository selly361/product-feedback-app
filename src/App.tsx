import { AddFeedBackPage, EditFeedBackPage, HomePage, PageNotFound, ProductPage, RoadMapPage } from "pages";
import { Route, Routes } from "react-router-dom";

import { Fragment } from "react";
import { GlobalStyle } from "global";

function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddFeedBackPage />} />
        <Route path="/roadmap" element={<RoadMapPage />} />
        <Route path="/edit/:id" element={<EditFeedBackPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;