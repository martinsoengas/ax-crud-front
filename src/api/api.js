export const fetchCustomers = async () => {
  const response = await fetch("http://localhost:4000/");

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();

  const loadedCustomers = [];

  for (const key in data) {
    loadedCustomers.push({
      id: data[key].id,
      name: data[key].nombre,
      address: data[key].direccion,
      dni: data[key].dni,
      iva: data[key].condicionIva,
    });
  }

  return loadedCustomers;
};

export const addCustomer = async (newCustomer) => {
  const response = await fetch("http://localhost:4000/", {
    method: "POST",
    body: JSON.stringify(newCustomer),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create customer");
  }

  return null;
};

export const updateCustomer = async (updatedCustomer) => {
  const response = await fetch(`http://localhost:4000/${updatedCustomer.id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedCustomer),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not update customer");
  }

  return null;
};

export const deleteCustomer = async (customerId) => {
  const response = await fetch(`http://localhost:4000/${customerId}`, {
    method: "DELETE",
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not delete customer");
  }

  return null;
};

export const getInvoices = async () => {
  const response = await fetch("http://localhost:4000/invoices");

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();

  const loadedInvoices = [];

  for (const key in data) {
    loadedInvoices.push({
      id: data[key].id,
      customerName: data[key].nombre,
      customerId: data[key].idCliente,
      invoiceNum: data[key].nroFactura,
      invoiceTotal: data[key].importe,
    });
  }

  return loadedInvoices;
};
