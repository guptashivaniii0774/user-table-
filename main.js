const button = document.querySelector('button')
const tableOne = document.getElementById('dataOne')
const tableTwo = document.getElementById('dataTwo')
const tableThree = document.getElementById('dataThree')
const tableFour = document.getElementById('dataFour')
const tableFive = document.getElementById('dataFive')





const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    data.forEach((item) => {
        let cusId = document.createElement("table");
        cusId.innerText = item.id;
        tableOne.appendChild(cusId);

        let name = document.createElement("table");
        name.innerText = item.name;
        tableTwo.appendChild(name);

        let userName = document.createElement("table");
        userName.innerText = item.username;
        tableThree.appendChild(userName);

        let EmailId = document.createElement("table");
        EmailId.innerText = item.email;
        tableFour.appendChild(EmailId);


        let mobileNo = document.createElement("table");
        mobileNo.innerText = item.phone;
        tableFive.appendChild(mobileNo);

    });
};

// button.addEventListener("click", fetchData);