import { createContext } from "react";
import Header from "./components/Header";
import { useState } from "react";
import { useRef } from "react";
export const CartContext = createContext();
export default function App() {
  const [itemCount, setItemCount] = useState(0);
  const numberRef = useRef(0);
  return (
    <CartContext.Provider value={itemCount}>
      <Header />
      <button
        onClick={() => {
          alert(`Angka ${numberRef.current}`);
          numberRef.current++;
        }}
      >
        Tampilkan Angka
      </button>
      <button onClick={() => setItemCount(itemCount + 1)}>+</button>
    </CartContext.Provider>
  );
}
