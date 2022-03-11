import { ActionsUnion, createAction } from "./Action.Types";

export enum LoanActionTypes {
  UPDATE_LOAN_AMOUNT_PAID = 'loan/UPDATE_LOAN_AMOUNT_PAID',
}

export const LoanActions = {
  updateLoanAmoutnPaid: (loanNumber: Number, amount: Number) => createAction(LoanActionTypes.UPDATE_LOAN_AMOUNT_PAID, { loanNumber, amount }),
};

export type LoanAction = ActionsUnion<typeof LoanActions>;