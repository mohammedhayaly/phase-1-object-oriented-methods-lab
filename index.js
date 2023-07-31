function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

BoardMember.prototype.veto = function() {
  return "No, I must disagree";
};

BoardMember.prototype.approve = function() {
  return "You can do that!";
};

BoardMember.prototype.doCharity = function() {
  return "I like to help people.";
};

BoardMember.prototype.releasePressStatement = function() {
  return "You will see great things from Scuber.";
};

BoardMember.prototype.sayHi = function() {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
};

// Test the BoardMember constructor and methods
const boardMember1 = new BoardMember("John Doe", "New York", "Finance");
console.log(boardMember1.veto()); // Output: "No, I must disagree"
console.log(boardMember1.approve()); // Output: "You can do that!"
console.log(boardMember1.doCharity()); // Output: "I like to help people."
console.log(boardMember1.releasePressStatement()); // Output: "You will see great things from Scuber."
console.log(boardMember1.sayHi());
