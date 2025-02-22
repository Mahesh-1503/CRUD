// Routes define API endpoints.
const express = require("express");
const {
    addEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require("../controllers/employeeController");

const router = express.Router();

// Define Routes
router.post("/", addEmployee);           // Create Employee
router.get("/", getAllEmployees);        // Get All Employees
router.get("/:id", getEmployeeById);     // Get Employee by ID
router.put("/:id", updateEmployee);      // Update Employee
router.delete("/:id", deleteEmployee);   // Delete Employee

module.exports = router;
