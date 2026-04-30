let selectedSeats = [];
let bookedSeats = [];

const routePrices = {
    "Pune → Mumbai": 300,
    "Pune → Goa": 700,
    "Mumbai → Goa": 800,
    "Pune → Nashik": 250,
    "Mumbai → Nashik": 300,
    "Pune → Kolhapur": 400,
    "Mumbai → Pune": 350
};

function getRandomPrice(route) {
    let base = routePrices[route] || 300;
    let variation = Math.floor(Math.random() * 100) - 50;
    return base + variation;
}

const seatContainer = document.getElementById("seats");
const totalEl = document.getElementById("total");
const nameDiv = document.getElementById("names");

// LOAD DATA FROM SERVER
async function loadData() {
    const res = await fetch("/api/bookings");
    const data = await res.json();

    bookedSeats = data.bookedSeats;

    createSeats();
    display(data.bookings);
}

// CREATE SEATS
function createSeats() {
    seatContainer.innerHTML = "";

    for (let i = 1; i <= 20; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");

        if (bookedSeats.includes(i)) {
            seat.classList.add("booked");
        } else {
            seat.classList.add("available");

            seat.addEventListener("click", () => {
                if (seat.classList.contains("selected")) {
                    seat.classList.remove("selected");
                    selectedSeats = selectedSeats.filter(s => s !== i);
                } else {
                    seat.classList.add("selected");
                    selectedSeats.push(i);
                }
                updateUI();
            });
        }

        seat.innerText = i;
        seatContainer.appendChild(seat);
    }
}

// UPDATE UI
function updateUI() {
    const route = document.getElementById("route").value;
    let price = getRandomPrice(route);
    totalEl.innerText = selectedSeats.length * price;

    nameDiv.innerHTML = "";
    selectedSeats.forEach(s => {
        nameDiv.innerHTML += `
            <input type="text" placeholder="Passenger for Seat ${s}" class="pname">
        `;
    });
}

// BOOK API CALL
async function bookNow() {
    const route = document.getElementById("route").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!route || !date || !time) {
        alert("Fill all details!");
        return;
    }

    const inputs = document.querySelectorAll(".pname");

    let passengers = [];
    let valid = true;

    inputs.forEach(i => {
        if (!i.value) valid = false;
        else passengers.push(i.value);
    });

    if (!valid) {
        alert("Enter all passenger names!");
        return;
    }

    let price = getRandomPrice(route);
    let total = price * selectedSeats.length;

    const booking = {
        route,
        date,
        time,
        seats: selectedSeats,
        passengers,
        total
    };

    await fetch("/api/book", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(booking)
    });

    alert("Booking Successful 🎉");

    selectedSeats = [];
    totalEl.innerText = 0;
    nameDiv.innerHTML = "";

    loadData();
}

// DISPLAY
function display(bookings) {
    const list = document.getElementById("list");
    list.innerHTML = "";

    bookings.forEach(b => {
        const li = document.createElement("li");

        li.innerHTML = `
            <b>${b.route}</b><br>
            📅 ${b.date} | ⏰ ${b.time}<br>
            💺 Seats: ${b.seats.join(", ")}<br>
            👤 ${b.passengers.join(", ")}<br>
            💰 ₹${b.total}
        `;

        list.appendChild(li);
    });
}

// INIT
loadData();