export interface LoanInterface {
  Customer_Id: number,
  Customer_Name: string,
  Customer_Address: string,
  Loan_Number: string,
  Amount: Number,
  Branch_Name: string,
}

export interface LoanListInterface {
  lists?: LoanInterface[],
}