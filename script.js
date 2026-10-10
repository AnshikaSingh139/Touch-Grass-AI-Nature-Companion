
"use strict";

// Outdoor challenges shown on the website
const challenges = [
    {
        id: "walk",
        icon: "🚶",
        title: "The 10-Minute Walk",
        description: "Leave your phone in your pocket and take a peaceful walk outdoors.",
        minutes: 10,
        points: 20
    },
    {
        id: "plants",
        icon: "🌱",
        title: "Plant Detective",
        description: "Find three different plants. Notice their leaves, shapes, and colors.",
        minutes: 10,
        points: 25
    },
    {
        id: "sky",
        icon: "☁️",
        title: "Look Up",
        description: "Watch the clouds, notice the sky, and take five slow breaths.",
        minutes: 5,
        points: 15
    },
    {
        id: "birds",
        icon: "🐦",
        title: "Birdwatching",
        description: "Observe a bird from a respectful distance. Notice its colors and sounds.",
        minutes: 15,
        points: 30
    },
    {
        id: "garden",
        icon: "🪴",
        title: "Green Helper",
        description: "Water a plant, remove a weed safely, or care for a small garden.",
        minutes: 10,
        points: 25
    },
    {
        id: "sunset",
        icon: "🌅",
        title: "Golden Moment",
        description: "Spend a little time noticing the changing light and sounds around you.",
        minutes: 20,
        points: 35
    }
];

// Browser storage helpers
// If storage is unavailable, the website can still work for this session.
function loadData(key, fallback) {
    try {
        const saved = localStorage.getItem(key);
        return saved === null ? fallback : JSON.parse(saved);
    } catch (error) {
        console.warn("Could not load saved data.", error);
        return fallback;
    }
}

function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn("Could not save data.", error);
    }
}

let completedChallenges = loadData("tg-completed", []);
let totalPoints = loadData("tg-points", 0);
let outdoorMinutes = loadData("tg-minutes", 0);
let journalEntries = loadData("tg-journal", []);

function renderChallenges() {
    const grid = document.getElementById("challenge-grid");

    grid.innerHTML = "";

    challenges.forEach(function (challenge) {
        const isCompleted = completedChallenges.includes(challenge.id);

        const card = document.createElement("article");
        card.className = "challenge-card";

        const icon = document.createElement("div");
        icon.className = "challenge-icon";
        icon.textContent = challenge.icon;

        const title = document.createElement("h3");
        title.textContent = challenge.title;

        const description = document.createElement("p");
        description.textContent = challenge.description;

        const meta = document.createElement("div");
        meta.className = "card-meta";

        const duration = document.createElement("span");
        duration.textContent = "⏱ " + challenge.minutes + " min";

        const points = document.createElement("span");
        points.textContent = "✳ " + challenge.points + " points";

        meta.append(duration, points);

        const button = document.createElement("button");
        button.className = "challenge-button";
        button.type = "button";
        button.textContent = isCompleted ? "✓ Completed" : "I did it! + " + challenge.points;

        button.disabled = isCompleted;

        button.addEventListener("click", function () {
            completeChallenge(challenge);
        });

        card.append(icon, title, description, meta, button);
        grid.appendChild(card);
    });
}

function completeChallenge(challenge) {
    if (completedChallenges.includes(challenge.id)) {
        return;
    }

    // This button is a self-reported completion, not automatic verification.
    completedChallenges.push(challenge.id);
    totalPoints += challenge.points;
    outdoorMinutes += challenge.minutes;

    saveData("tg-completed", completedChallenges);
    saveData("tg-points", totalPoints);
    saveData("tg-minutes", outdoorMinutes);

    updateStats();
    renderChallenges();
}

function updateStats() {
    document.getElementById("points").textContent = totalPoints;
    document.getElementById("completed-count").textContent =
        completedChallenges.length;
    document.getElementById("minutes").textContent = outdoorMinutes + " min";
}

// Beginner-friendly activity recommendation engine.
// This uses rules, not an AI model yet.
const activities = {
    stressed: {
        icon: "🍃",
        title: "Try a mindful nature walk.",
        description: "Walk slowly, relax your shoulders, and notice five things you can see."
    },
    bored: {
        icon: "🔎",
        title: "Go on a tiny nature hunt.",
        description: "Look for an interesting leaf, a natural pattern, or a cloud shape."
    },
    curious: {
        icon: "🐞",
        title: "Become a nature detective.",
        description: "Observe a plant or insect from a safe distance and note what makes it unique."
    },
    energetic: {
        icon: "👟",
        title: "Get moving outdoors!",
        description: "Try a brisk walk, a safe jogging route, or a few gentle stretches outside."
    },
    calm: {
        icon: "🌼",
        title: "Enjoy a quiet outdoor moment.",
        description: "Sit somewhere comfortable and notice the breeze, sounds, and colors around you."
    }
};

document.getElementById("suggest-button").addEventListener("click", function () {
    const mood = document.getElementById("mood").value;
    const time = Number(document.getElementById("time").value);
    const activity = activities[mood];

    const result = document.getElementById("suggestion-result");
    result.replaceChildren();

    const icon = document.createElement("span");
    icon.className = "result-icon";
    icon.textContent = activity.icon;

    const text = document.createElement("div");

    const heading = document.createElement("strong");
    heading.textContent = activity.title;

    const description = document.createElement("p");
    description.textContent = activity.description;

    const duration = document.createElement("p");
    duration.style.marginTop = "8px";
    duration.textContent = "Your time: " + time + " minutes.";

    text.append(heading, description, duration);
    result.append(icon, text);
});

// Nature journal
function renderJournal() {
    const list = document.getElementById("journal-list");
    list.replaceChildren();

    if (journalEntries.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-journal";
        emptyMessage.textContent =
            "Your discoveries will appear here after you save your first entry.";
        list.appendChild(emptyMessage);
        return;
    }

    journalEntries.forEach(function (entry) {
        const card = document.createElement("article");
        card.className = "journal-entry";

        const date = document.createElement("time");
        date.textContent = entry.date;

        const note = document.createElement("p");
        // textContent prevents journal text from being interpreted as HTML.
        note.textContent = entry.text;

        card.append(date, note);
        list.appendChild(card);
    });
}

document.getElementById("journal-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("journal-entry");
    const text = input.value.trim();

    if (!text) {
        input.focus();
        return;
    }

    journalEntries.unshift({
        text: text,
        date: new Date().toLocaleString()
    });

    saveData("tg-journal", journalEntries);
    renderJournal();

    input.value = "";
});

// Start the website
updateStats();
renderChallenges();
renderJournal();