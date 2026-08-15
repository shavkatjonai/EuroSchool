"use client";

import { useState } from "react";
const questions = [
  ["Qaysi sinflarga qabul ochiq?", "EURO SCHOOL 0-sinfdan 11-sinfgacha bo‘lgan o‘quvchilar uchun ta’lim yo‘nalishlarini taklif qiladi. Joriy qabuldagi bo‘sh joylarni telefon orqali aniqlashtiring."],
  ["Qabul jarayoni qanday?", "Avval bog‘lanasiz, maktab bilan tanishasiz va farzandingiz uchun qisqa diagnostika hamda suhbatdan o‘tasiz. Shundan so‘ng mos sinf va ta’lim rejasi tavsiya qilinadi."],
  ["Ota-ona natijalarni qanday kuzatadi?", "CRM platforma, oylik monitoring testlari va xulq-atvor reytingi orqali farzandingizning o‘sishi muntazam va tushunarli ko‘rinishda taqdim etiladi."],
  ["Qaysi xorijiy tillar o‘qitiladi?", "Dasturda ingliz, rus, arab, xitoy, koreys va nemis tillari bor. Aniq sinf bo‘yicha mavjud til guruhini qabul bo‘limidan tekshirish mumkin."],
  ["Musobaqaga qanday ro‘yxatdan o‘tiladi?", "Telefon orqali yoki Telegram kanalimizga o‘tib ro‘yxatdan o‘tish bo‘yicha ma’lumot oling. Joylar cheklangan, oldindan bog‘lanishni tavsiya qilamiz."],
];

export function Faq() {
  const [active, setActive] = useState<number | null>(0);
  return <div className="faq-list">{questions.map(([question, answer], index) => <div className={`faq-item ${active === index ? "is-open" : ""}`} key={question}><button onClick={() => setActive(active === index ? null : index)} aria-expanded={active === index}><span>{question}</span><b aria-hidden="true">+</b></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div>;
}
