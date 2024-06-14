# Consultas Classic Models


1. **Obtener todos los productos en stock:**

   ```sql
   SELECT productName, quantityInStock 
   FROM products;
   ```

2. **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**

   ```sql
   SELECT employeeNumber, lastName, firstName, extension, email, officeCode, reportsTo, jobTitle 
   FROM employees 
   WHERE officeCode = 1;
   ```

3. **Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   SELECT customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit FROM customers WHERE customerNumber = 112;
   ```

4. **Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   SELECT customerNumber, checkNumber, paymentDate, amount FROM payments WHERE customerNumber = 112;
   ```

5. **Obtener todos los pedidos con estado 'Shipped':**

   ```sql
   SELECT orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber 
   FROM orders 
   WHERE status = 'Shipped';
   ```

6. **Cantidad total de productos en stock:**

   ```sql
   SELECT SUM(quantityInStock) 'Total de productos' FROM products; 
   ```

7. **Lista de todos los empleados con su jefe (si tienen):**

   ```sql
   SELECT e.employeeNumber AS 'Codigo empleado', CONCAT(e.firstName, ' ', e.lastName) AS 'Nombre empleado', CONCAT(j.firstName, ' ', j.lastName) AS 'Nombre del jefe' FROM employees as e INNER JOIN employees as j ON e.employeeNumber = j.reportsTo;
   ```

8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

   ```sql
   SELECT officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory FROM offices WHERE country = 'USA';
   ```

9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**

   ```sql
   SELECT customerNumber, customerName, city FROM customers WHERE city = 'Madrid';
   ```

10. **Productos con precio de compra mayor a 50:**

    ```sql
    SELECT productCode, productName, buyPrice FROM products WHERE buyPrice > 50;
    ```

### Consultas Multitabla

1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:**

   ```sql
   SELECT c.customerNumber, c.customerName, od.orderNumber, od.productCode FROM customers AS c INNER JOIN orders AS o ON o.customerNumber=c.customerNumber INNER JOIN orderdetails as od ON o.orderNumber=od.orderNumber WHERE c.customerNumber = 112;
   
   ```

2. **Listar todos los empleados junto con la oficina en la que trabajan:**

   ```sql
   SELECT CONCAT(e.firstName, ' ', e.lastName) AS 'Empleado', o.officeCode AS 'Codigo oficina' 
   FROM employees as e INNER JOIN offices as o ON o.officeCode=e.officeCode;
   ```

3. **Listar todos los clientes junto con su representante de ventas:**

   ```sql
   SELECT cus.customerNumber AS 'Codigo cliente', cus.customerName 'Nombre cliente', cus.salesRepEmployeeNumber AS 'Codigo representante',CONCAT(e.firstName,' ', e.lastName) AS 'Nombre representante de ventas' FROM customers AS cus INNER JOIN employees as e ON cus.salesRepEmployeeNumber=e.employeeNumber;
   ```

4. **Obtener el nombre y la cantidad total ordenada de cada producto:**

   ```sql
   SELECT p.productCode, p.productName, SUM(od.quantityOrdered) FROM products AS p INNER JOIN orderdetails AS od ON p.productCode = od.productCode GROUP BY p.productCode;
   ```

5. **Listar todas las oficinas y el número de empleados en cada una:**

   ```sql
   SELECT o.officeCode, COUNT(e.employeeNumber) AS 'Numero de empleados' FROM offices AS o INNER JOIN employees AS e ON e.officeCode = o.officeCode GROUP BY o.officeCode;
   ```
