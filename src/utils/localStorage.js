function localStorageSetItem(key, value) {
  // Check if key is a string
  if (typeof key !== 'string') {
    console.error('Error: Key must be a string');
    return;
  }

  // const jsonValue=JSON.stringify(value);
  // localStorage.setItem(key, jsonValue);

  try {
    // Convert value to JSON string
    const jsonValue = JSON.stringify(value);
    // Set item in localStorage
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error setting item in localStorage:', error);
  }
}

function localStorageGetItem(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch {
    return value; // Return the raw value if parsing fails
  }
}

// Function to remove an item from localStorage
function localStorageRemoveItem(key) {
  // Remove item from localStorage
  localStorage.removeItem(key);
}

// Function to clear all items from localStorage
function localStorageClear() {
  // Clear all items from localStorage
  localStorage.clear();
}

export {
  localStorageSetItem,
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageClear,
};
