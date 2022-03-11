import { LoanActionTypes } from "../actions/loan.action";

const initialState = {
  lists: [
    {
      Customer_Id: 1,
      Customer_Name: 'Test One',
      Customer_Address: 'Address One',
      Loan_Number: 1122334455,
      Amount: 200000,
      Branch_Name: 'Test One Branch',
      AmountPaid: 10000,
    },
    {
      Customer_Id: 2,
      Customer_Name: 'Test Two',
      Customer_Address: 'Address Two',
      Loan_Number: 1122334466,
      Amount: 200000,
      Branch_Name: 'Test Two Branch',
      AmountPaid: 10000,
    },
    {
      Customer_Id: 3,
      Customer_Name: 'Test Three',
      Customer_Address: 'Address Three',
      Loan_Number: 1122334477,
      Amount: 200000,
      Branch_Name: 'Test Three Branch',
      AmountPaid: 10000,
    }
  ],
  columns: [
    { field: 'Loan_Number', headerName: 'Loan Number' },
    { field: 'Amount', headerName: 'Amount' },
    { field: 'Customer_Name', headerName: 'Customer Name' },
    { field: 'Customer_Address', headerName: 'Customer Address' },
    { field: 'Branch_Name', headerName: 'Branch Name' }
  ],
  editLoanId: 1122334466
};

export const loanReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LoanActionTypes.UPDATE_LOAN_AMOUNT_PAID:
      const loanIndex = state.lists.findIndex(l => l.Loan_Number === action.loanNumber);
      return {
        ...state,
        lists: [
          ...state.lists.slice(0, loanIndex),
          {
            ...state.lists[loanIndex],
            'Amount_Paid': action.amount
          },
          ...state.lists.slice(loanIndex + 1)
        ]
      };
    default:
      return { ...state };
  }
}

export default loanReducer;