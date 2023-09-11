const User = require("../model/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")

exports.create = async (req, res)=>{
    const {userName, email, password} = req.body;

    try {
        let useremail = await User.findOne({email})
        let username = await User.findOne({userName})

        if (useremail) {
            return res.status(400).json({
              error: "Email already exits",
            });
          }
        if (username) {
          return res.status(400).json({
            error: "Username not available",
          });
        }

      const newUser = new User();
        newUser.userName = userName;
        newUser.email = email;
        newUser.password = password;

        const salt = await bcryptjs.genSalt(10);
        newUser.password = await bcryptjs.hash(password, salt);
        await newUser.save();

        res.status(201).json({
          success: "Account created...! please login"
        })

    } catch (error) {
        console.log("signup:", error);
        res.status(500).json({
        error: "Server Error",
        });
    }
    

}

exports.find = async (req, res)=>{
    const {email, password} = req.body;

    try {
        let user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({
              error: "Invalid Credetials",
            });
          }

          const isMatch = await bcryptjs.compare(password, user.password);
          if (!isMatch) {
            return res.status(400).json({
              error: "Invalid Credetials",
            });
          }

          const payload = {
            user: {
              _id: user._id,
            },
          };
          console.log(payload);
          jwt.sign(
            payload,
            process.env.JWT_SECREET,
            { expiresIn: process.env.JWT_EXPIRE },
            (err, token) => {
              if (err) {
                console.log("jwt error", err);
              }
              const { _id, userName, email, role } = user;
      
              res.json({
                token,
                user: { _id, userName, email, role },
              });
            }
          );

    } catch (error) {
        console.log("signup:", error);
        res.status(500).json({
        error: "Server Error",
        });
    }
    

}

