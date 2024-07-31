# GitHub Profile Viewer

A React-based web application that allows users to view GitHub profiles, including repositories, followers, and following details.


## Introduction

The GitHub Profile Viewer is a React application that enables users to search for GitHub profiles and view detailed information about repositories, followers, and users being followed. It utilizes the GitHub API to fetch and display data.

## Features

- Search for GitHub users.
- Display user profile details.
- View user repositories.
- View user followers.
- View users that the user is following.

## Getting Started

### Prerequisites

To run this project locally, you'll need to have the following installed:

- Node.js
- npm (Node Package Manager)
- GitHub Personal Access Token

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/github-profile-viewer.git
    cd github-profile-viewer
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Enter a GitHub username in the search bar on the home page.
2. Click "Search" to fetch and display the user's profile information.
3. Use the navigation links to view repositories, followers, and following details for the searched user.

## Project Structure

```bash
.
├── src
│   ├── Pages
│   │   ├── Home page
│   │   │   ├── Home.js
│   │   │   ├── Navbar.js
│   │   │   └── Title.js
│   │   ├── Repos
│   │   │   └── Repos.js
│   │   ├── Following
│   │   │   └── Following.js
│   │   ├── Followers
│   │   │   └── Followers.js
│   ├── components
│   │   ├── UserCard.js
│   │   └── SearchBar.js
│   ├── App.js
│   └── index.js
├── public
│   ├── index.html
│   └── ...
├── package.json
├── README.md
└── ...
```

## Dependencies

- React
- React Router DOM
- Axios
- React Toastify
- Tailwind CSS

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify this template to suit your project's needs. Make sure to replace the placeholder text with your actual GitHub repository URL and any other specific details relevant to your project.
