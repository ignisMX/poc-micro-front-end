"use client";
import React, { useState } from "react";
export const ItemsButton = ({ getItems }) => {
  const [items, setItems] = useState({});
  const getAllItems = async () => {
    const response = await getItems();
    setItems(response);
  };

  return (
    <div>
      <h1>This is the items values</h1>
      <button onClick={getAllItems}> Obtener items</button>
    </div>
  );
};
