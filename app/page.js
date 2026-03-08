// app/page.js - The Starting Screen
export default function PropertyList() {
  // Static list for now - we will connect to Firebase next
  const properties = [
    { id: 1, name: "123 Main St", status: "Active" },
    { id: 2, name: "456 Oak Ave", status: "Active" },
    { id: 3, name: "789 Pine Rd", status: "Active" }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">Flip App</h1>
        <p className="text-gray-500 font-medium">Select a property to manage trades</p>
      </header>

      <div className="grid gap-4">
        {properties.map((prop) => (
          <a 
            href="/trades" 
            key={prop.id} 
            className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-500 hover:shadow-md transition-all active:scale-[0.98]"
          >
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800">{prop.name}</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase">
                {prop.status}
              </span>
            </div>
          </a>
        ))}
      </div>
      
      {/* Manager Only: Placeholder for adding properties */}
      <button className="mt-8 w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 active:scale-95 transition-all">
        + Add New Property
      </button>
    </div>
  );
}
