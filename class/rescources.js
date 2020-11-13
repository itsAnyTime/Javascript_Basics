// forin // for in // Use for … in to get all the enumerable properties of an object (both own and inherited)
// Here name is myself’s only own property,  greet is a property that myself inherited from its prototype object (Person.prototype).
function Person(name) {
    this.name = name;
    this.age = age;
}
Person.prototype.who = function() {
    console.log((this.name, ",", this.age, "years old"));
};


console.log("-----------get clock-------");

class Clock {
    constructor({ template }) {
      this.template = template;
      this.timer;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = "0" + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = "0" + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = "0" + secs;
  
      let output = this.template
        .replace("h", hours)
        .replace("m", mins)
        .replace("s", secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => {
        this.render();
      }, 1000);
    }
  }
  
  let clock = new Clock({template: "h:m:s"});
  clock.start();

  setTimeout(() => clock.stop(), 4000);
