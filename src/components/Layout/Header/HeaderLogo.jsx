import { Link } from "react-router-dom";
import headerLogo from '/images/icons/Logo.svg'
export default function HeaderLogo() {
  return (
    <div>
      <Link to='/'>
        <img src={headerLogo} alt="" />
      </Link>
    </div>
  )
}
