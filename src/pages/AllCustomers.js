import { useEffect } from "react";
import useHttp from "../hooks/useHttp";
import { fetchCustomers } from "../api/api";

import CustomerList from "../components/CustomerList";

const AllCustomers = () => {
  const {
    sendRequest,
    status,
    data: loadedCustomers,
    error,
  } = useHttp(fetchCustomers, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <section className="centered">
        <p>Cargando clientes...</p>
      </section>
    );
  }

  return <CustomerList customers={loadedCustomers} />;
};

export default AllCustomers;
