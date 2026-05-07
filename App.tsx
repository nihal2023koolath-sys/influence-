/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoMarquee } from "./components/LogoMarquee";
import { Features } from "./components/Features";
import { Solutions } from "./components/Solutions";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <Solutions />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
