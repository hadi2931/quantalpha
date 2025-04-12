import { Maximize, X, Info } from "lucide-react"

export default function ResultDashboardPanel() {
  return (
    <div className="bg-[#111827] rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Result Dashboard</h2>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-white">
            <Maximize size={18} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-sm text-gray-400">Current Regime</p>
            <div className="flex items-center">
              <span className="text-lg font-medium">+</span>
              <span className="text-lg font-medium ml-1">Bullish</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-400 text-right">HMM State</p>
            <p className="text-sm font-medium text-right">State 2 (Bullish)</p>
          </div>
        </div>

        <div className="h-32 w-full relative mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 300 100">
              <path
                d="M0,50 C20,40 40,80 60,70 C80,60 100,20 120,30 C140,40 160,60 180,50 C200,40 220,20 240,10 C260,0 280,20 300,10"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
            <span>Jan 2020</span>
            <span>Dec 2023</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <p className="text-xs text-gray-400">Sharpe</p>
          <p className="text-xl font-medium">1.82</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Max Drawdown</p>
          <p className="text-xl font-medium text-red-500">-21.4%</p>
        </div>
        <div className="relative">
          <div className="flex items-center">
            <p className="text-xs text-gray-400">Trade Frequency</p>
            <Info size={12} className="ml-1 text-gray-400" />
          </div>
          <p className="text-xl font-medium">45</p>
          <p className="text-xs text-gray-400">trades/year</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-1">
          <p className="text-sm">Signal</p>
          <span className="ml-2 px-2 py-0.5 bg-green-900 text-green-400 rounded text-xs">Buy</span>
        </div>
        <div className="bg-[#1F2937] rounded-md p-2 text-xs text-gray-300 flex items-center">
          <Info size={12} className="mr-2 text-blue-400" />
          <span>Trading fees (0.1% per trade) included in all calculations</span>
        </div>
      </div>

      <button className="w-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-medium py-2 px-4 rounded-md transition-colors">
        View Detailed Report
      </button>
    </div>
  )
}
