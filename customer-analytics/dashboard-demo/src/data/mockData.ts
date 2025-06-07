// src/data/mockData.ts

export const segmentationData = [
  { name: 'New Customers', value: 400, fill: '#8884d8' },
  { name: 'Returning Customers', value: 300, fill: '#82ca9d' },
  { name: 'High-Value Customers', value: 300, fill: '#ffc658' },
  { name: 'At-Risk Customers', value: 200, fill: '#ff8042' },
];

export const purchaseTrendsData = [
  { name: 'Jan', '2023': 4000, '2024': 2400 },
  { name: 'Feb', '2023': 3000, '2024': 1398 },
  { name: 'Mar', '2023': 2000, '2024': 9800 },
  { name: 'Apr', '2023': 2780, '2024': 3908 },
  { name: 'May', '2023': 1890, '2024': 4800 },
  { name: 'Jun', '2023': 2390, '2024': 3800 },
  { name: 'Jul', '2023': 3490, '2024': 4300 },
];

export const mockCustomers = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Williams' },
  { id: 3, name: 'Charlie Brown' },
];

export const mockProducts = [
  { id: 101, name: 'Smartwatch' },
  { id: 102, name: 'Wireless Headphones' },
  { id: 103, name: 'Laptop Backpack' },
  { id: 104, name: 'Coffee Maker' },
];

export const mockPurchaseHistory = {
  1: [101, 103], // Alice bought a Smartwatch and a Backpack
  2: [102],       // Bob bought Headphones
  3: [104],       // Charlie bought a Coffee Maker
};

// The old detailedSegmentationData is now the 'All' category inside the new structure
const detailedSegmentationData_90 = [
  { name: 'Urban High-Value', 'Avg. Purchase': 450, 'Customer Count': 150 },
  { name: 'Suburban High-Value', 'Avg. Purchase': 420, 'Customer Count': 50 },
  { name: 'Urban Mid-Value', 'Avg. Purchase': 250, 'Customer Count': 500 },
  { name: 'Suburban Mid-Value', 'Avg. Purchase': 265, 'Customer Count': 450 },
  { name: 'Rural Mid-Value', 'Avg. Purchase': 280, 'Customer Count': 100 },
  { name: 'Urban Low-Value', 'Avg. Purchase': 80, 'Customer Count': 1200 },
  { name: 'Suburban Low-Value', 'Avg. Purchase': 95, 'Customer Count': 1000 },
  { name: 'Rural Low-Value', 'Avg. Purchase': 110, 'Customer Count': 300 },
];

export const analyticsDataByDateRange = {
  '90': {
    segmentation: {
      'All': detailedSegmentationData_90,
      'New': [
        { name: 'New Urban', 'Avg. Purchase': 75, 'Customer Count': 800 },
        { name: 'New Suburban', 'Avg. Purchase': 90, 'Customer Count': 650 },
        { name: 'New Rural', 'Avg. Purchase': 100, 'Customer Count': 200 },
      ],
      'Returning': [
        { name: 'Returning High-Value', 'Avg. Purchase': 480, 'Customer Count': 120 },
        { name: 'Returning Mid-Value', 'Avg. Purchase': 310, 'Customer Count': 350 },
        { name: 'Returning Low-Value', 'Avg. Purchase': 120, 'Customer Count': 500 },
      ],
    },
    funnel: [
      { value: 10000, name: 'Visited Site', fill: '#8884d8' },
      { value: 8000, name: 'Viewed Product', fill: '#83a6ed' },
      { value: 5000, name: 'Added to Cart', fill: '#8dd1e1' },
      { value: 4000, name: 'Started Checkout', fill: '#82ca9d' },
      { value: 2500, name: 'Purchased', fill: '#a4de6c' },
    ],
    rfm: [
      { x: 80, y: 5, z: 500, segment: 'Champions' },
      { x: 75, y: 8, z: 800, segment: 'Loyal Customers' },
      { x: 90, y: 2, z: 200, segment: 'At-Risk' },
      { x: 85, y: 1, z: 50, segment: 'Lost' },
      { x: 70, y: 1, z: 120, segment: 'New Customers' },
    ],
  },
  '60': {
    segmentation: {
      'All': detailedSegmentationData_90.map(d => ({...d, 'Avg. Purchase': Math.round(d['Avg. Purchase'] * 0.8), 'Customer Count': Math.round(d['Customer Count'] * 0.7)})).slice(0, 6),
      'New': [
        { name: 'New Urban', 'Avg. Purchase': 65, 'Customer Count': 500 },
        { name: 'New Suburban', 'Avg. Purchase': 80, 'Customer Count': 450 },
      ],
      'Returning': [
        { name: 'Returning High-Value', 'Avg. Purchase': 450, 'Customer Count': 90 },
        { name: 'Returning Mid-Value', 'Avg. Purchase': 290, 'Customer Count': 280 },
        { name: 'Returning Low-Value', 'Avg. Purchase': 110, 'Customer Count': 400 },
      ],
    },
    funnel: [
      { value: 7500, name: 'Visited Site', fill: '#8884d8' },
      { value: 6000, name: 'Viewed Product', fill: '#83a6ed' },
      { value: 3500, name: 'Added to Cart', fill: '#8dd1e1' },
      { value: 2800, name: 'Started Checkout', fill: '#82ca9d' },
      { value: 1800, name: 'Purchased', fill: '#a4de6c' },
    ],
    rfm: [
      { x: 50, y: 4, z: 450, segment: 'Champions' },
      { x: 60, y: 7, z: 750, segment: 'Loyal Customers' },
      { x: 55, y: 2, z: 180, segment: 'At-Risk' },
      { x: 40, y: 1, z: 110, segment: 'New Customers' },
    ],
  },
  '30': {
    segmentation: {
      'All': detailedSegmentationData_90.map(d => ({...d, 'Avg. Purchase': Math.round(d['Avg. Purchase'] * 0.6), 'Customer Count': Math.round(d['Customer Count'] * 0.5)})).slice(0, 4),
      'New': [
        { name: 'New Urban', 'Avg. Purchase': 60, 'Customer Count': 300 },
        { name: 'New Suburban', 'Avg. Purchase': 70, 'Customer Count': 250 },
      ],
      'Returning': [
        { name: 'Returning High-Value', 'Avg. Purchase': 420, 'Customer Count': 60 },
        { name: 'Returning Mid-Value', 'Avg. Purchase': 280, 'Customer Count': 150 },
      ],
    },
    funnel: [
      { value: 4000, name: 'Visited Site', fill: '#8884d8' },
      { value: 3000, name: 'Viewed Product', fill: '#83a6ed' },
      { value: 1500, name: 'Added to Cart', fill: '#8dd1e1' },
      { value: 1200, name: 'Started Checkout', fill: '#82ca9d' },
      { value: 800, name: 'Purchased', fill: '#a4de6c' },
    ],
    rfm: [
      { x: 20, y: 3, z: 400, segment: 'Champions' },
      { x: 30, y: 5, z: 650, segment: 'Loyal Customers' },
      { x: 15, y: 1, z: 90, segment: 'New Customers' },
    ],
  },
};

export const rfmSegmentColors = {
  'Champions': '#82ca9d',
  'Loyal Customers': '#8884d8',
  'At-Risk': '#ffc658',
  'Lost': '#ff8042',
  'New Customers': '#8dd1e1',
}; 