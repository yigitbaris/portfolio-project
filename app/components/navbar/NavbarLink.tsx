const NavbarLink = () => {
  return (
    <div className='flex mr-5'>
      <div className='hidden md:flex gap-6'>
        <div className='font-semibold text-base text-slate-700 cursor-pointer'>
          Home
        </div>
        <div className='font-semibold text-base text-slate-700 cursor-pointer'>
          About
        </div>
        <div className='font-semibold text-base text-slate-700 cursor-pointer'>
          Projects
        </div>
        <div className='font-semibold text-base text-slate-700 cursor-pointer'>
          Contact
        </div>
      </div>
      <div className='md:hidden'>menu</div>
    </div>
  )
}
export default NavbarLink
