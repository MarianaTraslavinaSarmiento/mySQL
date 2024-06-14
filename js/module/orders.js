import { connection } from "../../helpers/conexion.js";

//Obtener todos los pedidos con estado 'Shipped'

export const getAllOrdersShipped = async()=>{
    const [result] = await connection.query(
        `SELECT orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber  FROM orders WHERE status = 'Shipped'`
    );
    return result;
}

//Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto

export const getAllOrdersMadeByClients = async({customerNumber} = {customerNumber: 112})=>{
    const [result] = await connection.execute(
    `SELECT c.customerNumber, c.customerName, od.orderNumber, od.productCode FROM customers AS c INNER JOIN orders AS o ON o.customerNumber=c.customerNumber INNER JOIN orderdetails AS od ON o.orderNumber=od.orderNumber WHERE c.customerNumber = ?`,[customerNumber])

    result["count"] = result.length;
    
    return result;
}