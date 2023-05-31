import React from "react";
import { Link } from "react-router-dom";

export const ReturnToIndex = () => {
  return <Link to={"/posts/index"}>Return to Index Page</Link>;
};
