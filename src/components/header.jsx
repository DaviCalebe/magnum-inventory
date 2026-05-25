import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="grid grid-cols-3">
    <img src={logo} className='w-72 p-2' alt="magnum-tires" />
    <h1 className='text-tertiary text-center'>MagnumBase</h1>
    </header>
  )
}

export default Header
