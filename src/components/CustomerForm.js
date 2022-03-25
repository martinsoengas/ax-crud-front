import { useState } from "react";

import Card from "../UI/Card";
import classes from "./CustomerForm.module.css";

const ClientForm = (props) => {
  const [newClientName, setNewClientName] = useState("");
  const [newClientAddress, setNewClientAddress] = useState("");
  const [newClientDNI, setNewClientDNI] = useState("");
  const [newClientIVA, setNewClientIVA] = useState("");

  const clientNameHandler = (e) => {
    setNewClientName(e.target.value);
  };

  const clientAddressHandler = (e) => {
    setNewClientAddress(e.target.value);
  };

  const clientDNIHandler = (e) => {
    setNewClientDNI(e.target.value);
  };

  const clientIVAHandler = (e) => {
    setNewClientIVA(e.target.value);
  };

  const reset = () => {
    setNewClientName("");
    setNewClientAddress("");
    setNewClientDNI("");
    setNewClientIVA("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newClient = {
      nombre: newClientName,
      direccion: newClientAddress,
      dni: newClientDNI,
      condicionIva: newClientIVA,
    };

    props.onAddCustomer(newClient);

    reset();
  };
  return (
    <Card>
      <form onSubmit={submitHandler} className={classes["customer-form"]}>
        <h3>Ingrese los siguientes datos para crear un cliente nuevo</h3>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          onChange={clientNameHandler}
          value={newClientName}
          minLength="1"
          maxLength="100"
        ></input>
        <label htmlFor="address">Direccion</label>
        <input
          type="text"
          id="address"
          onChange={clientAddressHandler}
          value={newClientAddress}
          minLength="1"
          maxLength="100"
        />
        <label htmlFor="dni">DNI</label>
        <input
          type="text"
          id="dni"
          onChange={clientDNIHandler}
          value={newClientDNI}
          minLength="1"
          maxLength="9"
        ></input>
        <label htmlFor="iva">
          Condicion frente a IVA (ingrese 0 para consumidor final, 1 para
          responsable inscripto)
        </label>
        <input
          type="number"
          id="iva"
          onChange={clientIVAHandler}
          value={newClientIVA}
          minLength="1"
          maxLength="1"
          min="0"
          max="1"
        ></input>
        <button>Agregar Cliente</button>
      </form>
    </Card>
  );
};

export default ClientForm;
