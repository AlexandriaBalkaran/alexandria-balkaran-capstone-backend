import "dotenv/config";
import express from "express";
import cors from "cors";
import dealsRoutes from "./routes/dealsRoutes.js";
import venuesRoutes from "./routes/venuesRoutes.js";

const app = express();

// Middleware
const { CORS_ORIGIN } = process.env;
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use("/images", express.static("./public/images"));

// Basic Route
app.use("/deals", dealsRoutes);
app.use("/venues", venuesRoutes);

// Server Listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
