const db = require('../data/db-config.js');


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep 
}

function find () {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where('id', id).first()
}

function findSteps(id) {

    /*
    select id, scheme_name, step_number, instructions 
    from [steps] as st
    join [schemes] as sc
        on st.scheme_id = sc.id 
        where st.scheme_id = 1
        return db('steps')

        db.select('id','scheme_name','step_number','instructions')
    */

    return db('steps')
        .innerJoin('schemes','steps.scheme_id','schemes.id')
        .select('steps.id','schemes.scheme_name','steps.step_number','steps.instructions')
        .where('steps.scheme_id', id)
        .orderBy('steps.step_number')
}

function add(scheme) {
    return db('schemes')
        .insert(scheme)
}

function addStep(step, scheme_id) {

    /* insert into [steps] (step_number, instructions, scheme_id)
        values ('1', 'Go to Lambda', '8')
    */
    
    return db('steps')
        .insert({
            step_number: step.step_number,
            instructions: step.instructions,
            scheme_id: scheme_id
        })
}

function update(changes, id) {
    return db('schemes')
        .where('id', id)
        .update(changes)
}

function remove(id) {
    return db('schemes')
        .where('id', id)
        .del()
}