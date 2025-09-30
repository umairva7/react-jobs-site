import {Route,
  createBrowserRouter,
  createRoutesFromElements,
RouterProvider} from 'react-router-dom '
import mainLayout from './layouts/mainLayout.jsx'
import HomePage from './pages/HomePage'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<mainLayout/>}>
      <Route index element={<HomePage/>}/>
      

    </Route>
  )
)


const App = () => {
  return (
    <div>
      

    </div>
  )
}
export default App
