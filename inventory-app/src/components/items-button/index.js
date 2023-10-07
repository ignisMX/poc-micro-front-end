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
      {items && JSON.stringify(items)} <br />
      <button onClick={getAllItems}> Obtener items</button>
    </div>
  );
}
