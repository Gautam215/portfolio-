"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
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
      <motion.div
        className="min-h-screen bg-[#090a0b] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        dangerouslySetInnerHTML={{ __html: portfolioMarkup }}
      />
    </>
  );
}
