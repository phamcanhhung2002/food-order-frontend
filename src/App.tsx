import { BrowserRouter } from "react-router-dom"
import './index.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RouterList from "./router"
import { store } from "./state/store";
import { Provider } from 'react-redux'
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
          <RouterList />
      </BrowserRouter>
      <ToastContainer 
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Provider>
  )
}