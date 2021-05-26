export const getRandomInt = (n) => Math.floor(Math.random() * n) + 1;

export const delay = (delayInMs = 0) => new Promise((res) => setTimeout(res, delayInMs));
