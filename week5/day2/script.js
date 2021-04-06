const getPeopleData = async ()=> {

    const peopleData = await fetch("https://fakerapi.it/api/v1/persons")
    const json = peopleData.json()
    console.log(json)

    const people = document.querySelector(".people-info")
}
getPeopleData()