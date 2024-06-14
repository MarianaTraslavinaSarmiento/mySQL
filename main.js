import { getAllClientsAccordingToTheirCity, getAllCustomersWithSalesRepresentative, getDetailsOfClients } from "./js/module/customers.js";
import { getAllEmployeesThatWorksInAOffice, getAllEmployeesWithManager, getAllEmployeesWithTheOfficeTheirWorks } from "./js/module/employees.js";
import { getAllEmployeesOfEachOffices, getAllOffices } from "./js/module/offices.js";
import { getAllOrdersMadeByClients, getAllOrdersShipped } from "./js/module/orders.js";
import { getAllPaymentsMadeForClients } from "./js/module/payments.js";
import { getAllProductsBuyPriceGreaterThanFifty, getAllProductsInStock, getTotalProductsInStock } from "./js/module/products.js";


console.log(await getAllProductsInStock());
// console.log(await getAllEmployeesThatWorksInAOffice());
// console.log(await getDetailsOfClients())
// console.log(await getAllPaymentsMadeForClients({customerNumber: 121}));
// console.log(await getAllOrdersShipped());
// console.log(await getTotalProductsInStock());
// console.log(await getAllEmployeesWithManager());
// console.log(await getAllOffices());
// console.log(await getAllClientsAccordingToTheirCity());
// console.log(await getAllClientsAccordingToTheirCity());
// console.log(await getAllProductsBuyPriceGreaterThanFifty());
// console.log(await getAllOrdersMadeByClients() );
// console.log(await getAllEmployeesWithTheOfficeTheirWorks());
// console.log(await getAllCustomersWithSalesRepresentative());
// console.log(await getAllEmployeesOfEachOffices());