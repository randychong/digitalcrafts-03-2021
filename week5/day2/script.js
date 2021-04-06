const getPeopleData = async () => {

    let peopleData = await fetch("https://fakerapi.it/api/v1/persons?_quantity=5");
    let json = await peopleData.json();

    let counter = 1;
    for (let person of json.data) {
        const people = document.createElement("p");
        people.className = "people-name";
        people.innerHTML = person.firstname + " " + person.lastname;
        const birthday = document.createElement("p");
        birthday.className = "birthday";
        birthday.innerHTML = person.birthday
        const peopleDiv = document.querySelector(".people-container");
        peopleDiv.append(people, birthday);
        counter += 1;
    }
    return json;
}

const searchButton = document.querySelector(".search-people");
searchButton.addEventListener("click", () => getPeopleData())

const getCompanyData = async () => {

    let companyData = await fetch("https://fakerapi.it/api/v1/companies?_quantity=5");
    let json = await companyData.json();
    console.log(json)
}