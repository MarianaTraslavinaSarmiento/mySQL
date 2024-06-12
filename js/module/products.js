import { connection } from "../../helpers/conexion.js";

// Obtener todos los productos en stock

export const getAllProductsInStock = async()=>{
    const [result] = await connection.query(
        'SELECT productName, quantityInStock FROM products'
        
    );
    return result;
}

// Cantidad total de productos en stock

export const getTotalProductsInStock = async()=>{
    const [result] = await connection.query(
        `SELECT SUM(quantityInStock) 'Total de productos' FROM products`
    );
    return result;
}

//Productos con precio de compra mayor a 50

export const getAllProductsBuyPriceGreaterThanFifty = async()=>{
    const [result] = await connection.query(
        `SELECT productCode, productName, buyPrice FROM products WHERE buyPrice > 50;`
    )

    return result
}

//Obtener el nombre y la cantidad total ordenada de cada producto

export const getAllproductsAndTotalStockOdEachProduct = async()=>{
    const [result] = await connection.query(
        `SELECT p.productCode, p.productName, SUM(od.quantityOrdered) FROM products AS p INNER JOIN orderdetails AS od ON p.productCode = od.productCode GROUP BY p.productCode;`
    )

    return result
}
