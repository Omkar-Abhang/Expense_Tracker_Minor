import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const AddExpense = ({ refreshExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      amount: parseFloat(amount),
      date,
    };

    try {
      await axios.post("http://localhost:8080/api/expenses", expenseData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setTitle("");
      setAmount("");
      setDate("");
      // After adding the expense, refresh the expense list
      refreshExpenses(); // Trigger re-fetching the updated list
    } catch (error) {
      console.error("❌ Error adding expense:", error);
    }
  };

  return (
    <div className="add-expense container col-md-12 mb-4">
      <div className="card shadow-lg">
        <div className="card-header">
          <h2 className="text-center text-primary">💰 Add Expense</h2>
        </div>
        <div className="card-body">

          <form onSubmit={handleSubmit} className="needs-validation" noValidate>

            <div className="mb-3">
              <label className="form-label">Expense Date:</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Expense Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter expense title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Amount (₹):</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              ➕ Add Expense
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
