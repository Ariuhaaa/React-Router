import React from "react";
import { Outlet } from "react-router-dom";

export default function Person() {
  return (
    <>
      <div>Person</div>
      <Outlet />
    </>
  );
}
