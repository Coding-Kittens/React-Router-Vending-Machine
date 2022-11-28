import {Link} from 'react-router-dom';
import './SnackPage.css'
const SnackPage = ({snack})=>{
return <>
  <Link exact to='/'>Vending Machine </Link>
<h1 className='SnackPage' style={{color: snack.color ,backgroundColor: snack.bgColor}} >{snack.name}</h1>
</>
}


export default SnackPage;
