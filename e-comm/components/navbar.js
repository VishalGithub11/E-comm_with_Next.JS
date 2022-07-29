import Link from "next/link"
import {useRouter} from "next/router"
const Navbar = () => {

  const router = useRouter()
  function isActive(route){
    if(route === router.pathname){
      return 'active'
    }else{
      return ''
    }
  }

  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">sfs.com</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className={isActive('/login')} > <Link href="/login"><a>Login</a></Link ></li>
        <li  className={isActive('/signup')}><Link href="/signup"><a>Sign up</a></Link></li>
        <li  className={isActive('/create')}><Link href="/create"><a>Create</a></Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar