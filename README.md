# 🚀 React Native Movie App

> ⚠️ **Note:** If `npm i` fails, please try `npm i --force`.

> 📱 **iOS Support Notice:** This project has **not been tested on iOS** due to lack of access to a MacBook.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

---

## 🛠 Getting Started

> Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 1: Start Metro

Metro is the JavaScript bundler for React Native.

```bash
# Using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Build and Run Your App

Open a new terminal window and run:

#### ✅ Android

```bash
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### ⚠️ iOS (Not tested)

To install CocoaPods dependencies:

```bash
bundle install
bundle exec pod install
```

Then:

```bash
npm run ios
# OR
yarn ios
```

> For more details, visit the [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

---

## ✏️ Modify Your App

Open `App.tsx` and start editing! Thanks to [Fast Refresh](https://reactnative.dev/docs/fast-refresh), your changes will appear instantly.

To force a full reload:

- **Android**: Press <kbd>R</kbd> twice or open Dev Menu (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>M</kbd>)
- **iOS**: Press <kbd>R</kbd> in the iOS Simulator

---

## 🥳 Congratulations!

You’ve successfully set up your React Native app! 🎉

---

## ✨ Features & Functionality

Here's a list of key features implemented in this app:

1. 🎬 **TMDB API Integration**  
   - Fetched data using `axios` for:
     - Now Playing
     - Popular
     - Top Rated
     - Upcoming
     - Trending Movies
     - Search functionality across movies

2. 🔁 **Infinite Scrolling**  
   - Enabled on all screens with lists (e.g., movie categories, search results) using pagination.

3. 🧱 **Modular & Clean Code Structure**  
   - Components are well-organized and reusable with a scalable folder structure.

4. 🎞️ **Trending Screen with Animation**  
   - Custom animated carousel built using `react-native-reanimated` for smooth and performant transitions.

5. 📄 **Movie Details Screen**  
   - A rich detail view for movies that includes poster, title, runtime, release date, status, and backdrop imagery.

6. ❤️ **Favorites Feature**  
   - Users can favorite movies from any screen.
   - Implemented using:
     - `react-native-mmkv` for local, persistent storage
     - React's `Context API` for global state management
   - Favorite status is globally recognized and reflected throughout the app.

7. 🧪 **Unit Testing with Jest**  
   - Unit test cases written for:
     - API utility functions
     - Favorite context
     - Debounce utility
   - Run tests with:  
     ```bash
     npm test
     ```

---

## 🧠 Learn More

- [React Native Docs](https://reactnative.dev)
- [Environment Setup](https://reactnative.dev/docs/environment-setup)
- [Integration Guide](https://reactnative.dev/docs/integration-with-existing-apps)
- [React Native Blog](https://reactnative.dev/blog)
- [GitHub Repository](https://github.com/facebook/react-native)

---

## 🛠 Troubleshooting

Having issues? Check out the official [Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).
