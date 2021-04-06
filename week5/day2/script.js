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

const peopleButton = document.querySelector(".search-people");
peopleButton.addEventListener("click", () => getPeopleData())

const getCompanyData = async () => {

    let companyData = await fetch("https://fakerapi.it/api/v1/companies?_quantity=5");
    let json2 = await companyData.json();
    console.log(json2);

    let counter = 1;
    for (let company of json2.data) {
        const companies = document.createElement("p");
        companies.className = "companies";
        companies.innerHTML = company.name;
        const website = document.createElement("p");
        website.className = "website";
        website.innerHTML = company.website;
        const companyDiv = document.querySelector(".company-container");
        companyDiv.append(companies, website);
        counter += 1;
    }
}
const companyButton = document.querySelector(".search-company");
companyButton.addEventListener("click", () => getCompanyData())