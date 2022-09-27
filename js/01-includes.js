function includes(array, value) {
    // Change code below this line
  let message = false;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === value) {
        message = true;
      }
    }
    return message;
    // Change code above this line
  }