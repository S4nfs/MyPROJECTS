const users = [{ username: "sagar", email: "sagar@gmail.com" },
{ username: "prateek", email: "prateek@gmail.com" },
{ username: "ajay", email: "ajay@gmail.com" },
{ username: "vaishali", email: "vaishali@gmail.com" }];

function letsSearch(array, val) {
  for (let names of array) {
    if (names['username'] === val)
      return true;

  }
  return false;
}

console.log(letsSearch(users, 'ajay'));