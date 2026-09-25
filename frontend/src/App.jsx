import {ToastContainer} from "react-toastify" 
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header';
import AllRoutes from './routes/AllRoutes';
import { useAuth } from "./context/AuthContext";

function App() {
  const {isLoading} = useAuth()
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <>
       <Header/>
       <AllRoutes/>
       <ToastContainer position="top-right" autoClose={3000} newestOnTop closeOnClick/>
    </>
  )
}

export default App