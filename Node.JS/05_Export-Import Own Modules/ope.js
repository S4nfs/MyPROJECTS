const add = (a, b) => {          //parameters
  return a + b;
};
// module.exports = add;        //To run this function we need to export it publicly, (module.exports = add) if only one function

const sub = (a, b) => {         
  return a - b;
};

const name = "Sagar";


// module.exports.addisShipped = add;       //if we want to export many functions 
// module.exports.subisShipped = sub;       
// module.exports.nameisShipped = name;
// OR use
module.exports = {add, sub, name};
