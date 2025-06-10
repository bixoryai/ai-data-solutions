# Computer Vision Analytics Dashboard

An advanced, interactive dashboard demonstrating AI-powered solutions for automated visual inspection and quality control in manufacturing.

This demo showcases a sophisticated system capable of processing and analyzing visual data in real-time to identify production defects, predict quality trends, and simulate operational scenarios.

## Key Features

The dashboard is organized into four powerful, interconnected modules:

### 1. **Live Visual Inspection**
A real-time simulation of a production line, featuring a video feed that analyzes components as they pass.
- **Dynamic Defect Detection**: See the AI model identify, classify, and highlight defects with bounding boxes and segmentation masks.
- **Interactive Controls**: Toggle between different product lines (e.g., circuit boards, textiles, automotive parts).
- **Upload & Analyze**: Pause the live feed and upload your own images or video clips to see the AI analyze them instantly.

### 2. **Defect Analytics Dashboard**
An interactive analytics suite that transforms raw defect data into actionable business intelligence.
- **Trend Analysis**: Visualize defect rates over time with interactive charts to identify patterns or process degradation.
- **Pareto & Distribution Charts**: Automatically generated Pareto charts to pinpoint the most frequent defect types, helping prioritize corrective actions.
- **Product Heatmaps**: View an aggregated heatmap overlaid on a product schematic, showing the most common locations for defects.

### 3. **Model Performance Monitoring**
A transparent look into the AI's performance, ensuring trust and reliability in the system.
- **Live Performance Metrics**: Track key metrics like Precision, Recall, and F1-score, updated in real-time as the model processes items.
- **Interactive Confusion Matrix**: Explore the model's classification accuracy across all defect types.
- **ROC Curve Analysis**: Compare the performance of different model versions or configurations to understand their trade-offs.

### 4. **Use Case & ROI Simulator**
An engaging module to explore the operational and financial impact of the AI solution.
- **Scenario Simulation**: Adjust variables like production speed, lighting conditions, or defect frequency to see how the model adapts.
- **ROI Calculator**: Input your current production volume, defect rates, and labor costs to get a clear estimate of the potential cost savings and return on investment.
- **"What-If" Analysis**: Simulate the impact of process improvements on overall quality and efficiency.

## Technology Stack

- **React & TypeScript**: For a robust and type-safe frontend application.
- **Tailwind CSS**: For rapid and consistent UI development.
- **Lucide Icons**: For a clean and modern icon set.
- **Recharts**: For rich, interactive data visualizations.
- **TensorFlow.js / ONNX Runtime**: For running AI models directly in the browser, enabling real-time client-side inference.

## Getting Started

First, ensure you have Node.js and npm installed.

### 1. Install Dependencies
Navigate to this directory in your terminal and run:
```bash
npm install
```

### 2. Run the Development Server
To start the demo application, run:
```bash
npm start
```
The dashboard will be available at `http://localhost:3000`. 