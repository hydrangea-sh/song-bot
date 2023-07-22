# Song-Bot (In Progress)

Please note: This project and README are currently a work in progress. Information may be incomplete or change frequently.

## Getting Started

### Prerequisites
- Node.js installed on your system.
- A Discord account and a server where you can add bots.

### Setup
1. Clone this repository to your local machine.
```
git clone https://github.com/elizabeth-kang/song-bot.git
```
2. Navigate into the project directory.
```
cd song-bot
```
3. Install the project dependencies.
```
npm install
```
4. Ceate a .env file in the root directory and add your Discord bot token as CLIENT_TOKEN.
```
CLIENT_TOKEN='Your_Bot_Token_Here'
```
5. Ceate a .dev.env file in the root directory and add your Discord bot token as CLIENT_TOKEN.
```
CLIENT_TOKEN='Your_Bot_Token_Here'
```

### Usage
This project utilizes the following NPM scripts:

- **"start"**: This script starts your application. It runs the **node .** command which starts the main file in your Node.js project.
- **"dev"**: This script starts your application in development mode with **nodemon**, a tool that helps develop Node.js-based applications by automatically restarting the application when file changes in the directory are detected.
- **"build"**: This script builds your application. It runs the **tsc** command, which compiles your TypeScript code to JavaScript.
