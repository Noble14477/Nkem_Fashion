const jwt = require("jsonwebtoken");

exports.authenticateJWT = (req, res, next)=>{
    const token = req.cookies.token;
    console.log(token)
    if (!token) {
        return res.status(401).json({
            error: "No token, Authentication denied"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECREET)
        req.user = decoded.user;

        next()
    } catch (err) {
        console.log("jwt error: ", err);
        res.status(401).json({
            error: "Invalid Token",
        })
    }
}