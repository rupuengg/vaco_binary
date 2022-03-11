import { AgGridReact } from 'ag-grid-react';
import React from 'react';
import { ILoanListInterface } from '../../models/ILoan';

export const LoanList = (props: ILoanListInterface) => {
  const { lists, columns } = props;

  return (
    <div key="loanList" className="ag-theme-alpine" style={{ height: 180, width: '100%' }}>
      <AgGridReact rowData={lists} columnDefs={columns} />
    </div>
  );
}

export default LoanList;
