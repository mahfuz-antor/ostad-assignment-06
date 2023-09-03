const app = require("./app");

const apiRoutes = require("./src/Routes/app");

app.use("/api", apiRoutes);

const port = 8000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
