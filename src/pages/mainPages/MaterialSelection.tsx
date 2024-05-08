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
  /* useOutlet hook from react-router-dom to check if there are 
  any active child routes. hasChild will contain the child component 
  if there are any active child routes, otherwise, it will be null. */
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

/* !hasChild && <NoChildMaterialSelectionContent />: 
This line conditionally renders the NoChildMaterialSelectionContent 
component if there are no active child routes (hasChild is null). */
