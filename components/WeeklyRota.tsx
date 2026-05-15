import React from 'react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ROTA_DATA = {
  movement: [
    { label: '7:45–9 AM', tasks: ['Lower Body'], isRest: false },
    { label: '7:45–9 AM', tasks: ['Core & Stability'], isRest: false },
    { label: '', tasks: ['Rest day'], note: 'Light walking or stretching', isRest: true },
    { label: '7:45–9 AM', tasks: ['Upper Body'], isRest: false },
    { label: '7:45–9 AM', tasks: ['Full Body & Community'], isRest: false },
    { label: '7:45–9 AM', tasks: ['Skill Lab'], isRest: false },
    { label: '', tasks: ['Rest day'], note: 'Full recovery', isRest: true },
  ],
  clean: [
    { label: '9–10 AM', tasks: ['Kitchen', 'Bathrooms', 'Symposium'] },
    { label: '9–10 AM', tasks: ['Kitchen', 'Atrium', 'Zen Room', 'Studio', 'Girl\'s Bathroom'] },
    { label: '9–10 AM', tasks: ['Kitchen', 'Bathrooms', 'Forge', 'Closet'] },
    { label: '9–10 AM', tasks: ['Kitchen', 'Tech Room', 'Zen Room', 'Girl\'s Bathroom'] },
    { label: '9–10 AM', tasks: ['Kitchen', 'Bathrooms', 'Symposium', 'Forge'] },
    { label: '9–10 AM', tasks: ['Kitchen', 'Atrium', 'Zen Room', 'Studio', 'Girl\'s Bathroom'] },
    { label: '9–10 AM', tasks: ['Kitchen', 'Bathrooms', 'Tech Room', 'Forge'] },
  ],
  supplies: [
    { label: '9–10 AM', tasks: ['Kitchen', 'Forge'] },
    { label: '9–10 AM', tasks: ['Bathroom', 'Laundry', 'Zen Room'] },
    { label: '9–10 AM', tasks: ['Kitchen', 'Tech Room'] },
    { label: '9–10 AM', tasks: ['Bathroom', 'Symposium'] },
    { label: '9–10 AM', tasks: ['Kitchen', 'Laundry', 'Closet'] },
    { label: '9–10 AM', tasks: ['Bathroom', 'Atrium'] },
    { label: '9–10 AM', tasks: ['Kitchen', 'Studio'] },
  ],
  cooking: [
    { tasks: [{ time: '8:45–10:30 AM', name: 'Breakfast' }, { time: '6–8 PM', name: 'Dinner' }] },
    { tasks: [{ time: '8:45–10:30 AM', name: 'Breakfast' }, { time: '6–8 PM', name: 'Dinner' }] },
    { tasks: [{ time: '8:45–10:30 AM', name: 'Breakfast' }, { time: '6–8 PM', name: 'Dinner' }] },
    { tasks: [{ time: '8:45–10:30 AM', name: 'Breakfast' }, { time: '6–8 PM', name: 'Dinner' }] },
    { tasks: [{ time: '8:45–10:30 AM', name: 'Breakfast' }, { time: '6–8 PM', name: 'Dinner' }] },
    { tasks: [{ time: '8:45–10:30 AM', name: 'Breakfast' }, { time: '6–8 PM', name: 'Dinner' }] },
    { tasks: [{ time: '8:45–10:30 AM', name: 'Breakfast' }, { time: '3–6 PM', name: 'Weekly meal prep' }, { time: '6–8 PM', name: 'Dinner' }] },
  ],
  procurement: [
    { isOff: true },
    { label: '2–5 PM', tasks: ['Create basket', 'Place orders', 'Pick up orders'] },
    { isOff: true },
    { label: '2–5 PM', tasks: ['Create basket', 'Place orders', 'Pick up orders'] },
    { isOff: true },
    { label: '2–5 PM', tasks: ['Create basket', 'Place orders', 'Pick up orders'] },
    { isOff: true },
  ],
  laundry: [
    { tasks: [{ time: '9–10 AM', name: 'Mixed' }, { time: '9–10 PM', name: 'Whites' }] },
    { tasks: [{ time: '9–10 AM', name: 'Mixed' }, { time: '9–10 PM', name: 'Socks & underwear' }] },
    { tasks: [{ time: '9–10 AM', name: 'Mixed' }, { time: '9–10 PM', name: 'Towels' }] },
    { tasks: [{ time: '9–10 AM', name: 'Mixed' }, { time: '9–10 PM', name: 'Whites' }] },
    { tasks: [{ time: '9–10 AM', name: 'Mixed' }, { time: '9–10 PM', name: 'Socks & underwear' }] },
    { tasks: [{ time: '9–10 AM', name: 'Mixed' }, { time: '9–10 PM', name: 'Towels' }] },
    { tasks: [{ time: '9–10 AM', name: 'Mixed' }, { time: '9–10 PM', name: 'Wool' }] },
  ],
  reset: [
    { tasks: [{ time: '9 PM', name: 'Reset rooms per manual 10 min' }, { time: '10 PM', name: 'Sleeping room setup 25 min' }] },
    { tasks: [{ time: '9 PM', name: 'Reset rooms per manual 10 min' }, { time: '10 PM', name: 'Sleeping room setup 25 min' }] },
    { tasks: [{ time: '9 PM', name: 'Reset rooms per manual 10 min' }, { time: '10 PM', name: 'Sleeping room setup 25 min' }] },
    { tasks: [{ time: '9 PM', name: 'Reset rooms per manual 10 min' }, { time: '10 PM', name: 'Sleeping room setup 25 min' }] },
    { tasks: [{ time: '9 PM', name: 'Reset rooms per manual 10 min' }, { time: '10 PM', name: 'Sleeping room setup 25 min' }] },
    { tasks: [{ time: '9 PM', name: 'Reset rooms per manual 10 min' }, { time: '10 PM', name: 'Sleeping room setup 25 min' }] },
    { tasks: [{ time: '9 PM', name: 'Reset rooms per manual 10 min' }, { time: '10 PM', name: 'Sleeping room setup 25 min' }] },
  ],
};

