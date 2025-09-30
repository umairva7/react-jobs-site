import {Route,
  createBrowserRouter,
  createRoutesFromElements,
RouterProvider} from 'react-router-dom '

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Homecards from './components/Homecards.jsx'
import JobListings from './components/JobListings.jsx'
import ViewAll from './components/ViewAll.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero title='Become a React Dev' subtitle='Find the React job that fits your skills and needs' />
      <Homecards />
      <JobListings /> 
      <ViewAll />    

    </div>
  )
}
export default App
