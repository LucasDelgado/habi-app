export const set = (key, steps) => {
  try {
    localStorage.setItem(key, JSON.stringify({ ...steps }));
  } catch (error) {
    console.log(error);
  }
};

export const get = (key) => {
  try {
    let saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.log(error);
  }
};

export default { set, get };
