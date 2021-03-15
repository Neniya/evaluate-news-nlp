# Texts Sentiment Analysis

## **Introduction**

Texts Sentimet Analysis project is a project for Udacity Front-end Nanodegree. This application analyses sentiments in the text according to the provided URL.
Sentiment analise is provided via external API - **Meaningcloud Sentiment Analysis**.

## The goal of this project:

- Using APIs and creating requests to external urls and parse the response body to dynamically fill content on the page.
- Setting up Webpack
- Using Sass styles
- Using Webpack Loaders and Plugins
- Creating layouts and page design
- Setting up service workers
- Creating Unit Tests using Jest Framework

## **Getting Started**

### Getting Setup

#### Installing Node and NPM

This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

#### Installing Express Environment

For setting up a local server install the Express package from the terminal in the directory, where server.js file is. Run:

```bash
npm install express
```

#### Installing project dependencies

For install `cors` and `body-parser` open your terminal in the directory, where server.js file is and run:

```bash
npm install cors
npm install body-parser
```

### API Credentials

Create API credentials on [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis) and put it in the .env file:

```
API_KEY=YourAPIKey
```

### Run Local Server

For running local server in the main directory of project run command:

```
npm run build-prod
npm run start
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### Run unit tests

```bash
$ npm test
```
