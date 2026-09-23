import {ToastContainer} from "react-toastify" 
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <>
       <Header/>
       <AllRoutes/>
       <ToastContainer position="top-right" autoClose={3000} newestOnTop closeOnClick/>
    </>
  )
}

export default App