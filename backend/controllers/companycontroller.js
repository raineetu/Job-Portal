import { Company } from "../models/companymodel.js";

// Register a new company
export const registercompany = async (req, res) => {
    try {
        const { companyName } = req.body;

        // Validate companyName
        if (!companyName || companyName.trim() === "") {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }

        // Check if company already exists
        let company = await Company.findOne({ name: companyName.trim() });
        if (company) {
            return res.status(400).json({
                message: "You can't register the same company.",
                success: false
            });
        }

        // Create a new company
        company = await Company.create({
            name: companyName.trim(),
            userId: req.id
        });

        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true
        });
    } catch (error) {
        console.error("Error during company registration:", error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};

// Get all companies for a user
export const getCompany = async (req, res) => {
    try {
        const userId = req.id; // Logged-in user ID
        const companies = await Company.find({ userId });

        if (!companies || companies.length === 0) {
            return res.status(404).json({
                message: "No companies found for this user.",
                success: false
            });
        }

        return res.status(200).json({
            companies,
            success: true
        });
    } catch (error) {
        console.error("Error fetching companies:", error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};

// Get company by ID
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;

        // Find the company by its ID
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            company,
            success: true
        });
    } catch (error) {
        console.error("Error fetching company by ID:", error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};

// Update company information
export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;

        // Validate required fields
        if (!name || !description || !website || !location) {
            return res.status(400).json({
                message: "All fields (name, description, website, location) are required.",
                success: false
            });
        }

        // Prepare the updated data
        const updateData = {
            name: name.trim(),
            description: description.trim(),
            website: website.trim(),
            location: location.trim()
        };

        // Find and update the company by ID
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company information updated successfully.",
            company,  // Return the updated company
            success: true
        });
    } catch (error) {
        console.error("Error updating company information:", error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};
