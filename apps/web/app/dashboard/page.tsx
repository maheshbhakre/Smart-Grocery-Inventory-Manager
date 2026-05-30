"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Milk",
      category: "Dairy",
      quantity: 2,
    },
    {
      id: 2,
      name: "Rice",
      category: "Grains",
      quantity: 5,
    },
  ]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const addItem = () => {
    if (!name || !category || !quantity) return;

    setItems([
      ...items,
      {
        id: Date.now(),
        name,
        category,
        quantity: Number(quantity),
      },
    ]);

    setName("");
    setCategory("");
    setQuantity("");
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Smart Grocery Inventory Manager
      </h1>

      <div className="border p-4 mb-6">
        <h2 className="text-xl font-bold mb-3">
          Add Grocery Item
        </h2>

        <input
          className="border p-2 mr-2"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 mr-2"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="border p-2 mr-2"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button
          onClick={addItem}
          className="border px-4 py-2"
        >
          Add
        </button>
      </div>

      <div className="border p-4">
        <h2 className="text-xl font-bold mb-4">
          Inventory List
        </h2>

        {items.map((item) => (
          <div
            key={item.id}
            className="border p-3 mb-2"
          >
            <p>
              <b>Name:</b> {item.name}
            </p>

            <p>
              <b>Category:</b> {item.category}
            </p>

            <p>
              <b>Quantity:</b> {item.quantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}