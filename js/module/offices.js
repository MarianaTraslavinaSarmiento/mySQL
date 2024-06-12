import { connection } from "../../helpers/conexion.js";

//Detalles de oficinas en un país específico (por ejemplo, 'USA')

export const getAllOffices = async({country} = {country: "USA"})=>{
    const [result] = await connection.execute(`SELECT officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory FROM offices WHERE country = ?`, [country] );
    result["count"] = result.length;

    return result;
}

//Listar todas las oficinas y el número de empleados en cada una

export const getAllEmployeesOfEachOffices = async()=>{
    const [result] = await connection.query(
        `SELECT o.officeCode, COUNT(e.employeeNumber) AS 'Numero de empleados' FROM offices AS o INNER JOIN employees AS e ON e.officeCode = o.officeCode GROUP BY o.officeCode;`
    );
    return result;
}