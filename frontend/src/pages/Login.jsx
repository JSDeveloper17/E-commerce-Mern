import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.css'
import { api } from '../services/api'
import { toast } from 'react-toastify'
import { useAuth } from '../context/AuthContext';

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

const perks = [
  {
    title: 'Welcome Back Deals',
    text: 'Personalized offers picked just for you',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    title: 'Track Your Orders',
    text: 'Real-time delivery updates on every purchase',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Secure & Private',
    text: 'Your data is encrypted and never shared',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const {login} = useAuth()

  async function handleLogin(e){
    e.preventDefault();
    if(!email.trim() || !password.trim()){
      toast.warning("Please fill in all details")
      return
    }
    const loginUser ={
      email:email,
      password:password
    }
    try{
      setIsLoading(true)
      const response = await login(loginUser)
      console.log('Response : ', response)
      console.log("Login successFull")

      toast.success(`Welcome back, ${response.name}! 👋`)
      navigate("/")
    }
    catch(err){
      console.log("Login error : ", err);
      if(err.response){
        console.log("Server Error", err.response.data)
        toast.error(err.response.data.message || "Login failed, please try again")
      }
      else{
        toast.error("Cannot reach the server, please try again later")
      }
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
    <main className="auth">
      <div className="auth__wrapper">

        {/* ============ LEFT — BRAND PANEL ============ */}
        <aside className="auth__panel">
          <div className="auth__panel-content">
            <span className="auth__eyebrow">✦ Welcome back to ShopVerse</span>
            <h1 className="auth__headline">
              Sign in &amp; continue <span>your shopping journey</span>
            </h1>
            <p className="auth__subtext">
              Your cart, wishlist and exclusive deals are right where you left them.
            </p>

            <ul className="auth__perks">
              {perks.map((perk) => (
                <li className="auth__perk" key={perk.title}>
                  <span className="auth__perk-icon">{perk.icon}</span>
                  <div>
                    <h3>{perk.title}</h3>
                    <p>{perk.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ============ RIGHT — FORM CARD ============ */}
        <section className="auth__form-side">
          <div className="auth__card">
            <div className="auth__card-head">
              <h2 style={{textAlign:"center"}}>Welcome Back 👋</h2>
              <p>Sign in to your account to continue shopping.</p>
            </div>

            <form action="" onSubmit={handleLogin} className="auth__form">
              <div className="auth__field">
                <label htmlFor="email">Email Address</label>
                <div className="auth__input-wrap">
                  <span className="auth__input-icon"><MailIcon /></span>
                  <input type="email" name="email" id="email" autoFocus placeholder="Enter Your email"
                     value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
              </div>

              <div className="auth__field">
                <label htmlFor="password">Password</label>
                <div className="auth__input-wrap">
                  <span className="auth__input-icon"><LockIcon /></span>
                  <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter Your password"
                     value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <button type="button" className="auth__eye" onClick={()=>setShowPassword(!showPassword)}
                     aria-label={showPassword ? "Hide password" : "Show password"}>
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              <div className="auth__options">
                <label className="auth__remember">
                  <input type="checkbox" name="remember" />
                  <span>Remember me</span>
                </label>
                <a href="#!" className="auth__forgot">Forgot password?</a>
              </div>

              <button type="submit" className="auth__submit" disabled={isLoading}>
                {isLoading ? "Signing you in..." : "Sign In"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>

            <p className="auth__switch">
              Don&apos;t have an account? <Link to="/register">Create one here</Link>
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}

export default Login

