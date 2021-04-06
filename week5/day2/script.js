const getPeopleData = async () => {

    let peopleData = await fetch("https://fakerapi.it/api/v1/persons?_quantity=5");
    let json = await peopleData.json();
    console.log(json)

    let counter = 1;
    for (let person of json.data) {
        console.log(person);
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
getPeopleData();