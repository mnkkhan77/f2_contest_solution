/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((ele) => {
    if (ele.profession === "developer") {
      console.log(ele);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((ele) => {
    if (ele.profession === "developer") {
      console.log(ele);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let person = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(person);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((ele) => ele.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let people = [
    { id: 5, name: "james", age: "21", profession: "developer" },
    { id: 6, name: "alex", age: "22", profession: "developer" },
    { id: 7, name: "jason", age: "23", profession: "intern" },
  ];
  let ans = arr.concat(people);
  console.log(ans);
}
