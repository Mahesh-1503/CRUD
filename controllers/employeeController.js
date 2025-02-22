// Controllers handle business logic and requests.

const Employee = require("../models/Employee");

// ✅ Create a new Employee
exports.addEmployee = async (req, res) => {
    try {
        const { name, email, phone, city } = req.body;

        // Check if employee already exists
        let existingEmployee = await Employee.findOne({ email } || { phone });
        if (existingEmployee) return res.status(400).json({ message: "Employee already exists" });

        // Create new employee
        const employee = new Employee({ name, email, phone, city });
        await employee.save();

        res.status(201).json({ message: "Employee added successfully", employee });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// ✅ Get All Employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// ✅ Get Single Employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).json({ message: "Employee not found" });

        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// ✅ Update Employee by ID
exports.updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Return updated document & validate
        );

        if (!updatedEmployee) return res.status(404).json({ message: "Employee not found" });

        res.status(200).json({ message: "Employee updated successfully", updatedEmployee });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// ✅ Delete Employee by ID
exports.deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

        if (!deletedEmployee) return res.status(404).json({ message: "Employee not found" });

        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
