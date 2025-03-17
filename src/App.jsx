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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';
import RefundPolicy from './pages/RefundPolicy';
import TrialRules from './pages/TrialsRulse';
import { RecoilRoot } from 'recoil';

function App() {

   return (
      <BrowserRouter>
         <RecoilRoot>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route path='/' index element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/teams' element={<TeamSection />} />
               <Route path='/photo-gallery' element={<GalleryPage />} />
               <Route path='/video-gallery' element={<GalleryPage />} />
               <Route path='/trial' element={<TrialPage />} />
               <Route path='/news' element={<NewsPage />} />
               <Route path='/teams/:name' element={<TeamDetails />} />
               <Route path='/players/:name' element={<PlayerDetails />} />
               <Route path='/matches/:name' element={<MatchDetails />} />
               <Route path='/upcoming-matches/:name' element={<MatchDetails />} />
               <Route path='/upcoming-matches/' element={<UpcomingMatches />} />
               <Route path='/past-matches/' element={<MatchSection />} />
               <Route path='/news/:name' element={<NewsDetails />} />
               <Route path='/contact-us' element={<ContactUs />} />
               <Route path='/privacy-policy' element={<PrivacyPolicy />} />
               <Route path='/terms-conditions' element={<TermsCondition />} />
               <Route path='/refund-policy' element={<RefundPolicy />} />
               <Route path='/trials-rules' element={<TrialRules />} />
            </Route>
         </Routes>
         </RecoilRoot>
      </BrowserRouter>
   )
}

export default App
