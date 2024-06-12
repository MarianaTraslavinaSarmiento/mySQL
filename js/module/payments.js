import { connection } from "../../helpers/conexion.js";

//Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 112):

export const getAllPaymentsMadeForClients = async({customerNumber} = {customerNumber: "112"})=>{
    const [result] = await connection.execute(`SELECT customerNumber, checkNumber, paymentDate, amount FROM payments WHERE customerNumber = ?`, [customerNumber] );
    result["count"] = result.length;
    
    return result;
}
