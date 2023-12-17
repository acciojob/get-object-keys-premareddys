//your JS code here. If required.
const student = {
	name : "Jhon",
	age : 30,
	city : "New York"
};
Object.prototype.getKeys = function () {
  return Object.keys(this);
};
 
console.log(student.getKeys());


