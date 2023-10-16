"use client";
import { findAllItemsAsPage } from "../../services/api-service";

import React, { lazy, useState, useEffect } from "react";
let RemoteItemsButton = () => null;
if (process.browser) {
  RemoteItemsButton = lazy(() => {
    return import("users/ItemsButton");
  });
}

export default function Items(props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  const itemsProps = {
    getItems: findAllItemsAsPage,
  };
  return <div>{loaded && <RemoteItemsButton {...itemsProps} />}</div>;
}
