import React from 'react';
import { connect } from 'react-redux';
import LoanList from '../../components/Loan/LoanList';
import { LoanListInterface } from '../../models/Loan';

const ConnectedLoanList = (props: LoanListInterface) => {
  const { lists, columns } = props;

  return (<LoanList lists={lists} columns={columns} />);
}

const mapStateToProps = (store: any) => ({
  lists: store.loan.lists,
  columns: store.loan.columns,
});

export default connect(mapStateToProps, null)(ConnectedLoanList);
