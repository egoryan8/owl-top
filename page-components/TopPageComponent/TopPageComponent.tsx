import React from "react";
import {TopPageComponentProps} from "./TopPageComponent.props";

const TopPageComponent = ({ page, firstCategory, products }: TopPageComponentProps): JSX.Element => {
  return (
    <>
      {products && products.length}
    </>
  );
};

export default TopPageComponent;