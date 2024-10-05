import { Link } from "react-router-dom";
import HeaderLogo from '/public/'
export default function HeaderLogo() {
  return (
    <div>
      <Link to='/'>
        <img src={headerLogo} alt="" />
      </Link>
    </div>
  )
}
