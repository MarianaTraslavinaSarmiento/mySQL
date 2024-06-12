import { connection } from "../../helpers/conexion.js";


//Detalles de un cliente específico (por ejemplo, customerNumber = 112

export const getDetailsOfClients = async({customerNumber} = {customerNumber: "112"})=>{
    const [result] = await connection.execute(`SELECT customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit FROM customers WHERE customerNumber = ?`, [customerNumber] );
    result["count"] = result.length;

    return result;
}

//Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid')

export const getAllClientsAccordingToTheirCity = async({city} = {city: "Madrid"})=>{
    const [result] = await connection.execute(`SELECT customerNumber, customerName, city FROM customers WHERE city = ?`, [city] );
    result["count"] = result.length;

    return result;
}

//Listar todos los clientes junto con su representante de ventas

export const getAllCustomersWithSalesRepresentative = async()=>{
    const [result] = await connection.query(
        `SELECT cus.customerNumber AS 'Codigo cliente', cus.customerName 'Nombre cliente', cus.salesRepEmployeeNumber AS 'Codigo representante',CONCAT(e.firstName,' ', e.lastName) AS 'Nombre representante de ventas' FROM customers AS cus INNER JOIN employees as e ON cus.salesRepEmployeeNumber=e.employeeNumber;`
    );
    return result;
}

