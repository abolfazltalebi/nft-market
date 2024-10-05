import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            خانه
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">
            درباره ما
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">
            تماس با ما
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}
