function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  
  countDown(10); 

  function writeCards(names) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      messages.push(message);
    }
    return messages;
  }