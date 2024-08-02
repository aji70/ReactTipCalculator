import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;
  function handleReset() {
    setBill("");
    setPercentage1("");
    setPercentage2("");
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you Like the service
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your Friend Like the service
      </SelectPercentage>
      <Output bill={bill} tip={tip} />
      <Reset reset={handleReset} />
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="How much was the bill?"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was Okay(5%)</option>
        <option value={10}>It was Good (10%)</option>
        <option value={20}>Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}
function Reset({ reset }) {
  return <button onClick={reset}>Reset</button>;
}
