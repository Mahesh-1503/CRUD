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
router.post("/addEmployee", addEmployee);           // Create Employee
router.get("/getAllEmployees", getAllEmployees);        // Get All Employees
router.get("/getEmployee/:id", getEmployeeById);     // Get Employee by ID
router.put("/updateEmployee/:id", updateEmployee);      // Update Employee
router.delete("/deleteEmployee/:id", deleteEmployee);   // Delete Employee

module.exports = router;
