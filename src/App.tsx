import { AddFeedBackPage, EditFeedBackPage, HomePage, ProductPage, RoadMapPage } from "pages";
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
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;