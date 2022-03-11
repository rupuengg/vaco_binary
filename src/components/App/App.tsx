import React from 'react';
import ConnectedLoanList from '../../connectedComponents/Loan/ConnectedLoanList';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ConnectedLoanView from '../../connectedComponents/Loan/ConnectedLoanView';

function App() {
  return (
    <div className="App">
      <ConnectedLoanList />
      <ConnectedLoanView />
    </div>
  );
}

export default App;
