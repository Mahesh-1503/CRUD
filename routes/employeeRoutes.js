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
router.post("/addemployee", addEmployee);           // Create Employee
router.get("/getallemployees", getAllEmployees);        // Get All Employees
router.get("/getemployee/:id", getEmployeeById);     // Get Employee by ID
router.put("/updateemployee/:id", updateEmployee);      // Update Employee
router.delete("/deleteemployee/:id", deleteEmployee);   // Delete Employee

module.exports = router;
