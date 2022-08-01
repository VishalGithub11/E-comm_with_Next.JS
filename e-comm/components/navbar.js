import Link from "next/link"
import {useRouter} from "next/router"
import {parseCookies} from 'nookies'
import cookie from 'js-cookie'

const Navbar = () => {

  const router = useRouter()

  let user = false;
  const cookieuser = parseCookies()
  if(cookieuser?.token){
    user = true
  }

  // const user =  cookieuser.user ? JSON.parse(cookieuser.user) : ""

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
      <Link href="/">
      <a  className="brand-logo">sfs.com</a>
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      { user  &&  <li  className={isActive('/create')}><Link href="/create"><a>Create</a></Link></li>}
{
  user ? 
  <>
  <li  className={isActive('/account')}><Link href="/account"><a>Account</a></Link></li>
  {/* <li  className={isActive('/create')} onClick={()=>{
                  cookie.remove('token')
                  cookie.remove('user')
                  router.push('/login')
                }}><a>Logout</a></li> */}
 

  </>
  
  
  : <>
  <li className={isActive('/login')} > <Link href="/login"><a>Login</a></Link ></li>
        <li  className={isActive('/signup')}><Link href="/signup"><a>Sign up</a></Link></li>
       
  </>
}
<li  className={isActive('/cart')}><Link href="/cart"><a>Cart</a></Link></li>

      </ul>
    </div>
  </nav>
  )
}

export default Navbar