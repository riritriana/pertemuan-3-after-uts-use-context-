import { useContext } from "react";
import { CartContext } from "../App";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
  const itemCount = useContext(CartContext);
  return (
    <div className="relative flex items-center">
      <ShoppingCart />
      <div className="absolute top-0 right-2 bg-slate-50 text-red-600 rounded-3xl">
        {itemCount}
      </div>
    </div>
  );
}
