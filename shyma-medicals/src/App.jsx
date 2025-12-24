import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

// Category Pages
import LockingPlateSystem from "./Pages/categories/LockingPlateSystem";
import LockingHandSystem from "./Pages/categories/LockingHandSystem";
import LockingSystem from "./Pages/categories/LockingSystem";
import RadialHeadProsthesis from "./Pages/categories/RadialHeadProsthesis";
import BipolarProsthesis from "./Pages/categories/BipolarProsthesis";
import PFNANailingSystem from "./Pages/categories/PFNANailingSystem";
import CannulatedCompressionSystem from "./Pages/categories/CannulatedCompressionSystem";
import MiniLockingHandSystem from "./Pages/categories/MiniLockingHandSystem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/locking-plate-system" element={<LockingPlateSystem />} />
      <Route path="/locking-hand-system" element={<LockingHandSystem />} />
      <Route path="/locking-system" element={<LockingSystem />} />
      <Route path="/radial-head-prosthesis" element={<RadialHeadProsthesis />} />
      <Route path="/bipolar-prosthesis" element={<BipolarProsthesis />} />
      <Route path="/pfna-nailing-system" element={<PFNANailingSystem />} />
      <Route path="/cannulated-compression-system" element={<CannulatedCompressionSystem />} />
      <Route path="/mini-locking-hand-system" element={<MiniLockingHandSystem />} />
    </Routes>
  );
}

export default App;
