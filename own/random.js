function pickRandom(argument) {
    if (typeof argument === 'number') {
      return Math.floor(Math.random() * Math.floor(argument)) + 1;
    }
    if (Array.isArray(argument)) {
      return argument[Math.floor(Math.random() * argument.length)];
    }
  }


  /////////////////////////////
  function dice() {
    // method to set the channel randomly. Let’s say the TV has only 50 channels.
        this.channel = Math.floor(Math.random() * 51);
        console.log("New channel is now:", this.channel);  
}