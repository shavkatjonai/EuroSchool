"use client";

import { useEffect, useState } from "react";

type Remaining = { days: number; hours: number; minutes: number; seconds: number };
const EMPTY: Remaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function getRemaining(target: string): Remaining {
  const distance = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  };
}

export function Countdown({ target, compact = false }: { target: string; compact?: boolean }) {
  const [remaining, setRemaining] = useState<Remaining>(EMPTY);
  useEffect(() => {
    const update = () => setRemaining(getRemaining(target));
    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, [target]);
  const units = [[remaining.days, "kun"], [remaining.hours, "soat"], [remaining.minutes, "daqiqa"], [remaining.seconds, "soniya"]] as const;
  return <div className={compact ? "countdown countdown--compact" : "countdown"} aria-label="Tadbirgacha qolgan vaqt">
    {units.map(([value, label]) => <div className="countdown__unit" key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div>)}
  </div>;
}
