import Hero from '../components/Hero'
import jobcards from '../components/jobcards'
import JobListings from '../components/JobListings'
import ViewAll from '../components/ViewAll'
import Homecards from '../components/Homecards'

function HomePage() {
  return (
    <div>
        <Hero/>
        <Homecards/>
        <JobListings isHome={true}/>
        <ViewAll/>
    </div>
  )
}

export default HomePage