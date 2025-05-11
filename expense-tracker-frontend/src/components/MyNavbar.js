import React, { useState } from "react";
import { Navbar, Nav, Button, Modal, Container } from "react-bootstrap";
import AddBudget from "./AddBudget";
import "../App.css";

const MyNavbar = ({ setBudget, handleLogout }) => {
  const [showBudgetModal, setShowBudgetModal] = useState(false);

  return (
    <>
      <Navbar expand="lg" fixed="top" className="px-4 custom-navbar bg-dark" variant="dark">
        <Container fluid className="justify-content-between">
          {/* Brand aligned to the left on all screen sizes */}
          <Navbar.Brand
            href="/"
            className="text-white fw-bold d-flex align-items-center"
            style={{ fontSize: "1.2rem" }}
          >
            <span className="me-2">💸</span>
            Expense Tracker App
          </Navbar.Brand>

          {/* Hamburger Menu Button (visible only on smaller screens) */}
          <Navbar.Toggle
            aria-controls="navbarNav"
            className="ms-auto d-lg-none"  // Visible on small screens
          />

          {/* Collapsible Navbar Menu */}
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto d-flex flex-column flex-lg-row align-items-center text-center mt-2 mt-lg-0 gap-2">
              <Button
                variant="outline-warning"
                className="w-100 w-lg-auto"
                onClick={() => setShowBudgetModal(true)}
              >
                Set Monthly Budget
              </Button>
              <Button
                variant="outline-light"
                className="w-100 w-lg-auto"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Add space below fixed navbar */}
      <div style={{ height: "30px" }}></div>

      {/* Budget Modal */}
      <Modal show={showBudgetModal} onHide={() => setShowBudgetModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Set Your Monthly Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddBudget setBudget={setBudget} onClose={() => setShowBudgetModal(false)} />
        </Modal.Body>
      </Modal>

      {/* Adjust CSS to fix the mobile view when the hamburger icon is clicked */}
      <style>
        {`
          @media (max-width: 992px) {
            .navbar-collapse {
              background-color: rgba(0, 0, 0, 0.8); /* Dark background when menu expands */
            }
            .navbar-toggler {
              border-color: #fff; /* Ensure the hamburger icon is white */
            }
          }
        `}
      </style>
    </>
  );
};

export default MyNavbar;
