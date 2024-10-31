"use client"; // Mark this file as a client component

import { SetStateAction, useState } from "react"; // Import useState for state management
import Image from "next/image";
import { addTile, addTile2 } from "./Components/tiles.js"; // Adjust path as necessary
import { tipTotal, tip } from "./Components/tip.js"; // Adjust path as necessary

function addRows() {
  let rows = [];
  for (let i = 0; i < 7; i++) {
    if (i % 2 === 0) {
      let row = <div className="row flex items-center" key={i}>{addTile()}</div>;
      rows.push(row);
    } else {
      let row = <div className="row flex items-center" key={i}>{addTile2()}</div>;
      rows.push(row);
    }
  }
  return rows;
}

export default function Home() {
  const [inputValue, setInputValue] = useState(""); // State to store input value
  const [tipAmount, setTipAmount] = useState(0); // State to store tip amount
  const [totalWithTip, setTotalWithTip] = useState(0); // State to store total amount with tip

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(e.target.value); // Update input value state
  };

  const handleTipCalculation = (percentage: number) => {
    const total = parseFloat(inputValue) || 0; // Parse input value
    const totalAmountWithTip = tipTotal(total, percentage); // Use imported tipTotal function
    setTotalWithTip(totalAmountWithTip); // Update total with tip state
    const Tipamount = tip(total, percentage); // Use imported totalAmount function
    setTipAmount(Tipamount); // Update tip amount state
  };

  return (
    <div className="page flex flex-col items-center justify-center h-dvh">
      <div className="flex flex-col">
        <input
          type="text"
          className="text-black border p-2 mb-4"
          placeholder="total"
          value={inputValue}
          onChange={handleInputChange} // Handle input change
        />
        <div className="flex gap-10">
          <button
            className="bg-gray-300 text-black p-2 rounded"
            onClick={() => handleTipCalculation(10)} // OnClick for 10% tip
          >
            Tip 10%
          </button>
          <button
            className="bg-gray-300 text-black p-2 rounded"
            onClick={() => handleTipCalculation(15)} // OnClick for 15% tip
          >
            Tip 15%
          </button>
          <button
            className="bg-gray-300 text-black p-2 rounded"
            onClick={() => handleTipCalculation(20)} // OnClick for 20% tip
          >
            Tip 20%
          </button>
        </div>
        <div className="tip">Tip Amount: ${tipAmount.toFixed(2)}</div> {/* Display Tip Amount */}
        <div className="total">Total Amount: ${totalWithTip.toFixed(2)}</div> {/* Display Total Amount */}
      </div>
    </div>
  );
}
