import express, { Request, Response } from "express";

const app = express();

app.use((req: Request, res: Response) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // Respond with a JSON object
  const response = {
    message: "Hello, world!",
  };

  res.status(200).json(response);
});
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
