let employee = {
    name: "Sam",
    streetAddress:"11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee};
    newEmployee[key]= value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let cloneEmployee = {...employee};
    delete cloneEmployee[key];
    return cloneEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;

}
