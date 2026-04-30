let bookings = [];
let selectedSeats = [];
let bookedSeats = [2, 5, 9];

// ROUTE BASE PRICES
const routePrices = {
    "Pune → Mumbai": 300,
    "Pune → Goa": 700,
    "Mumbai → Goa": 800,
    "Pune → Nashik": 250,
    "Mumbai → Nashik": 300,
    "Pune → Kolhapur": 400,
    "Mumbai → Pune": 350
};

// RANDOM PRICE FUNCTION
function getRandomPrice(route) {
    let base = routePrices[route] || 300;
    let variation = Math.floor(Math.random() * 100) - 50;
    return base + variation;
}

const seatContainer = document.getElementById("seats");
const totalEl = document.getElementById("total");
const nameDiv = document.getElementById("names");

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

createSeats();

// UPDATE UI
function updateUI() {
    const route = document.getElementById("route").value;
    let pricePerSeat = getRandomPrice(route);

    totalEl.innerText = selectedSeats.length * pricePerSeat;

    nameDiv.innerHTML = "";
    selectedSeats.forEach(s => {
        nameDiv.innerHTML += `
            <input type="text" placeholder="Passenger for Seat ${s}" class="pname">
        `;
    });
}

// BOOK
function bookNow() {
    const route = document.getElementById("route").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (route === "" || date === "" || time === "") {
        alert("Fill all details!");
        return;
    }

    const inputs = document.querySelectorAll(".pname");

    let passengers = [];
    let valid = true;

    inputs.forEach(i => {
        if (i.value === "") valid = false;
        else passengers.push(i.value);
    });

    if (!valid) {
        alert("Enter all passenger names!");
        return;
    }

    let pricePerSeat = getRandomPrice(route);
    let total = pricePerSeat * selectedSeats.length;

    const booking = {
        route,
        date,
        time,
        seats: [...selectedSeats],
        passengers,
        price: pricePerSeat,
        total
    };

    bookings.push(booking);

    selectedSeats.forEach(s => bookedSeats.push(s));

    display();

    alert("Booking Successful 🎉");

    // RESET
    selectedSeats = [];
    totalEl.innerText = 0;
    nameDiv.innerHTML = "";

    createSeats();
}

// DISPLAY
function display() {
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