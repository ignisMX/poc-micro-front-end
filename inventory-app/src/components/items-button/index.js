"use client";
import { useState } from "react";
export default function Dashboard({ getItems }) {
  const [items, setItems] = useState({});
  const getAllItems = async () => {
    const response = await getItems();
    setItems(response);
  };

  return (
    <div>
      <h1>This is the items values</h1>
      {items && JSON.stringify(items)} <br />
      <button onClick={getAllItems}> Obtener items</button>
    </div>
  );
}
