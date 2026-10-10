# 🌿 Touch Grass — Your Nature Companion

**Touch Grass** is a nature-themed web application designed to encourage people to spend more time outdoors, explore their surroundings, and build healthier habits through small nature challenges.

The project combines a clean, responsive interface with activity recommendations, progress tracking, and a personal nature journal. The long-term goal is to integrate open-source AI to provide personalized outdoor activity suggestions.

> **Project status:** Front-end prototype. The current activity recommender uses predefined rules. Open-source AI integration is planned for a future version.

---

## 📌 Table of Contents

* [About the Project](#-about-the-project)
* [Problem Statement](#-problem-statement)
* [Our Solution](#-our-solution)
* [Features](#-features)
* [Technology Stack](#-technology-stack)
* [Project Structure](#-project-structure)
* [Getting Started](#-getting-started)
* [How to Use](#-how-to-use)
* [How It Works](#-how-it-works)
* [Current Limitations](#-current-limitations)
* [Future Improvements](#-future-improvements)
* [Open-Source AI Integration](#-open-source-ai-integration)
* [Privacy](#-privacy)
* [Contributing](#-contributing)
* [License](#-license)
* [Acknowledgements](#-acknowledgements)

---

## 🌱 About the Project

In a world where people spend increasing amounts of time on screens, it can be easy to forget the benefits of spending time outside.

**Touch Grass** makes going outdoors feel simple, enjoyable, and achievable. Instead of asking users to make major lifestyle changes, it encourages small activities such as taking a short walk, observing trees, listening to birds, or watching the sunset.

The goal is to make connecting with nature a regular habit.

## 🎯 Problem Statement

Many people spend much of their day indoors studying, working, or using digital devices. They may want to spend more time outside but struggle to decide what to do or how to begin.

Common challenges include:

* Not knowing which outdoor activity to choose.
* Finding it difficult to build consistent outdoor habits.
* Forgetting to reflect on enjoyable outdoor experiences.
* Losing motivation when progress is difficult to track.

## 💡 Our Solution

Touch Grass provides a simple digital companion that helps users take small steps toward spending more time outdoors.

The application offers:

* Nature-based challenges.
* Activity suggestions based on the user's selected mood and available time.
* Points and progress tracking.
* A personal journal for recording nature experiences.
* A foundation for future AI-powered personalization.

The focus is on making outdoor activities accessible, enjoyable, and easy to start.

---

## ✨ Features

### 🌳 1. Nature Challenges

Explore small outdoor activities designed to encourage users to connect with their surroundings.

Examples include:

* Take a short walk.
* Observe a tree closely.
* Listen to birds for a few minutes.
* Find something interesting in nature.
* Watch the sunset.

### 🧭 2. Personalized Activity Suggestions

Users can select their mood and available time to receive an activity recommendation.

The current version uses predefined rules to choose suggestions. It does not yet use an AI model.

### ⭐ 3. Progress Tracking

Users can track their completed challenges and collect points as they participate in activities.

The goal is to make progress visible and encourage consistency.

### 📔 4. Nature Journal

Users can write short notes about their outdoor experiences.

For example:

* What did I observe today?
* How did spending time outside make me feel?
* What new thing did I notice?

Journal entries are stored in the browser's local storage.

### 💾 5. Local Data Storage

The prototype uses browser `localStorage` to retain supported progress and journal information between visits on the same browser.

### 📱 6. Responsive Design

The interface is designed to adapt to different screen sizes, including desktop computers, tablets, and mobile phones.

---

## 🛠️ Technology Stack

| Technology                 | Purpose                                              |
| -------------------------- | ---------------------------------------------------- |
| HTML5                      | Structure of the application                         |
| CSS3                       | Styling, layout, and responsive design               |
| JavaScript                 | Interactions, recommendations, and progress tracking |
| Browser localStorage       | Saving progress and journal entries locally          |
| Google Fonts               | Typography                                           |
| Ollama / open-weight model | Planned local AI integration                         |

**Current implementation:** HTML, CSS, and JavaScript.

**Planned enhancement:** Integrate an open-source AI model for more flexible, personalized nature recommendations.

---

## 📁 Project Structure

```text
touch-grass/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

* `index.html` — Defines the structure and content of the application.
* `style.css` — Contains the visual styling and responsive layout.
* `script.js` — Handles user interactions, challenge progress, recommendations, and journal storage.
* `README.md` — Documents the project and explains how to run it.

---

## 🚀 Getting Started

You can run the current prototype without installing any packages or setting up a server.

### Prerequisites

You need:

* A computer.
* A modern web browser, such as Google Chrome.
* A code editor, such as Visual Studio Code.
* The project files.

### Installation

**Step 1: Clone the repository**

Replace `YOUR-USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR-USERNAME/touch-grass.git
```

**Step 2: Open the project folder**

```bash
cd touch-grass
```

**Step 3: Open the application**

Open `index.html` in your browser.

Alternatively, open the project folder in Visual Studio Code and use the Live Server extension.

No build process or package installation is required for the current version.

---

## 🕹️ How to Use

1. Open the application in your browser.
2. Explore the available nature challenges.
3. Choose an activity that suits your mood and available time.
4. Complete the activity outdoors, where it is safe to do so.
5. Mark the challenge as completed and collect points.
6. Record your experience in the nature journal.
7. Return regularly to continue building your outdoor habit.

---

## ⚙️ How It Works

### Activity recommendations

The current version uses JavaScript conditions and predefined activity suggestions.

The application considers the selected mood and available time to choose a suitable recommendation.

This is a rule-based approach rather than machine learning or generative AI.

### Challenge progress

When a user completes a challenge, JavaScript updates the relevant progress information.

### Journal storage

The journal uses the browser's `localStorage` API to save entries locally.

This means the entries are not automatically synchronized across devices or browsers.

---

## ⚠️ Current Limitations

Touch Grass is an early-stage prototype, so some capabilities are not yet implemented.

* Activity recommendations are rule-based rather than AI-generated.
* There is no user account or cloud synchronization.
* Progress and journal entries are stored locally in the browser.
* The application does not currently verify whether an outdoor activity was completed.
* Recommendations do not automatically use live weather or location data.
* A backend and AI integration are not yet included.

These limitations provide opportunities for future development.

---

## 🔮 Future Improvements

Potential improvements include:

* **Open-source AI integration:** Generate more personalized outdoor activities.
* **Weather-aware suggestions:** Recommend suitable activities based on current conditions.
* **Daily challenges:** Introduce a new activity each day.
* **Streak tracking:** Encourage users to build consistent habits.
* **Nature exploration:** Suggest ways to observe plants, birds, and the local environment.
* **Accessibility options:** Add adjustable text sizes and improved keyboard navigation.
* **Progress visualization:** Display completed activities and time spent outdoors.
* **Optional accounts:** Allow users to synchronize progress between devices.
* **Progressive Web App support:** Make the application easier to install on supported devices.

---

## 🤖 Open-Source AI Integration

One of the long-term goals of Touch Grass is to use open-source AI to make activity recommendations more personalized.

A possible approach is to use **Ollama** with a compatible open-weight language model.

The planned workflow is:

1. The user selects their mood and available time.
2. The application sends those preferences to a local backend.
3. The backend passes the information to a locally running AI model.
4. The model generates a suitable outdoor activity.
5. The application displays the recommendation.

This integration has **not been implemented yet**. The current prototype uses predefined JavaScript rules.

A future implementation should also validate AI-generated output and avoid recommending activities that are unsafe or unsuitable for the user's circumstances.

---

## 🔐 Privacy

The current prototype stores supported progress and journal data in the browser's local storage.

* No account is required.
* Journal entries are not automatically uploaded to a server.
* Data may be removed if the user clears the browser's site data.
* Other people using the same browser profile may be able to access locally stored information.

If an AI service, backend, analytics system, or cloud synchronization is added later, its data handling should be documented separately.

---

## 🤝 Contributing

Contributions and suggestions are welcome!

To contribute:

1. Fork the repository.
2. Create a branch for your changes.
3. Make your improvements.
4. Test the application in a browser.
5. Submit a pull request describing your changes.

Possible contribution areas include UI improvements, new challenges, accessibility, testing, and open-source AI integration.

---

## 📄 License

No license has been specified for this project yet.

If you choose the MIT License, add the complete MIT license text in a file named `LICENSE` and update this section accordingly. Do not claim that the project is MIT-licensed until that file and the licensing decision are in place.

---

## 🙌 Acknowledgements

* The open-source developer community.
* The creators and maintainers of HTML, CSS, and JavaScript tools.
* Developers building accessible and privacy-conscious AI tools.
* Everyone who inspires others to spend more time exploring nature.

---

## 🌿 Final Note

**Touch Grass is about making small changes, not being perfect.**

A short walk, a moment of fresh air, or noticing something new outside can be a meaningful first step.

Step outside. Explore your surroundings. Touch grass.

---

**Made with 🌿 for a little more nature in everyday life.**
