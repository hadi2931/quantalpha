export default function MainPanel() {
  return (
    <div className="bg-[#111827] rounded-lg p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mb-2">HMM-SENTIMENT</h1>
      <h2 className="text-3xl font-bold text-center mb-6">ALPHA TRADER</h2>
      <p className="text-lg mb-8">Predict Trade Win.</p>

      <button className="bg-[#10B981] hover:bg-[#059669] text-white font-medium py-2 px-6 rounded-md transition-colors">
        Start Strategy Relieve
      </button>
    </div>
  )
}
