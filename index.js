const express = require("express");
const cors = require("cors");
const { fileRouter } = require("./src/router/filerouter.js");
const fs = require("fs");
const path = require("path");
const {sequelize} = require("./models")

const { json } = require("sequelize");
const { loginUser } = require("./src/middalware/validator/authcontrol.js");

const app = express();

// ✅ Secure CORS configuration
const corsOptions = {
    origin: "http://localhost:3000", // Change for production
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
};
app.use(cors(corsOptions));






app.use(express.json()); // ✅ Parses JSON request bodies
app.use(express.urlencoded({ extended: true })); // ✅ Parses URL-encoded data


// ✅ Use __dirname in CommonJS
const uploadDir = path.join(__dirname, "uploads");

// ✅ Create the uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true }); // Safe directory creation
}

// ✅ Serve static files from uploads directory
app.use("/src/uploads", express.static(uploadDir));

// ✅ Use file router
app.use("/files", fileRouter);

app.post("/login",loginUser)

// ✅ Default route (fix)
app.get("/", (req, res) => {
    res.send("Welcome to file/image upload API");
});

// ✅ Start the server
const port = 4040;
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    //return sequelize.sync({ force: false }); // Set `force: true` to drop and recreate tables
  })
  .then(() => {
    console.log('Database synchronized.');
    app.listen(port ,()=>{
      console.log(`App listening on http://localhost:${port}`); // ✅ Fix `${port}`
  
  })
  })