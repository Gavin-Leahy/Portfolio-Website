import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import GardenWateringSystem from './pages/GardenWateringSystem';
import MP3Player from './pages/MP3Player';
import RocketTower from './pages/RocketTower';
import GeneralCADSkills from './pages/GeneralCADSkills';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/garden-watering-system" element={<GardenWateringSystem />} />
          <Route path="/projects/mp3-player" element={<MP3Player />} />
          <Route path="/projects/rocket-tower" element={<RocketTower />} />
          <Route path="/projects/general-cad-skills" element={<GeneralCADSkills />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App