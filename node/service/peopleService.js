const peopleRepository = require('../repositories/peopleRepository');
const people = require('../repositories/people.json');

async function insertPeople(){
    for(let person of people ){
        await peopleRepository.insert(person);
    }
}

module.exports = async function peopleService(req, res){
    await peopleRepository.deleteAll();
    await insertPeople();
    const retrieve = await peopleRepository.findAll();
    let list =``;
    for(let person of retrieve){
        list +=`<li>${person.name}</li>`;
    }
    return  res.send(`<h1>Full Cycle Rocks!</h1>
    <ul>${list}</ul>`);
}