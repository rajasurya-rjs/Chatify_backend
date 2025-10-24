import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./src/routes/auth.route.js";
import messageRoutes from "./src/routes/message.route.js";
import { connectDB } from "./src/lib/db.js";
import { ENV } from "./src/lib/env.js";
import { app, server } from "./src/lib/socket.js";

const PORT = ENV.PORT || 3000;

// Middleware
app.use(express.json({ limit: "5mb" }));
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// **Remove frontend static serving** because frontend is deployed separately

// Start server & connect DB
server.listen(PORT, async () => {
  console.log("Server running on port: " + PORT);
  await connectDB();
});
