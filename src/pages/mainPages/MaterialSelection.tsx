import React from "react";
import { Outlet, useOutlet } from "react-router-dom";

const NoChildMaterialSelectionContent = () => (
  <div>
    <h1>Hello</h1>
    <h2>This is the Material Selection header</h2>
    <p>More content here...</p>
  </div>
);

const MaterialSelectionPage = () => {
  const hasChild = useOutlet();

  return (
    <div className="container">
      <div className="material-selection__container">
        {!hasChild && <NoChildMaterialSelectionContent />}
        <Outlet />
      </div>
    </div>
  );
};

export default MaterialSelectionPage;
