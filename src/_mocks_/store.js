const storage = [];

export default {
  getItem: (key) => storage[key],
  setItem: (key, value) => {
    storage[key] = value;
  },
};
