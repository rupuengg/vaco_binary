import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';
import { LoanInterface, LoanListInterface } from '../../models/Loan';

export const LoanList = (props: LoanListInterface) => {
  const { lists } = props;

  const [columnDefs] = useState([
    { field: 'Loan_Number', headerName: 'Loan Number' },
    { field: 'Amount', headerName: 'Amount' },
    { field: 'Customer_Name', headerName: 'Customer Name' },
    { field: 'Customer_Address', headerName: 'Customer Address' },
    { field: 'Branch_Name', headerName: 'Branch Name' }
  ]);

  return (
    <div key="loanList" className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact rowData={lists} columnDefs={columnDefs} />
    </div>
  );
}

export default LoanList;
