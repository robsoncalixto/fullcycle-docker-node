const db = require('./db');

module.exports = {  
    insert: async (person) => {      
      return await db.insertPeople(person);
    },
    findAll: async () =>{
     return  await db.selectPeople();
    },
    deleteAll: async () => {
        return await db.deletePeople();
    }
}