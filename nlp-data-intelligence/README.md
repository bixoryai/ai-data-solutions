# NLP Data Intelligence - Dashboard Demo

This directory contains the source code for the NLP Data Intelligence dashboard demo, a web application built with React and Tailwind CSS.

## Overview

The dashboard demonstrates key Natural Language Processing (NLP) capabilities, including document summarization, sentiment analysis, named entity recognition (NER), and keyword extraction. It is designed to be a standalone, interactive showcase that runs entirely in the browser using mock data.

For a detailed project scope and feature list, please see the [Product Requirement Document (PRD.md)](PRD.md).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  **Navigate to the dashboard directory:**
    ```bash
    cd nlp-data-intelligence/dashboard-demo
    ```

2.  **Install dependencies:**
    This command reads the `package.json` file and installs all the necessary libraries.
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server and view the dashboard in your browser, run:
```bash
npm start
```
This will typically open the application at `http://localhost:3000`. The server supports hot-reloading, so any changes you make to the code will be reflected instantly in the browser.

## Building for the Portal

To create a static, optimized build of the dashboard for deployment in the main portal (`../../index.html`), run the following command:
```bash
npm run build
```
This will generate a `build` directory containing all the necessary static files (`index.html`, CSS, and JavaScript). The main portal is configured to link directly to the `build/index.html` file within this solution's directory.

## Project Structure

```
dashboard-demo/
├── build/                   # Output directory for the static build
├── public/                  # Static assets (HTML template, favicon, etc.)
├── src/                     # Application source code
│   ├── components/          # Reusable React components
│   ├── data/                # Mock data for the demo
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main application component
│   └── index.js             # Application entry point
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md                # This file
``` 