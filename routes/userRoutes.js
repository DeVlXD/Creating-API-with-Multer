const express = require("express");
const {getUser, loginUser, updateUser, deleteUser, registerUser, getUsers} = require("../controllers/userController");

const router = express.Router();

// router.post("/register", registerUser);
// router.route("/register").post((req, res)=>{
//     res.status(200).json({message: "Create Contact"});
// });

router.get("/:id", getUser);

router.get("/", getUsers);

router.post("/login", loginUser);

router.post("/register", registerUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;