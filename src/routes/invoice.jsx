import * as React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <div style={{ padding: '1rem', width: '100%' }}>
      <h2 style={{ width: '100%' }}>Total Due: {invoice.amount}</h2>
      <p style={{ width: '100%' }}>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices');
          }}
        >
          Delete
        </button>
      </p>
    </div>
  );
}
