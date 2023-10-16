import dynamic from "next/dynamic";
const ItemsButton = dynamic(() => import("users/ItemsButton"));
import { findAllItemsAsPage } from "../../services/api-service";

import React, { lazy, useState } from "react";
let RemoteTitle = () => null;
if (process.browser) {
  RemoteTitle = lazy(
    () => {
      return import("users/ItemsButton");
    },
    { ssr: false }
  );
}

export default function Items(props) {
  const [enable, setEnable] = useState(false);
  const itemsProps = {
    getItems: findAllItemsAsPage,
  };
  return (
    <div>
      <button
        onClick={() => {
          setEnable(true);
        }}
      >
        Habilitar
      </button>
      {/* <ItemsButton {...itemsProps} /> */}
      {enable && <ItemsButton {...itemsProps} />}
    </div>
  );
}
