import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import AllCustomers from "../src/pages/AllCustomers";
import AllInvoices from "../src/pages/AllInvoices";
import NewCustomer from "./pages/NewCustomer";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/edited" element={<Navigate replace to="/" />} />
        <Route path="" element={<AllCustomers />} />
        <Route path="/invoices" element={<AllInvoices />} />
        <Route path="/new-customer" element={<NewCustomer />} />
      </Routes>
    </Layout>
  );
}

export default App;
