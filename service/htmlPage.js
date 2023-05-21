const { resolve } = require("path");

const BASE_PATH = './public/view';
htmlPage = (path) => {
  path = path.replace(".","/");
  return resolve(`${BASE_PATH}/${path}.html`) ;
};

module.exports = { htmlPage };
