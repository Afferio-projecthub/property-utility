// This is your Trade Selection Menu
export default function TradeMenu() {
  const trades = [
    "Plumbing", "Electric", "Tile", "Cabinets", 
    "Paint", "Windows", "Doors", "Floors", "Misc"
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-900">Select Trade</h1>
      <div className="grid grid-cols-3 gap-4">
        {trades.map((trade) => (
          <div key={trade} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 active:scale-95 transition-transform">
            <div className="w-14 h-14 bg-blue-50 rounded-full mb-3 flex items-center justify-center text-blue-600 text-xl font-bold">
              {trade[0]}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-600">{trade}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
