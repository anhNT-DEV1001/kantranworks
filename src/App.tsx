import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Profile from "./components/Profile";
import Header from "./components/Header";
import Section01 from "./components/Section/Section01";
import Section02 from "./components/Section/Section02";
import Section03 from "./components/Section/Section03";
import { Section04 } from "./components/Section/Section04";
import Archive from "./components/Archive";

function App() {
  const [hash, setHash] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isHome = hash === "#home" || hash === "";
  const isArchive = hash === "#archive";
  const isProfile = hash === "#profile";

  return (
    <div className="bg-primary text-white min-h-screen">
      <Header />

      {/* WRAPPER ANIMATION */}
      <motion.div
        key={hash}  
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {isHome && (
          <div id="home">
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
          </div>
        )}

        {isArchive && <Archive />}
        {isProfile && <Profile />}
      </motion.div>
    </div>
  );
}

export default App;
