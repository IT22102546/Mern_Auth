import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="bg-slate-200">
        <div className="flex justify-between items-center max-w-7xl mx-auto p-2 ">
            <Link to='/'>
                <h1 className="font-bold">Auth App</h1>
            </Link>
            <ul className="flex gap-6">
            <Link to='/'>
                <li>Home</li>
            </Link>

             <Link to='/about'>    
                <li>About</li>
            </Link> 
            <Link to='Sign-in'>
                <li>Sign-in</li>
            </Link>  
            <Link to='Sign-up'>
                <li>Sign-up</li>
            </Link>

            <Link to='/profile'>
                <li>Profile</li>
            </Link>
              
            </ul>
        </div>
    </div>
  )
}
