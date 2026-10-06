"use client";

import { useEffect } from "react";
import { portfolioCss, portfolioMarkup } from "./portfolio-content";
import { initializePortfolio } from "./portfolio-init";

export default function Home() {
  useEffect(() => {
    if (document.body.dataset.portfolioReady === "true") return;
    document.body.dataset.portfolioReady = "true";
    initializePortfolio();
  }, []);

  return (
    <>
      <style>{portfolioCss}</style>
      <div
        className="portfolio-enter min-h-screen bg-[#090a0b] text-white"
        dangerouslySetInnerHTML={{ __html: portfolioMarkup }}
      />
    </>
  );
}
