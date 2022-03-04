import React from 'react';
import ConnectedLoanList from '../../connectedComponents/Loan/ConnectedLoanList';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  return (
    <div className="App">
      <ConnectedLoanList />
    </div>
  );
}

export default App;
