import {BrowserRouter,Route,Routes} from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack from './Snack';
import SnackPage from './SnackPage'
import './App.css';

const snackList =[{name:'chips',color:'#52978A',bgColor:'#C8BA81'},{name:'chocolate',color:'#BE82A6',bgColor:'#5F2726'},{name:'fruit',color:'#E4B8F2',bgColor:'#B86F4B'}];

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
       <Route exact path='/' element={<VendingMachine snacks={snackList.map(snack => snack.name)}/>}/>
       {snackList.map(snack => <Route exact path={`/${snack.name}`} element={<SnackPage snack={snack}/>}/>)}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
