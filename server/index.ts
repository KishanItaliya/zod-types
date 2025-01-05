
import express from "express";
import mongoose from "mongoose";
const app = express();

const port = 3000;
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/learning', { 
    dbName: "courses",
}).then(() => {
    console.log('Connected to MongoDB successfully');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});


// Update error handlers with more detailed logging
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected. Ensure MongoDB is running.');
});

// Add connected event listener for additional confirmation
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});
