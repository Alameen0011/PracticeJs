let users = [
    { name: "Alice", age: 25, role: "admin" },
    { name: "Bob", age: 30, role: "user" },
    { name: "Charlie", age: 35, role: "user" }
  ];
  

  let res = users.filter((val,index) => val.age == 25)

  console.log(res)