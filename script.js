const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const events = [
  {
    name: "Tech Conference 2026",
    date: "15 Jan 2026 | 10:00 AM",
    location: "Islamabad",
    description: "A tech conference for developers and innovators.",
  },
  {
    name: "Startup Meetup",
    date: "20 Jan 2026 | 5:00 PM",
    location: "Lahore",
    description: "Networking event for startup founders.",
  },
  {
    name: "UI/UX Workshop",
    date: "2 Feb 2026 | 11:00 AM",
    location: "Karachi",
    description: "Hands-on workshop on UI/UX design.",
  },
  {
    name: "AI Seminar",
    date: "10 Feb 2026 | 2:00 PM",
    location: "Islamabad",
    description: "Seminar on Artificial Intelligence trends.",
  },
];

const eventGrid = document.getElementById("eventGrid");
const searchInput = document.getElementById("searchInput");

function renderEvents(list) {
  eventGrid.innerHTML = "";
  list.forEach((event) => {
    eventGrid.innerHTML += `
      <div class="event-card">
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p>${event.description}</p>
        <button>Register</button>
      </div>
    `;
  });
}

// Search filter
searchInput.addEventListener("input", () => {
  const filtered = events.filter((e) =>
    e.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  renderEvents(filtered);
});

// Simulate API fetch
setTimeout(() => {
  renderEvents(events);
}, 500);
