/***
 * Input: array of strings
 * output: String seperated by commas.  Displaying prerequesites dependencies first then the dependents.
 ***/
module.exports = function search(grid) {
  const buildString = input => {
    object = {};
    /***
     * This will determine if the dependencies go in a circle.
     * output: tru or false 
     ***/
    const validate = obj => {
      const keys = Object.keys(obj).filter(item => !!obj[item]);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i].trim();
        let first = key;
        while (!!key) {
          if (obj[key] === first) {
            return false;
          }
          key = obj[key];
        }
      }
      return true;
    };

    input.forEach(item => {
      try {
        let key = item.split(":")[0].trim();
        let value = item.split(":")[1].trim();
        object[key] = value;
      } catch (e) {}
    });
    if (validate(object)) {
      let list = Object.keys(object)
        .filter(key => !!!object[key])
        .concat(Object.keys(object).filter(key => !!object[key]))
        .join(",");
      return list;
    } else {
      throw "invalid input;";
    }
  };

  let buff = "";
  try {
    buff = buildString(grid);
  } catch (e) {
    console.log(e);
    console.log(grid);
    buff = "";
  }
  return buff;
};
