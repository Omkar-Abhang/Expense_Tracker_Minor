import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import BudgetProgress from "./components/BudgetProgress";
import axios from "axios";
import MyNavbar from "./components/MyNavbar";
import { Container, Row, Col } from "react-bootstrap";


function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0); // Lifted state for budget

  const fetchExpenses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/expenses");
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const fetchBudgetData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/budget");
      setBudget(response.data.amount);
    } catch (error) {
      console.error("Error fetching budget:", error);
    }
  };

  useEffect(() => {
    fetchBudgetData();
    fetchExpenses();
  }, []);

  return (
    <div className="App">
      {/* Pass setBudget so it updates globally */}
      <MyNavbar setBudget={setBudget} />
      {/* Budget Progress now receives correct budget */}
      <BudgetProgress budget={budget} expenses={expenses} />
     
      <Container className="mt-5">
        <Row>
          {/* AddExpense component on the left */}
          <Col md={6} className="mb-4">
           
        <AddExpense refreshExpenses={fetchExpenses} />
          </Col>

          {/* ExpenseList component on the right */}
          <Col md={6} className="mb-4">
           
        <ExpenseList expenses={expenses} refreshExpenses={fetchExpenses} />
          </Col>
        </Row>
      </Container>
      <footer className="footer text-center py-4">
        <p>
          &copy; Omkar Abhang | 
          <a href="mailto:omkarabhang36@gmail.com" className="mx-2">Email</a> |
          <a href="https://www.linkedin.com/in/omkar-abhang-586236250/" className="mx-2">LinkedIn</a> |
          <a href="https://github.com/Omkar-Abhang" className="mx-2">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
