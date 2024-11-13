function skillmember() {
  var member = {
    name: "John",
    age: 30,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
      city: "New York",
      country: "USA",
    },
  };
  // Convert the object into a JSON string.
  var member = JSON.stringify(member);
  // Display the JSON string.
  console.log(member);
}