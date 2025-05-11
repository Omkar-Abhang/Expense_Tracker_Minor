import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import BudgetProgress from "./BudgetProgress";
import axios from "axios";
import MyNavbar from "./MyNavbar";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/expenses?email=${localStorage.getItem("email")}`
      );
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const fetchBudgetData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/budget?email=${localStorage.getItem("email")}`
      );
      setBudget(response.data.amount || 0);
    } catch (error) {
      console.error("Error fetching budget:", error);
    }
  };

  useEffect(() => {
    fetchBudgetData();
    fetchExpenses();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="App">
      <MyNavbar setBudget={setBudget} handleLogout={handleLogout} />

      {/* Space below fixed navbar */}
      <div style={{ height: "80px" }} />

      {/* Progress bar */}
      <BudgetProgress budget={budget} expenses={expenses} />

      {/* Main content */}
      <Container className="my-4">
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <AddExpense refreshExpenses={fetchExpenses} />
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <ExpenseList expenses={expenses} refreshExpenses={fetchExpenses} />
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer text-center py-4 bg-dark text-white">
        <p className="mb-1">
          &copy; Omkar Abhang |
          <a
            href="mailto:omkarabhang36@gmail.com"
            className="mx-2 text-warning text-decoration-none"
          >
            Email
          </a>
          |
          <a
            href="https://www.linkedin.com/in/omkar-abhang-586236250/"
            className="mx-2 text-warning text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          |
          <a
            href="https://github.com/Omkar-Abhang"
            className="mx-2 text-warning text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