const LEGEND = [
  { key: 'M', name: 'Movement', color: 'bg-[#B8DDD4]', desc: 'Daily group calisthenics. 10 min warm-up, 20 min jog, then circuit.' },
  { key: 'C', name: 'Cleaning', color: 'bg-[#D8E6F1]', desc: 'Work through each room on the day\'s list using the room manual. Clean rooms top to bottom.' },
  { key: 'S', name: 'Supplies', color: 'bg-[#D8E5C5]', desc: 'Walk each listed room with its supply list. Restock and log anything missing on the inventory sheet.' },
  { key: 'K', name: 'Cooking', color: 'bg-[#EFD685]', desc: 'Cook the meal from the meal set, then clean the kitchen thoroughly afterwards within the slot.' },
  { key: 'P', name: 'Procurement', color: 'bg-[#D8C8EA]', desc: 'Create basket, place orders, pick up orders.' },
  { key: 'L', name: 'Laundry', color: 'bg-[#EDB8B3]', desc: 'Two loads daily. Morning is always Mixed; evening is the labelled type.' },
  { key: 'R', name: 'Reset', color: 'bg-[#D2C5A4]', desc: 'Lightly tidy and restore each room to order per the room manual. Set up sleeping room.' },
];

export default function WeeklyRota() {
  return (
    <div className="bg-[#FAF3E0] rounded-xl p-6 shadow-xl border border-stone-200 text-[#1F1B14] max-w-[1400px] overflow-x-auto mx-auto mb-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-6 pb-4 border-b border-[#C4B998] min-w-[800px]">
        <div>
          <div className="text-[11px] tracking-[0.22em] text-[#5C5340] font-semibold mb-1 uppercase">Collective Rota</div>
          <h2 className="text-4xl font-bold leading-none tracking-tight">Weekly schedule</h2>
        </div>
        <div className="flex gap-4 flex-wrap mt-4 md:mt-0">
          {LEGEND.map(item => (
            <div key={item.name} className="flex items-center gap-2 text-[13px] font-medium">
              <span className={`w-3.5 h-3.5 rounded-sm ${item.color}`}></span>
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className="min-w-[1000px] grid grid-cols-7 gap-1.5">
        {/* Headers */}
        {DAYS.map(day => (
          <div key={day} className="text-center pb-2">
            <div className="font-bold text-[15px]">{day}</div>
            <div className="text-[9px] tracking-[0.2em] text-[#7A6E50] font-medium uppercase mt-0.5">{day.substring(0, 3)}</div>
          </div>
        ))}

        {/* Rows */}
        {ROTA_DATA.movement.map((cell, i) => (
          <div key={`mv-${i}`} className={`rounded-md p-2 flex flex-col h-full text-[11.5px] ${cell.isRest ? 'bg-[#D8EAE4] text-[#4A7268]' : 'bg-[#B8DDD4] text-[#1F5448]'}`}>
            <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
              <span className="font-bold tracking-[0.07em] text-[10.5px]">MOVEMENT</span>
              {cell.label && <span className="bg-[#2E6F5B] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded tracking-wide">{cell.label}</span>}
            </div>
            <ul className="list-disc pl-3.5 m-0 leading-snug flex-1">
              {cell.tasks.map(t => <li key={t} className="mb-0.5">{t}</li>)}
            </ul>
            {cell.note && <div className="text-[10px] italic opacity-85 mt-1">{cell.note}</div>}
          </div>
        ))}

        {ROTA_DATA.clean.map((cell, i) => (
          <div key={`cl-${i}`} className="bg-[#D8E6F1] text-[#2A4860] rounded-md p-2 flex flex-col h-full text-[11.5px]">
            <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
              <span className="font-bold tracking-[0.07em] text-[10.5px]">CLEAN</span>
              {cell.label && <span className="bg-[#3F5C75] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded tracking-wide">{cell.label}</span>}
            </div>
            <ul className="list-disc pl-3.5 m-0 leading-snug flex-1">
              {cell.tasks.map(t => <li key={t} className="mb-0.5">{t}</li>)}
            </ul>
          </div>
        ))}

        {ROTA_DATA.supplies.map((cell, i) => (
          <div key={`sp-${i}`} className="bg-[#D8E5C5] text-[#364D1E] rounded-md p-2 flex flex-col h-full text-[11.5px]">
            <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
              <span className="font-bold tracking-[0.07em] text-[10.5px]">SUPPLIES</span>
              {cell.label && <span className="bg-[#3F5C28] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded tracking-wide">{cell.label}</span>}
            </div>
            <ul className="list-disc pl-3.5 m-0 leading-snug flex-1">
              {cell.tasks.map(t => <li key={t} className="mb-0.5">{t}</li>)}
            </ul>
          </div>
        ))}

        {ROTA_DATA.cooking.map((cell, i) => (
          <div key={`ck-${i}`} className="bg-[#EFD685] text-[#5A4710] rounded-md p-2 flex flex-col h-full text-[11.5px]">
            <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
              <span className="font-bold tracking-[0.07em] text-[10.5px]">COOKING</span>
            </div>
            {cell.tasks?.map(t => (
              <div key={t.name} className="flex items-center gap-1 mb-1 flex-wrap">
                <span className="bg-[#7A6019] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded tracking-wide">{t.time}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        ))}

        {ROTA_DATA.procurement.map((cell, i) => (
          cell.isOff ? (
            <div key={`pr-${i}`} className="bg-[#F0E9F6] text-[#9A8AB5] rounded-md p-2 flex flex-col h-full items-center justify-center">
              <span className="font-bold tracking-[0.07em] text-[11px] opacity-55 mb-2 w-full text-left">PROCUREMENT</span>
              <div className="text-lg opacity-50 flex-1 flex items-center">—</div>
            </div>
          ) : (
            <div key={`pr-${i}`} className="bg-[#D8C8EA] text-[#3D2A65] rounded-md p-2 flex flex-col h-full text-[11.5px]">
              <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                <span className="font-bold tracking-[0.07em] text-[10.5px]">PROCUREMENT</span>
                {cell.label && <span className="bg-[#5A4488] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded tracking-wide">{cell.label}</span>}
              </div>
              <ul className="list-disc pl-3.5 m-0 leading-snug flex-1">
                {cell.tasks?.map(t => <li key={t} className="mb-0.5">{t}</li>)}
              </ul>
            </div>
          )
        ))}

        {ROTA_DATA.laundry.map((cell, i) => (
          <div key={`ln-${i}`} className="bg-[#EDB8B3] text-[#6E2520] rounded-md p-2 flex flex-col h-full text-[11.5px]">
            <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
              <span className="font-bold tracking-[0.07em] text-[10.5px]">LAUNDRY</span>
            </div>
            {cell.tasks?.map(t => (
              <div key={t.name} className="flex items-center gap-1 mb-1 flex-wrap">
                <span className="bg-[#8A3A35] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded tracking-wide">{t.time}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        ))}

        {ROTA_DATA.reset.map((cell, i) => (
          <div key={`rs-${i}`} className="bg-[#D2C5A4] text-[#4D4128] rounded-md p-2 flex flex-col h-full text-[11.5px]">
            <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
              <span className="font-bold tracking-[0.07em] text-[10.5px]">RESET</span>
            </div>
            {cell.tasks?.map(t => (
              <div key={t.name} className="flex items-center gap-1 mb-1 flex-wrap">
                <span className="bg-[#6F6243] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded tracking-wide">{t.time}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mt-6 pt-4 border-t border-[#C4B998] min-w-[1000px]">
        {LEGEND.map(item => (
          <div key={item.key} className="flex gap-2 items-start">
            <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0 ${item.color}`}>{item.key}</div>
            <div>
              <div className="font-bold text-xs mb-0.5">{item.name}</div>
              <div className="text-[#5C5340] text-[10.5px] leading-snug">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
