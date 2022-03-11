import React from 'react';
import { connect } from 'react-redux';
import LoanList from '../../components/Loan/LoanList';
import { ILoanListInterface } from '../../models/ILoan';

const ConnectedLoanList = (props: ILoanListInterface) => {
  const { lists, columns } = props;

  return (<LoanList lists={lists} columns={columns} />);
}

const mapStateToProps = (store: any) => ({
  lists: store.loan.lists,
  columns: store.loan.columns,
});

export default connect(mapStateToProps, null)(ConnectedLoanList);
