import { connection } from "../../helpers/conexion.js";

//Lista de empleados que trabajan en una oficina específica (por ejemplo, '1')

export const getAllEmployeesThatWorksInAOffice = async({office} = {office: "2"})=>{
    const [result] = await connection.execute(`SELECT employeeNumber, lastName, firstName, extension, email, officeCode, reportsTo, jobTitle 
    FROM employees 
    WHERE officeCode = ?`, [office] );
    result["count"] = result.length;

    return result;
}

//Lista de todos los empleados con su jefe (si tienen)

export const getAllEmployeesWithManager = async()=>{
    const [result] = await connection.execute(`
    SELECT e.employeeNumber AS 'Codigo empleado', CONCAT(e.firstName, ' ', e.lastName) AS 'Nombre empleado', CONCAT(j.firstName, ' ', j.lastName) AS 'Nombre del jefe' FROM employees as e INNER JOIN employees as j ON e.employeeNumber = j.reportsTo`);
    result["count"] = result.length;

    return result;
}

//Listar todos los empleados junto con la oficina en la que trabajan


export const getAllEmployeesWithTheOfficeTheirWorks = async()=>{
    const [result] = await connection.query(
        `SELECT CONCAT(e.firstName, ' ', e.lastName) AS 'Empleado', o.officeCode AS 'Codigo oficina' FROM employees as e INNER JOIN offices as o ON o.officeCode=e.officeCode;`
    );
    return result;
}


