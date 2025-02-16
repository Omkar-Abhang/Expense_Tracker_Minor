import React, { useEffect, useState } from "react";
import { ProgressBar, Container, Row, Col } from "react-bootstrap";
import "../App.css";

const BudgetProgress = ({ budget, expenses }) => {
  const [progress, setProgress] = useState(0);
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  useEffect(() => {
    if (budget > 0) {
      setProgress((totalExpenses / budget) * 100);
    }
  }, [totalExpenses, budget]);

  // Get Progress Bar Color Based on Spending Level
  const getProgressBarVariant = () => {
    if (progress <= 25) return "success"; // Green
    if (progress <= 50) return "warning"; // Yellow
    if (progress <= 75) return "orange"; // Orange
    return "danger"; // Red
  };

  return (
    <Container className="budget-progress-container mt-9 mb-10" expand="lg">
      <Row>
        <Col>
          <h6 className="text-center text-secondary">Budget Progress</h6>
          <ProgressBar
            now={progress}
            label={`${Math.round(progress)}%`}
            variant={getProgressBarVariant()}
            style={{ height: "30px", fontWeight: "bold" }}
          />
          <div className="d-flex justify-content-between mt-1">
            <span className="text-muted">Spent: ₹{totalExpenses}</span>
            <span className="text-muted">Budget: ₹{budget}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BudgetProgress;
