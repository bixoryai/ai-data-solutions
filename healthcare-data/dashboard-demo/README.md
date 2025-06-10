# AI-Powered Healthcare Analytics Dashboard

This directory contains the source code for an advanced, interactive dashboard showcasing AI-powered solutions for the healthcare industry.

## Project Vision

This project demonstrates how modern AI can transform raw healthcare data into actionable, predictive, and life-saving insights. The dashboard is a React-based application built with TypeScript and styled with Tailwind CSS, designed to be a compelling showcase for hospital administrators, clinicians, and data scientists.

The user interface is standardized to align with the other solutions in the AI Data Solutions portal, providing a consistent and responsive user experience across all devices.

## Current Status: Ready for Review

The dashboard is feature-complete according to the initial `PRD.md` and is ready for review and feedback. All four core modules have been implemented with simulated data and AI logic. The application is fully responsive and integrated into the main solutions portal.

## Implemented Features

1.  **Predictive Analytics Dashboard:**
    *   **Patient Readmission Risk:** An AI model analyzes patient data to generate a real-time risk score, allowing for proactive intervention.
    *   **Disease Outbreak Forecasting:** A map-based visualization predicts potential hotspots for infectious diseases to help with resource planning.
    *   **AI-Driven KPIs:** Key metrics like 'Average Length of Stay' and 'Bed Occupancy Rate' feature AI-powered forecasts.

2.  **AI-Assisted Medical Image Analysis:**
    *   A visually impressive module where users can select a sample X-ray or MRI.
    *   The system simulates a deep learning analysis, highlighting potential anomalies (e.g., tumors, fractures) and providing diagnostic confidence scores.

3.  **NLP for Clinical Intelligence:**
    *   **Clinical Note Summarizer:** An engine processes lengthy, unstructured doctor's notes and automatically generates concise, structured summaries.
    *   **Patient Feedback Analysis:** Uses sentiment analysis to process patient survey responses, identifying key concerns and areas for improvement.

4.  **Resource Optimization Simulator:**
    *   An interactive tool where administrators can adjust variables like staffing levels or ward beds.
    *   The UI displays real-time, AI-predicted impacts on key outcomes like patient wait times, staff burnout risk, and operational costs.

5.  **Settings Page:**
    *   A placeholder page for future user preferences and dashboard configuration.

## How to Run Locally

To run this dashboard demo locally, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) (v8.x or higher)

### Instructions

1.  **Navigate to the directory**:
    ```bash
    cd healthcare-data/dashboard-demo
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm start
    ```
    This will open the dashboard at `http://localhost:3000`.

4.  **Build for production**:
    ```bash
    npm run build
    ```
    This command bundles the app into static files in the `build/` directory, ready for deployment. 