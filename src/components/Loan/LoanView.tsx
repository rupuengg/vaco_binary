import React, { useState } from 'react';
import { ILoanInterface } from '../../models/ILoan';
import './LoanView.css';

export interface ILoanViewInterface {
  loanLists?: ILoanInterface[],
  loanNumber?: Number,
  updateLoanAmountPaid?: (loanNumber: Number, amount: Number) => {};
}

export const LoanView = (props: ILoanViewInterface) => {
  const { loanNumber, loanLists, updateLoanAmountPaid } = props;
  const loans: ILoanInterface[] | undefined = loanLists?.filter(l => l.Loan_Number === loanNumber);
  const loan: ILoanInterface | undefined = loans && loans[0];
  const [amtPaid, setAmtPaid] = useState(loan ? (loan.AmountPaid ? loan.AmountPaid : 0) : 0) as any;

  if (!loanNumber && loanLists) return null;

  const handleChange = (e: any) => {
    if (e.target.name === 'AmountPaid') {
      setAmtPaid(e.target.value);
    }
  }

  const handleAmountPaid = () => {
    console.log(loanNumber, amtPaid);
    loanNumber && updateLoanAmountPaid && updateLoanAmountPaid(loanNumber, amtPaid);
  }

  const amount: any = loan ? (loan.Amount ? loan.Amount : 0) : 0;
  const balanceAmount: Number = amount - amtPaid;

  return (
    <div className='loan-view'>
      <ul>
        <li>
          <label>
            Customer Name
            <input type="text" name="Customer_Name" readOnly value={loan?.Customer_Name} />
          </label>
        </li>
        <li>
          <label>
            Customer Address
            <input type="text" name="Customer_Address" readOnly value={loan?.Customer_Address} />
          </label>
        </li>
        <li>
          <label>
            Loan Number
            <input type="text" name="Loan_Number" readOnly value={loan?.Loan_Number.toString()} />
          </label>
        </li>
        <li>
          <label>
            Loan Amount
            <input type="text" name="Amount" readOnly value={loan?.Amount.toString()} />
          </label>
        </li>
        <li>
          <label>
            Amount Paid
            <input type="text" name="AmountPaid" value={amtPaid.toString()} onChange={e => handleChange(e)} onBlur={handleAmountPaid} />
          </label>
        </li>
        <li>
          <label>
            Balance Amount
            <input type="text" readOnly value={balanceAmount.toString()} />
          </label>
        </li>
      </ul >
    </div >
  );
}

export default LoanView;
