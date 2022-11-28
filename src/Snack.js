import {Link} from 'react-router-dom';
const Snack = ({name})=>{
return <Link to={`/${name}`}><li>{name}</li></Link>;
}

export default Snack;
