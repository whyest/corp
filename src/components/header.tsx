import Link from 'next/link'
const Header = () => {
  return (
    <div className='z-10 absolute text-white w-full'>
      <nav className='container flex flex-wrap relative justify-between items-center mx-auto p-8'>
        <Link className='font-bold text-3xl' href='/'>
          Home
        </Link>
        <div className='space-x-4 text-xl'>
          <Link href='/performance'>Performance</Link>
          <Link href='/reliability'>Reliability</Link>
          <Link href='/scale'>Scale</Link>
        </div>
      </nav>
    </div>
  )
}
export default Header
