import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import TeamSection from './pages/TeamSection';
import TeamDetails from './pages/TeamDetails';
import PlayerDetails from './pages/PlayerDetails';
import NewsDetails from './pages/NewsDetails';
import MatchDetails from './pages/MatchDetails';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import TrialPage from './pages/TrialPage';
import MatchSection from './pages/MatchSection';
import UpcomingMatches from './pages/UpcomingMatches';

function App() {

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/cricket/' element={<Layout />}>
               <Route path='/cricket/' index element={<Home />} />
               <Route path='/cricket/about' element={<About />} />
               <Route path='/cricket/teams' element={<TeamSection />} />
               <Route path='/cricket/photo-gallery' element={<GalleryPage />} />
               <Route path='/cricket/video-gallery' element={<GalleryPage />} />
               <Route path='/cricket/trial' element={<TrialPage />} />
               <Route path='/cricket/news' element={<NewsPage />} />
               <Route path='/cricket/teams/:name' element={<TeamDetails />} />
               <Route path='/cricket/players/:name' element={<PlayerDetails />} />
               <Route path='/cricket/matches/:name' element={<MatchDetails />} />
               <Route path='/cricket/upcoming-matches/:name' element={<MatchDetails />} />
               <Route path='/cricket/upcoming-matches/' element={<UpcomingMatches />} />
               <Route path='/cricket/past-matches/' element={<MatchSection />} />
               <Route path='/cricket/news/:name' element={<NewsDetails />} />
               <Route path='/cricket/contact-us' element={<ContactUs />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default App
