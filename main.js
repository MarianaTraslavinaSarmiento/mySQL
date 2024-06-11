
import { getAll, getAllEmployeesForEachJobTitle, getAllLastName } from "./js/module/employees.js"


// const [results] = await connection.query(
//     'SELECT * FROM employees',
// );

// console.log(results);

// console.log(await getAllLastName())
// console.log(await getAll());
console.log(await getAllEmployeesForEachJobTitle("Sales Rep"));