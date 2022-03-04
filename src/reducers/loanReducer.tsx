const initialState = {
  lists: [
    {
      Customer_Id: 1,
      Customer_Name: 'Test One',
      Customer_Address: 'Address One',
      Loan_Number: '1122334455',
      Amount: 200000,
      Branch_Name: 'Test One Branch',
    },
    {
      Customer_Id: 2,
      Customer_Name: 'Test Two',
      Customer_Address: 'Address Two',
      Loan_Number: '1122334466',
      Amount: 200000,
      Branch_Name: 'Test Two Branch',
    }
  ]
};

export const loanReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return { ...state };
  }
}

export default loanReducer;