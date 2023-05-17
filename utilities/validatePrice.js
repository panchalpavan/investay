const validatePrice = (price) => {
    if (price.toString().length >= 8) {
      const res = `${(price / 10000000).toFixed(2)} Cr`;
      return res;
    }
    if (price.toString().length >= 6) {
      const res = `${(price / 100000).toFixed(2)} Lac`;
      return res;
    }
    if (price.toString().length >= 4) {
      const res = `${(price / 1000).toFixed(2)} K`;
      return res;
    }
  };

export default validatePrice;