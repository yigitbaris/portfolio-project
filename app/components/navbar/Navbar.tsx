import Logo from './Logo'
import NavbarLink from './NavbarLink'

const Navbar = () => {
  return (
    <nav>
      <div className='flex items-center justify-between h-20  shadow-2xl px-12 '>
        <Logo />
        <NavbarLink />
      </div>
    </nav>
  )
}
export default Navbar
