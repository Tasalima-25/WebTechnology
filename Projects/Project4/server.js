const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// In-memory storage
let bookings = [];
let bookedSeats = [2, 5, 9];

// HOME ROUTE (fix for "Cannot GET /")
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// GET all bookings
app.get("/api/bookings", (req, res) => {
    console.log("📤 Sending bookings to frontend");  // DEBUG
    res.json({ bookings, bookedSeats });
});

//POST booking (UPDATED)
app.post("/api/book", (req, res) => {
    const booking = req.body;

    //DEBUG LOG (IMPORTANT)
    console.log("📥 Booking received from frontend:");
    console.log(booking);

    // Validate
    if (!booking.route || !booking.date || !booking.time || !booking.seats?.length) {
        return res.status(400).json({ message: "Invalid booking data" });
    }

    // Save booking
    bookings.push(booking);

    // Update booked seats
    booking.seats.forEach(seat => {
        if (!bookedSeats.includes(seat)) {
            bookedSeats.push(seat);
        }
    });

    console.log("Booking stored successfully");
    console.log("🪑 Updated booked seats:", bookedSeats);

    res.json({
        message: "Booking successful",
        totalBookings: bookings.length
    });
});

// Start server
app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});