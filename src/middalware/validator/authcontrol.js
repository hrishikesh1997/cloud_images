require("dotenv").config(); // Load .env variables
const jwt = require("jsonwebtoken");

// Secret Key (Store this in .env)
const JWT_SECRET = process.env.JWT_SECRET || "mySuperSecretKey";

// ✅ Function to Generate Token
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, username: user.username, role: user.role }, // Payload
        JWT_SECRET, 
        { expiresIn: "1h" } // Token Expiration
    );
};

// ✅ Sample Login Route
const loginUser = (req, res) => {
    const { username, password } = req.body;

    // Fake user (Replace with DB validation)
    const user = { id: "12345", username: "testuser", role: "user" };

    if (username === "testuser" && password === "password") {
        const token = generateToken(user);
        return res.json({ token });
    } else {
        return res.status(401).json({ message: "Invalid credentials" });
    }
};

module.exports = { loginUser };
