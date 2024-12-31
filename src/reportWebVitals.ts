import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Define the reportWebVitals function that accepts a callback
const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Importing web-vitals functions and passing the callback
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
