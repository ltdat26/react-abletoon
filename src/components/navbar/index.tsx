const NavbarData = ['Live', 'Push', 'Link', 'Shop', 'Packs', 'Help', 'More +']

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between my-4">
      <ul className='flex flex-row ml-5'>
        <li className="px-3">
          <a href='#'>
            <svg width='45' height='21' viewBox='0 0 45 21'>
              <title>Abletoon</title>
              <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z" />
            </svg>
          </a>
        </li>
        {NavbarData.map((item) => (
          <li><a className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-semibold text-xl" href="#">{item}</a></li>
        ))}
      </ul>
      <ul className='flex flex-row'>
        <li><a className="text-blue-500 hover:bg-gray-700 hover:text-blue-100 lg:px-3 md:px-2 lg:py-2 md:py-1 rounded-md text-sm font-bold" href="#">Try Live for free</a></li>
        <li><a className="hover:bg-gray-700 hover:text-white lg:px-3 md:px-2 lg:py-2 md:py-1 rounded-md text-sm font-bold" href="#">Log in or Register</a></li>
      </ul>
    </div>
  )
}

export default Navbar