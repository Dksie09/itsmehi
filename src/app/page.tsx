"use client";

import React, { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ThemeProvider } from "./theme-provider";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Moments from "./components/Moments";
import Newsletter from "./components/Newsletter";

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider defaultTheme="system" storageKey="dakshi-theme">
      <div className="min-h-screen p-0 font-[family-name:var(--font-geist-sans)]">
        {/* <div
          className="card-wrapper mr-10 hidden lg:block"
          style={{ height: cardHeight, position: "absolute", top: 0, right: 0 }}
        >
          <Card />
        </div> */}

        {/* Main content area */}
        <div className="relative">
          {/* Header with higher z-index to appear above card */}
          <header className="relative z-20 " ref={headerRef}>
            <Header />
          </header>

          {/* Hero section with lower z-index to appear below card */}
          <div className="hero-section relative z-0" ref={heroRef} id="hero">
            <Hero />
          </div>
          <hr className="border-t relative w-screen left-[50%] right-[50%] -translate-x-[50%] my-8" />

          {/* Content after hero section */}
          <div
            className="relative min-h-[50vh] w-full z-0"
            ref={projectsRef}
            id="projects"
          >
            <Projects />
          </div>

          <hr className="border-t relative w-screen left-[50%] right-[50%] -translate-x-[50%] my-8" />
          <div
            className="relative min-h-[50vh] w-full z-0"
            ref={workRef}
            id="work"
          >
            <Work />
          </div>

          <hr className="border-t relative w-screen left-[50%] right-[50%] -translate-x-[50%] my-8" />
          <div className="relative min-h-[50vh] w-full z-0" id="moments">
            <Moments />
          </div>

          <hr className="border-t relative w-screen left-[50%] right-[50%] -translate-x-[50%] my-8" />
          <div className="relative min-h-[50vh] w-full z-0" id="newsletter">
            <Newsletter />
          </div>
          <hr className="border-t relative w-screen left-[50%] right-[50%] -translate-x-[50%] my-8" />
        </div>
      </div>
    </ThemeProvider>
  );
}
