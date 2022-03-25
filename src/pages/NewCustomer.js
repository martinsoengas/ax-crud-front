import CustomerForm from "../components/CustomerForm";
import useHttp from "../hooks/useHttp";
import { useEffect } from "react";
import { addCustomer } from "../api/api";
import { useNavigate } from "react-router-dom";

const NewCustomer = () => {
  const { sendRequest, status } = useHttp(addCustomer);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/");
    }
  }, [status, navigate]);

  const addCustomerHandler = (newCustomer) => {
    const confirmAdd = window.confirm(
      `¿Está seguro que desea crear el nuevo cliente?`
    );
    if (confirmAdd === true) {
      sendRequest(newCustomer);
    } else {
      return;
    }
  };
  return <CustomerForm onAddCustomer={addCustomerHandler} />;
};

export default NewCustomer;
