import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'
import { api } from '../services/api';
import { toast } from 'react-toastify';

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

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

const perks = [
  {
    title: 'Exclusive Member Deals',
    text: 'Early access to sales and members-only discounts',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    title: 'Faster Checkout',
    text: 'Save your address and payment details securely',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Order Tracking',
    text: 'Real-time updates on all your orders in one place',
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
    title: 'Wishlist & Alerts',
    text: 'Get notified when your favorites go on sale',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
]

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleRegister(e){
    e.preventDefault();
    if(!name.trim() || !email.trim() || !password.trim()){
      toast.warning("Please fill in all details")
    }

    const newUser = {
      name:name,
      email:email,
      password:password
    }
    console.log(newUser)
    try{
      setIsLoading(true)
      const response = await api.post("/register", newUser)
      console.log('Response : ', response)
      
      console.log("Response Data : ",response.data)
      toast.success(response.data.message || "Registration Failed")

    }
    catch(err){
      console.log("Registration error : ", err);
      if(err.response){
        console.log("Server Error",err.response.data)
        toast.error(err.response.data.message)
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
            <span className="auth__eyebrow">✦ Join 10,000+ happy shoppers</span>
            <h1 className="auth__headline">
              Create your account &amp; start <span>shopping smarter</span>
            </h1>
            <p className="auth__subtext">
              One account for everything — orders, wishlist, exclusive deals and faster checkout.
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
              <h2 style={{textAlign:"center"}}>Create Your Account </h2>
              <p>Fill in your details to get started — it takes less than a minute.</p>
            </div>


            <form action="" onSubmit={handleRegister} className="auth__form">
              <div className="auth__field">
                <label htmlFor="name">Full Name</label>
                <div className="auth__input-wrap">
                  <span className="auth__input-icon"><UserIcon /></span>
                  <input type="text" name="name" id="name" autoFocus placeholder="Enter Your Name"
                     value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
              </div>

              <div className="auth__field">
                <label htmlFor="email">Email Address</label>
                <div className="auth__input-wrap">
                  <span className="auth__input-icon"><MailIcon /></span>
                  <input type="email" name="email" id="email" placeholder="Enter Your email"
                     value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
              </div>

              <div className="auth__field">
                <label htmlFor="password">Password</label>
                <div className="auth__input-wrap">
                  <span className="auth__input-icon"><LockIcon /></span>
                  <input type="password" name="password" id="password" placeholder="Enter Your password"
                     value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <span className="auth__hint">🔒 Must be at least 6 characters</span>
              </div>

              <button type="submit" className="auth__submit" disabled={isLoading}>
                {isLoading ? "Creating your Account...":" Register"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>

            <p className="auth__terms">
              By creating an account, you agree to our <a href="#!">Terms of Service</a> and <a href="#!">Privacy Policy</a>.
            </p>

            <p className="auth__switch">
              Already have an account? <Link to="/login">Sign in here</Link>
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}

export default Register

