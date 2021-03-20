const e = require('express');

const getRate = (req, res) => {
  const weight = +req.query.Weight
  const type = req.query.type
  const params = {}

  if (type == "Stamped") {
    if (weight <= 1) {
      var price = 0.55;
      params.rate = price
    } else if (weight <= 2) {
      var price = 0.75;
      params.rate = price
    } else if (weight <= 3) {
      var price = 0.95;
      params.rate = price
    } else if (weight <= 3.5) {
      var price = 1.15;
      params.rate = price
    }
    else {
      params.error = "Too heavy"
    }
  }
  else if (type == "Metered") {
    if (weight <= 1) {
      var price = 0.51;
      params.rate = price
    } else if (weight <= 2) {
      var price = 0.71;
      params.rate = price
    } else if (weight <= 3) {
      var price = 0.91;
      params.rate = price
    } else if (weight <= 3.5) {
      var price = 1.11;
      params.rate = price
    } else {
      params.error = "Too heavy"
    }
  }
  else if (type == "Flats") {
    if (weight <= 1) {
      var price = 1.00;
      params.rate = price
    } else if (weight <= 2) {
      var price = 1.20;
      params.rate = price
    } else if (weight <= 3) {
      var price = 1.40;
      params.rate = price
    } else if (weight <= 4) {
      var price = 1.60;
      params.rate = price
    } else if (weight <= 5) {
      var price = 1.80;
      params.rate = price
    } else if (weight <= 6) {
      var price = 2.00;
      params.rate = price
    } else if (weight <= 7) {
      var price = 2.20;
      params.rate = price
    } else if (weight <= 8) {
      var price = 2.40;
      params.rate = price
    } else if (weight <= 9) {
      var price = 2.60;
      params.rate = price
    } else if (weight <= 10) {
      var price = 2.80;
      params.rate = price
    } else if (weight <= 11) {
      var price = 3.00;
      params.rate = price
    } else if (weight <= 12) {
      var price = 3.20;
      params.rate = price
    } else if (weight <= 13) {
      var price = 3.40;
      params.rate = price
    } else {
      params.error = "Too heavy"
    }
  } else if (type == "FirstClass") {
    if (weight <= 1) {
      var price = 4.00;
      params.rate = price
    } else if (weight <= 2) {
      var price = 4.00;
      params.rate = price
    } else if (weight <= 3) {
      var price = 4.00;
      params.rate = price
    } else if (weight <= 4) {
      var price = 4.00;
      params.rate = price
    } else if (weight <= 5) {
      var price = 4.80;
      params.rate = price
    } else if (weight <= 6) {
      var price = 4.80;
      params.rate = price
    } else if (weight <= 7) {
      var price = 4.80;
      params.rate = price
    } else if (weight <= 8) {
      var price = 4.80;
      params.rate = price
    } else if (weight <= 9) {
      var price = 5.50;
      params.rate = price
    } else if (weight <= 10) {
      var price = 5.50;
      params.rate = price
    } else if (weight <= 11) {
      var price = 5.50;
      params.rate = price
    } else if (weight <= 12) {
      var price = 5.50;
      params.rate = price
    } else if (weight <= 13) {
      var price = 6.25;
      params.rate = price
    } else {
      params.error = "Too Heavy"
    }
  } else {
    params.error = "Error"
  }
  // Render with the parameters
  res.render('pages/results', params)
}

module.exports = getRate
