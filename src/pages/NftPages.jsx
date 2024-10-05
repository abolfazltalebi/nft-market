
export default function NftPages() {
  return (
    <nav>
    <ul className="flex space-x-4">
      {Navbar.map((navItem) => {
        return (
          <li key={navItem.id}>
            <Link to={navItem.link} className="hover:text-gray-300">
              {navItem.text}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
  )
}
