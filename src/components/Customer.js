import { Fragment, useState, useEffect, useCallback } from "react";
import useHttp from "../hooks/useHttp";
import { updateCustomer } from "../api/api";
import classes from "./Customer.module.css";
import { useNavigate } from "react-router-dom";

const Client = (props) => {
  const { sendRequest, status } = useHttp(updateCustomer);
  const navigate = useNavigate();

  const customerName = props.name;
  const customerAddress = props.address;
  const customerDNI = props.dni;
  const customerIVA = props.iva;

  const [isEditing, setIsEditing] = useState(false);
  const [editingName, setEditingName] = useState(customerName);
  const [editingAddress, setEditingAddress] = useState(customerAddress);
  const [editingDNI, setEditingDNI] = useState(customerDNI);
  const [editingIVA, setEditingIVA] = useState(customerIVA);

  const deleteButtonHandler = () => {
    props.onDelete(props.id);
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const onNameEditHandler = (editedCustomerName) => {
    setEditingName(editedCustomerName.target.value);
  };

  const onAddressEditHandler = (editedCustomerAddress) => {
    setEditingAddress(editedCustomerAddress.target.value);
  };

  const onDNIEditHandler = (editedCustomerDNI) => {
    setEditingDNI(editedCustomerDNI.target.value);
  };

  const onIVAEditHandler = (editedCustomerIVA) => {
    setEditingIVA(editedCustomerIVA.target.value);
  };

  useEffect(() => {
    if (status === "completed") {
      navigate("/edited");
    }
  }, [status, navigate]);

  const saveEditHandler = () => {
    const editedCustomer = {
      id: props.id,
      nombre: editingName,
      direccion: editingAddress,
      dni: editingDNI,
      condicionIva: editingIVA,
    };

    sendRequest(editedCustomer);

    setIsEditing(false);
  };

  const editable = (
    <tr>
      <td>
        <input
          defaultValue={customerName}
          onChange={onNameEditHandler}
          type="text"
          minLength="1"
          maxLength="100"
          size="6"
        />
      </td>
      <td>
        <input
          defaultValue={customerAddress}
          onChange={onAddressEditHandler}
          type="text"
          minLength="1"
          maxLength="100"
        />
      </td>
      <td>
        <input
          defaultValue={customerDNI}
          onChange={onDNIEditHandler}
          type="text"
          minLength="1"
          maxLength="9"
        />
      </td>
      <td>
        <input
          type="number"
          defaultValue={customerIVA}
          onChange={onIVAEditHandler}
          minLength="1"
          maxLength="1"
          min="0"
          max="1"
        />
      </td>
      <td>
        <button className={classes.save} onClick={saveEditHandler}>
          Guardar
        </button>
      </td>
      <td>
        <button className={classes.delete} onClick={deleteButtonHandler}>
          Borrar
        </button>
      </td>
    </tr>
  );

  const nonEditable = (
    <tr>
      <td>{customerName}</td>
      <td>{customerAddress}</td>
      <td>{customerDNI}</td>
      <td>{customerIVA === "1" ? "Resp. Inscripto" : "Consumidor Final"}</td>
      <td>
        <button className={classes.edit} onClick={editHandler}>
          Editar
        </button>
      </td>
      <td>
        <button className={classes.delete} onClick={deleteButtonHandler}>
          Borrar
        </button>
      </td>
    </tr>
  );

  return <Fragment>{isEditing ? editable : nonEditable}</Fragment>;
};

export default Client;
