import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Rice (5kg)", price: 350 },
  { id: 2, name: "Wheat Flour (10kg)", price: 450 },
  { id: 3, name: "Milk (1L)", price: 60 },
  { id: 4, name: "Sugar (1kg)", price: 45 },
  { id: 5, name: "Cooking Oil (1L)", price: 150 },
];

const whatsappNumber = "919999999999"; // yaha apna WhatsApp number daalo

export default function GroceryStore() {
  const handleOrder = (product) => {
    const message = `Namaste, mujhe ${product.name} (₹${product.price}) order karna hai.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-center">🛒 Rewa Grocery Store</h1>
      <p className="text-center text-gray-600 mb-6">Free Home Delivery in Rewa 🚚</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-lg">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">₹{product.price}</p>
              <Button
                className="mt-4 w-full"
                onClick={() => handleOrder(product)}
              >
                Order on WhatsApp
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
