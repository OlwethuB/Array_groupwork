let array = [];

function add() {
  let valueBe = document.getElementById("input").value;
  array.push(valueBe);
  valueBe = document.getElementById("dis").innerHTML = array;
}

let people = [
  {
    name: "Timothy",
    surname: "Barry",
    age: 20,
  },
  {
    name: "Sidwell",
    surname: "Batyi",
    age: 18,
  },
  {
    name: "Lyle",
    surname: "Brown",
    age: 23,
  },
  {
    name: "Xola",
    surname: "Bangaza",
    age: 18,
  },
  {
    name: "Olwethu",
    surname: "Bhiya",
    age: 18,
  },
  {
    name: "Zulaigah",
    surname: "Benjamin",
    age: 20,
  },
  {
    name: "Marcel",
    surname: "Brown",
    age: 19,
  },
  {
    name: "Ridhaa",
    surname: "Gabier",
    age: 22,
  },
];

let myPeople = document.getElementById("objectsPeople");
people.forEach((per) => {
  myPeople.innerHTML += `
  <table class="table table-dark text-white text-center m-0 p-0 border-white">
        <tr class="" style="width: 33%">
            <td class="fs-4 text-center border-2" style="width: 33%">${per.name}</td>
            <td class="fs-4 text-center border-2" style="width: 33%">${per.surname}</td>
            <td class="fs-4 text-center border-2" style="width: 33%">${per.age}</td>
        </tr>
    </table>
    `;
});
let peoples = [];

function addPerson() {
  let Value = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    age: document.getElementById("age").value,
  };

  peoples.push(Value);

  let myPeoples = document.getElementById("tableInfo");
  peoples.forEach((data) => {
    myPeoples.innerHTML += `<tr class="" style="width: 33%">
  <td class="fs-4 text-center border-2" style="width: 33%">${data.name}</td>
  <td class="fs-4 text-center border-2" style="width: 33%">${data.surname}</td>
  <td class="fs-4 text-center border-2" style="width: 33%">${data.age}</td>
  </tr>
  `;
  });
}

 

function addRow() {
  let table = document.getElementById("Group");
  let row = document.createElement("tr");
  let nam = document.createElement("td");
  let namt = document.createTextNode(document.getElementById("Names").value);
  nam.appendChild(namt);
  row.appendChild(nam);

  let sur = document.createElement("td");
  let surt = document.createTextNode(document.getElementById("Surnames").value);
  sur.appendChild(surt);
  row.appendChild(sur);

  let age = document.createElement("td");
  let aget = document.createTextNode(document.getElementById("Ages").value);
  age.appendChild(aget);
  row.appendChild(age);
  table.appendChild(row);
}
