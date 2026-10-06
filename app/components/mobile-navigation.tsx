"use client";

import { useState } from "react";

type NavigationItem = { label: string; href: string };

export function MobileNavigation({ items }: { items: NavigationItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mobile-navigation" aria-label="Mobile navigation" onKeyDown={(event) => event.key === "Escape" && setOpen(false)}>
      <button
        className={`menu-button${open ? " is-open" : ""}`}
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span className="visually-hidden">Navigation</span>
      </button>
      <div className={`mobile-navigation-panel${open ? " is-open" : ""}`} id="mobile-navigation-panel" hidden={!open}>
        {items.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
      </div>
    </nav>
  );
}
