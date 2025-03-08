# GitHub Repositories Exlporer

## Description

This is a **GitHub User Explorer** built with **React.js**, **TypeScript**, **Tailwind CSS**, and **Redux**. The application fetches user data from the GitHub API and displays it in a list format. Users can search for GitHub profiles by username, view their details, and expand individual profiles to see their repositories. The app utilizes local storage to persist user data and implements an accordion-style UI for an interactive experience.

## Features

- **Search GitHub Users**: Users can search for GitHub profiles by entering a username in the search bar and clicking the "Search" button.
- **View User Details**: Clicking on a user will expand an accordion to display their GitHub repositories.
- **Fetch Repositories**: When a user is expanded, their public repositories are fetched from the GitHub API and displayed in a list.
- **Local Storage Integration**: The application stores user data in local storage to persist the fetched results.

## Technologies Used

- **React.js**
- **TypeScript**
- **Redux** (for state management)
- **Axios** (for API requests)
- **Tailwind CSS** (for styling)
- **React Icons** (for action buttons)

## Getting Started

Follow the instructions below to run this project on your local machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 14.x)
- **npm** (>= 6.x) or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dharmawiguna/atask-github-repositories-explorer.git
   cd atask-github-repositories-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or with Yarn:
   ```bash
   yarn install
   ```

### Running the Application

To run the application locally, execute the following command:

```bash
npm start
```

or with Yarn:

```bash
yarn start
```

The application will be available at http://localhost:3000 in your browser.

### Building the Application

To build the project for production, run:

```bash
npm run build
```

or with Yarn:

```bash
yarn build
```

## Additional Information

- The application fetches user data from https://jsonplaceholder.typicode.com/users
- The user data is stored in Redux for state management, and all updates (edit and delete) are synced with the browser's local storage.
- Tailwind CSS is used for styling, ensuring a responsive and clean user interface
