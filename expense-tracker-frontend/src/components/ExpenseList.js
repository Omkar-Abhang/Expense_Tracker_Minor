import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Import edit and delete icons
import "../App.css";
import axios from "axios";

const ExpenseList = ({ expenses, refreshExpenses }) => {
  const [filterDate, setFilterDate] = useState("");

  // State to manage the editing mode and the values for the selected expense
  const [editingExpenseId, setEditingExpenseId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedAmount, setUpdatedAmount] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      // Delete the expense from backend
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/expenses/${id}`);
      refreshExpenses(); // Refresh the list after deletion
    } catch (error) {
      console.error("❌ Error deleting expense:", error);
    }
  };

  // Handle edit action: enable editing mode for the selected expense
  const handleEdit = (expense) => {
    setEditingExpenseId(expense.id);
    setUpdatedTitle(expense.title);
    setUpdatedAmount(expense.amount);
    setUpdatedDate(expense.date);
  };

  // Handle update action: send the updated expense to the backend
  const handleUpdate = async () => {
    const updatedExpense = {
      title: updatedTitle,
      amount: updatedAmount,
      date: updatedDate,
    };

    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/expenses/${editingExpenseId}`,
        updatedExpense
      );
      refreshExpenses(); // Refresh the list after updating
      setEditingExpenseId(null); // Exit edit mode
    } catch (error) {
      console.error("❌ Error updating expense:", error);
    }
  };

  // Handle cancel action: revert to the previous state (exit edit mode)
  const handleCancel = () => {
    setEditingExpenseId(null); // Exit edit mode without saving
  };

  // Filter expenses based on selected date
  const filteredExpenses = filterDate
    ? expenses.filter((expense) => expense.date === filterDate)
    : expenses;

      // Function to calculate dynamic width based on input length
  const getDynamicWidth = (value) => {
    const minWidth = 100; // Minimum width of input
    const maxWidth = 300; // Maximum width of input
    const length = value.length;
    const newWidth = Math.min(Math.max(minWidth + length * 5, minWidth), maxWidth);
    return newWidth;
  };

  return (
    <div className="expense-list col-md-12 mb-1">
      <div className="card shadow-lg">
        <div className="card-header">
          <h2 className="text-center text-success">📅 Expense List</h2>
        </div>
        <div className="card-body">
<ul className="list-group">
            {filteredExpenses.map((expense) => (
              <li
                key={expense.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {editingExpenseId === expense.id ? (
                  // Inline editing mode
                  <div className="d-flex flex-column w-100">
                    <div className="d-flex mb-2">
                      <input
                        type="text"
                        className="form-control mx-2"
                        placeholder="Title"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        style={{ width: `${getDynamicWidth(updatedTitle)}px` }}
                      />
                      <input
                        type="number"
                        className="form-control mx-2"
                        placeholder="Amount"
                        value={updatedAmount}
                        onChange={(e) => setUpdatedAmount(e.target.value)}
                        style={{ width: `${getDynamicWidth(updatedAmount)}px` }}
                      />
                      <input
                        type="date"
                        className="form-control mx-2"
                        value={updatedDate}
                        onChange={(e) => setUpdatedDate(e.target.value)}
                        style={{ width: `${getDynamicWidth(updatedDate)}px` }}
                      />
                    </div>

                    {/* Save and Cancel buttons below the inputs */}
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-success w-48"
                        onClick={handleUpdate}
                      >
                        ✅ Save
                      </button>
                      <button
                        className="btn btn-danger w-48"
                        onClick={handleCancel}
                      >
                        ❎ Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // Regular view of the expense
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <span>
                      <strong>{expense.title}</strong> - ₹{expense.amount}
                    </span>
                    <small className="text-muted">{expense.date}</small>
                    <div className="d-flex">
                      {/* Edit Icon */}
                      <FaEdit
                        className="text-primary mx-2 cursor-pointer"
                        size={20}
                        onClick={() => handleEdit(expense)}
                      />
                      {/* Delete Icon */}
                      <FaTrashAlt
                        className="text-danger mx-2 cursor-pointer"
                        size={20}
                        onClick={() => handleDelete(expense.id)}
                      />
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
