import React from 'react';
import { connect } from 'react-redux';
import { LoanActions } from '../../actions/loan.action';
import LoanView, { ILoanViewInterface } from '../../components/Loan/LoanView';

const ConnectedLoanView = (props: ILoanViewInterface) => {
  return (<LoanView {...props} />);
}

const mapStateToProps = (store: any) => ({
  loanLists: store.loan.lists,
  loanNumber: store.loan.editLoanId,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateLoanAmountPaid: (loanNumber: Number, amount: Number) => dispatch(LoanActions.updateLoanAmoutnPaid(loanNumber, amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedLoanView);
