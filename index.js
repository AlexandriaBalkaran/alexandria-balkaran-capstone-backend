// import fs from "node:fs";

// // const file = fs.readFileSync("./data/info.json");
// // const data = JSON.parse(file);
// // console.log(data.length);

// // const mondays = data.filter((d) => d.date_of_deal.includes("Monday"));
// // console.log(mondays);

// // 7 days a week, b/w 5pm 7pm deal: {Beer, 5}

// const days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const happyHour = days.map((day) => {
//   return {
//     type: "drink",
//     start: 1500,
//     end: 1700,
//     name: "Beer",
//     price: 5,
//     day,
//   };
// });

// const data = [
//   {
//     name: "Pour House",
//     deals: [
//       ...happyHour,
//       {
//         type: "food",
//         start: 1500,
//         end: 1700,
//         name: "Taco",
//         price: 10,
//         day: "Tuesday",
//       },
//     ],
//   },
//   {
//     name: "Bar Wellington",
//     deals: [
//       ...happyHour,
//       {
//         type: "food",
//         start: 1000,
//         end: 1300,
//         name: "Breakfast",
//         price: 10,
//         day: "Tuesday",
//       },
//     ],
//   },
// ];

// fs.writeFileSync("./data/jon.json", JSON.stringify(data));

// // console.log(data);

// const mornings = data.filter((rest) => {
//   return rest.deals.find((deal) => deal.start >= 500 || deal.end <= 1200);
// });

// console.log(mornings);




import "dotenv/config";
import express from "express";
import cors from "cors";
import dealsRoutes from "./routes/dealsRoutes.js";
import venuesRoutes from "./routes/venuesRoutes.js"

const app = express();

// Middleware
const { CORS_ORIGIN } = process.env;
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// Basic Route
app.use("/deals", dealsRoutes);
app.use("/venues", venuesRoutes);

// Server Listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});