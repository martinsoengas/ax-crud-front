import Card from "../UI/Card";
import Customer from "./Customer";
import { useState } from "react";
import useHttp from "../hooks/useHttp";
import { deleteCustomer } from "../api/api";

import "./CustomerList.module.css";

const CustomerList = (props) => {
  const { sendRequest, status } = useHttp(deleteCustomer);

  const [customers, setCustomers] = useState(props.customers);

  const deleteCustomerHandler = (customerId) => {
    const confirmDelete = window.confirm(
      "¿Está seguro que desea borrar el cliente?"
    );
    if (confirmDelete === true) {
      setCustomers((prevCustomers) => {
        const updatedCustomers = prevCustomers.filter(
          (customer) => customer.id !== customerId
        );

        sendRequest(customerId);

        return updatedCustomers;
      });
    } else {
      return;
    }
  };

  return (
    <Card>
      <table>
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>DNI</th>
            <th>IVA</th>
          </tr>
          {customers.map((customer) => {
            return (
              <Customer
                key={customer.id}
                id={customer.id}
                name={customer.name}
                address={customer.address}
                dni={customer.dni}
                iva={customer.iva}
                onDelete={deleteCustomerHandler}
              />
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default CustomerList;
