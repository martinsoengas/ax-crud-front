import { useEffect } from "react";
import useHttp from "../hooks/useHttp";
import { getInvoices } from "../api/api";

const AllInvoices = () => {
  const {
    sendRequest,
    status,
    data: loadedInvoices,
  } = useHttp(getInvoices, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <section className="centered">
        <p>Cargando facturas...</p>
      </section>
    );
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Cliente Facturado</th>
          <th>Numero de Factura</th>
          <th>Importe</th>
        </tr>
        {loadedInvoices.map((invoice) => (
          <tr key={invoice.id}>
            <td>{invoice.customerName}</td>
            <td>{invoice.invoiceNum}</td>
            <td>{invoice.invoiceTotal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllInvoices;
