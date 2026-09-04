import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.json({ success: false, message: "No token provided" });
    }
    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        console.log("JWT Verification Error:", error.message); 
        res.json({ success: false, message: "Invalid token" });
    }
}

export default auth;