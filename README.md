# MasakIn 
## Contents

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements-for-development)
- [Installation](#installation-for-development)

## Description

**MasakIn** is a web-based recipe sharing that applicaion that allow user to share their recipe, liked, and comment. Just like social media. In this app, user could take a look into recipe including it's ingredients and video step.

## Features

- Add and update recipe
- View user recipe
- Like or bookmark some recipe
- and etc.

## Requirements for Development

- [`Node Js`](https://nodejs.org/en/)
- [`npm`](https://www.npmjs.com/get-npm)
- [`React.Js`](https://reactjs.org/)
- [`MasakIn Backend`](https://github.com/Doa-Ibu-Team/Backend_MasakIn)

## Installation for Development

1. Open your terminal or command prompt
2. Type `git clone https://github.com/Doa-Ibu-Team/Frontend_Masakin.git`
3. Open the folder and type `npm install` or `yarn install` for install dependencies from package.json
4. Create file **_.env_** in root directory with the following contents :

```bash
REACT_APP_BASE_URL = "your_backend_API_URL"
```

Example :

- http://host_backend:port_backend is http://localhost:8000

so, you can write in .env file like this :

```bash
BASE_URL = "http://localhost:8000"
```

5. Before run this project, you must configure and run backend. You can find backend for this project [here](https://github.com/Doa-Ibu-Team/Backend_MasakIn)
6. Type `npm run server` in terminal for running backend.
7. If you want to run this project, just type `npm start` then enter on your project folder

<img src="https://user-images.githubusercontent.com/70320451/107330676-78667380-6ae4-11eb-9947-58f3355240c0.jpg" />

