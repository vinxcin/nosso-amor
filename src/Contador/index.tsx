import { useEffect, useState } from 'react';
import { nosso_amor } from '@/assets/images';

const startDate = new Date("2025-01-02T14:14:14");

function getTimeDifference(from: Date, to: Date) {
  const diff = to.getTime() - from.getTime();

  const years = to.getFullYear() - from.getFullYear();
  const months = to.getMonth() - from.getMonth() + (years * 12);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { years, months, days, hours, minutes, seconds };
}

export function Contador() {
  const [time, setTime] = useState(getTimeDifference(startDate, new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeDifference(startDate, new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative flex pt-20 lg:pt-20 sm:pt-52 justify-center min-h-screen text-center text-white"
      style={{
        backgroundImage: `url(${nosso_amor})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/35 backdrop-blur-[4px]"></div>

      <div className="relative z-10 p-4 flex flex-col gap-88 sm:p-6">
        <div className="flex sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6">
          <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-bold titulo-romantico">
            Estamos juntos há
          </h1>
          <p className="text-7xl sm:text-5xl md:text-7xl animate-pulse text-red-400"> 💚</p>
        </div>
        <p className="text-4xl sm:text-3xl md:text-4xl leading-relaxed">
          {time.years > 0 && `${time.years} ano${time.years > 1 ? 's' : ''}, `}
          {time.months % 12} mes{(time.months % 12) !== 1 ? 'es' : ''},<br />
          {time.days} dia{time.days !== 1 ? 's' : ''}, {time.hours}h {time.minutes}m {time.seconds}s
        </p>
      </div>
    </div>
  );
}
