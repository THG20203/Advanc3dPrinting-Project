import React from "react";
import { Outlet, useOutlet } from "react-router-dom";

const NoChildProcessContent = () => (
  <div>
    <h1>Hello</h1>
    <h2>This is the second header</h2>
    <p>More content here...</p>
  </div>
);

const ProcessPage = () => {
  const hasChild = useOutlet();

  return (
    <div className="container">
      <div className="process__container">
        {!hasChild && <NoChildProcessContent />}
        <Outlet />
      </div>
    </div>
  );
};

export default ProcessPage;
