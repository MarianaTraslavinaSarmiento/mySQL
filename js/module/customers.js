import { connection } from "../../helpers/conexion.js";

export const getAllContactsNameAndLastName = async()=> {
    const [result] = await connection.query(
        'SELECT contactLastname, contactFirstname FROM customers ORDER BY contactLastname DESC, contactFirstname ASC'
    );
    return result;
}