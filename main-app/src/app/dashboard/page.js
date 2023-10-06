"use client";

import { useState } from "react";
import { findAllItemsAsPage } from "../../services/api-service";
export default function Dashboard({}) {
  const [items, setItems] = useState({});
  const getAllItems = async () => {
    const response = await findAllItemsAsPage();
    setItems(response);
  };

  return (
    <div>
      {items && JSON.stringify(items)}
      <button onClick={getAllItems}> Obtener items</button>
    </div>
  );
}
