"use client";

import { useState } from "react";
const links = [["Maktab", "#maktab"], ["Ta’lim", "#talim"], ["Imkoniyatlar", "#imkoniyatlar"], ["Stipendiyalar", "#stipendiya"], ["Qabul", "#qabul"], ["Savollar", "#savollar"]];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-menu">
    <button className="menu-button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><span /><span /><i className="sr-only">Menyuni ochish</i></button>
    {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobil navigatsiya">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="button button--primary" href="#qabul" onClick={() => setOpen(false)}>Qabulga yozilish</a></nav>}
  </div>;
}
