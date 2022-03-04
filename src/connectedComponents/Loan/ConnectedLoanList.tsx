import React from 'react';
import { connect } from 'react-redux';
import LoanList from '../../components/Loan/LoanList';
import { LoanListInterface } from '../../models/Loan';

const ConnectedLoanList = (props: LoanListInterface) => {
  const { lists } = props;

  return (<LoanList lists={lists} />);
}

const mapStateToProps = (store: any) => ({
  lists: store.loan.lists,
});

export default connect(mapStateToProps, null)(ConnectedLoanList);
