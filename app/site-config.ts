// Saytdagi tez-tez o'zgaradigan ma'lumotlarni shu fayldan yangilang.
export const siteConfig = {
  schoolName: "EURO SCHOOL",
  phoneDisplay: "+998 77 870 90 80",
  phoneHref: "+998778709080",
  location: "Yozyovon, O‘zbekiston",
  mapUrl: "https://maps.app.goo.gl/3Brq1WsLBZhDdedy7",
  admissionsOpen: true,
  limitedSeatsText: "Joylar soni cheklangan",
  event: {
    title: "EURO SCHOOL musobaqasi",
    dateLabel: "18-avgust, 2026",
    timeLabel: "09:00",
    dateTime: "2026-08-18T09:00:00+05:00",
  },
  social: {
    telegram: "https://t.me/euroschool_uz",
    instagram: "https://www.instagram.com/euroschool.uz/",
    youtube: "https://www.youtube.com/@euroschooluz1",
  },
  // Rahbar yoki asoschi shaxsiy brendi tayyor bo'lganda true qiling.
  leader: { show: false, name: "", role: "Maktab asoschisi", quote: "", image: "" },
} as const;
