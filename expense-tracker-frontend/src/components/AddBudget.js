import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const AddBudget = ({ setBudget, onClose }) => {
  const [amount, setAmount] = useState("");
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState("");

  const handleBudgetSubmit = async (e) => {
    e.preventDefault();

    if (amount <= 0) {
      setToastMessage("Please enter a valid budget amount greater than 0.");
      setToastType("danger");
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/budget?email=${localStorage.getItem("email")}`, { amount });
      setBudget(amount); // Update state globally
      setToastMessage(`Your monthly budget has been set to ₹${amount}.`);
      setToastType("success");
      setAmount("");
      onClose(); // Close modal
    } catch (error) {
      console.error("Error setting the budget:", error);
      setToastMessage("There was an error setting your budget. Please try again.");
      setToastType("danger");
    }
  };

  return (
    <div className="budget-container mt-5">
      <h3 className="text-center text-primary">Set Monthly Budget</h3>

      {toastMessage && (
        <div className={`alert alert-${toastType} mt-4`} role="alert">
          {toastMessage}
        </div>
      )}

      <form className="budget-form" onSubmit={handleBudgetSubmit}>
        <div className="form-group">
          <label htmlFor="budgetAmount">Enter Budget (₹):</label>
          <input
            type="number"
            id="budgetAmount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="1"
          />
        </div>
        <button type="submit" className="btn btn-success w-100 mt-3">
          Set Budget
        </button>
      </form>
    </div>
  );
};

export default AddBudget;
