export const getTemp = (isMetric, temp) => {
  if (temp) {
    const temperature = isMetric ? temp : (temp * 9) / 5 + 32;
    return Math.round(temperature);
  }
  return;
};

export const formatTemp = (temp) => {
  return temp + '°';
};
