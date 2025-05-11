import React, { useState } from "react";
import { Navbar, Nav, Button, Modal, Container } from "react-bootstrap";
import AddBudget from "./AddBudget";
import "../App.css";

const MyNavbar = ({ setBudget,handleLogout }) => {
  const [showBudgetModal, setShowBudgetModal] = useState(false);

  return (
    <>
      <Navbar expand="lg" fixed="top" className="px-4 custom-navbar">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand text-white">💸 Expense Tracker App</Navbar.Brand> 
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto align-items-center">
              <Button
                variant="outline-warning"
                className="budget-btn"
                onClick={() => setShowBudgetModal(true)}
              >
                Set Monthly Budget
              </Button>
              <Button
                variant="outline-light"
                className="logout-btn mx-3"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Push content below navbar in mobile view */}
      <div className="navbar-spacing"></div>

      {/* Modal for Setting Budget */}
      <Modal show={showBudgetModal} onHide={() => setShowBudgetModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Set Your Monthly Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddBudget setBudget={setBudget} onClose={() => setShowBudgetModal(false)} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyNavbar;
