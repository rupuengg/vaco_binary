export interface ILoanInterface {
  Customer_Id: number,
  Customer_Name: string,
  Customer_Address: string,
  Loan_Number: Number,
  Amount: Number,
  Branch_Name: string,
  BalanceAmount: Number,
  AmountPaid: Number,
}

export interface IFieldInterface {
  field: string,
  headerName: string,
}

export interface ILoanListInterface {
  lists?: ILoanInterface[],
  columns?: IFieldInterface[],
}