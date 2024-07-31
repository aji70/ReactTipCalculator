import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [ftip, fSetTip] = useState("");
  function handleBill(e) {
    setBill(Number(e.target.value));
  }
  function handleTip(e) {
    setTip(Number(e.target.value));
    console.log(tip);
  }
  function handleFTip(e) {
    fSetTip(Number(e.target.value));
    console.log(ftip);
  }

  function handleResert() {
    setBill("");
    setTip("");
    fSetTip("");
  }
  return (
    <div className="App">
      <Bill bill={bill} handleBill={handleBill} />
      <Question tip={tip} handleTip={handleTip}>
        How did you Like the service
      </Question>
      <Question1 tip={ftip} handleFTip={handleFTip}>
        How did your Friend Like the service
      </Question1>
      <Display bill={bill} tip={tip} ftip={ftip} />
      <Button handleResert={handleResert} />
    </div>
  );
}

function Bill({ bill, handleBill }) {
  return (
    <div className="bill">
      <p>
        How much was the bill?
        <span>
          <input
            type="number"
            placeholder="How much was the bill?"
            value={bill}
            onChange={handleBill}
          />
        </span>
      </p>
    </div>
  );
}

function Question({ tip, handleTip, children }) {
  return (
    <div className="bill">
      <p>
        {children}
        <span>
          <select value={tip} onChange={handleTip}>
            <option value={0}>Dissatisfied(0%)</option>
            <option value={5}>It was Okay(5%)</option>
            <option value={10}>It was Good (10%)</option>
            <option value={20}>Absolutely Amazing(20%)</option>
          </select>
        </span>
      </p>
    </div>
  );
}
function Question1({ ftip, handleFTip, children }) {
  return (
    <div className="bill">
      <p>
        {children}
        <span>
          <select value={ftip} onChange={handleFTip}>
            <option value={0}>Dissatisfied(0%)</option>
            <option value={5}>It was Okay(5%)</option>
            <option value={10}>It was Good (10%)</option>
            <option value={20}>Absolutely Amazing(20%)</option>
          </select>
        </span>
      </p>
    </div>
  );
}

function Display({ bill, tip, ftip }) {
  const realTip = (tip + ftip) / 2;
  const total = bill + realTip;
  return (
    <div className="bill">
      {total > 0 && <h3>{`You pay $${total} ($${bill} + ${realTip} tip)`}</h3>}
    </div>
  );
}

function Button({ handleResert }) {
  return <button onClick={handleResert}>Reset</button>;
}
export default App;
