const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
    try {
        const token = req.header("Authorization")?.split(' ')[1]; 
        if (!token) {
            return res.status(403).json({ message: "No token provided, authorization denied" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token, authorization denied" });
    }
};

module.exports = authenticateJWT;
