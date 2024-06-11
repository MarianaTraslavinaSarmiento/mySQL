import { connection } from "../../helpers/conexion.js";


export const getAllLastName = async()=> {
    const [result] = await connection.query(
        'SELECT lastName FROM employees'
    );
    return result;
}

export const getAll = async()=> {
    const [result] = await connection.query(
        'SELECT CONCAT(lastName, " ", firstName) AS fullName, extension, email, officeCode, reportsTo, jobTitle FROM employees'
    );
    return result;
}

export const getAllEmployeesForEachJobTitle = async(puesto)=> {

    const [result] = await connection.query(
        `SELECT jobTitle, COUNT(*) AS total FROM employees WHERE jobTitle LIKE '${puesto}' GROUP BY jobTitle`
    );

    return result;

}

