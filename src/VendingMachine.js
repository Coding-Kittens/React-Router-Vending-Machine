import Snack from './Snack';
import './VendingMachine.css'
const VendingMachine = ({snacks})=>{
return <div className='VendingMachine'>
  <h1>Vending Machine</h1>
  <p>Pick a snack!</p>
    <ul>
    {snacks.map(snack => <Snack name={snack}/>)}
    </ul>
</div>

}

export default VendingMachine;
