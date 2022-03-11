export interface LoanInterface {
  Customer_Id: number,
  Customer_Name: string,
  Customer_Address: string,
  Loan_Number: Number,
  Amount: Number,
  Branch_Name: string,
  BalanceAmount: Number,
  AmountPaid: Number,
}

export interface fieldInterface {
  field: string,
  headerName: string,
}

export interface LoanListInterface {
  lists?: LoanInterface[],
  columns?: fieldInterface[],
}