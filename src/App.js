import './App.css';
import Header from './components/Header'
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import GlobalState from './context/GlobalState'

function App() {
  return (
    <GlobalState>
      <div>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpenses />
          <History />
          <AddTransaction />
        </div>
      </div>
    </GlobalState>
  );
}

export default App;
