"use client"

import { ChevronDown, ArrowRight, Database } from "lucide-react"
import { Switch } from "@/components/ui/switch"

interface DataSelectionPanelProps {
  variant?: "default" | "compact"
  selectedAsset: string
  setSelectedAsset: (asset: string) => void
  selectedInterval: string
  setSelectedInterval: (interval: string) => void
  sentimentEnabled: boolean
  setSentimentEnabled: (enabled: boolean) => void
}

export default function DataSelectionPanel({
  variant = "default",
  selectedAsset,
  setSelectedAsset,
  selectedInterval,
  setSelectedInterval,
  sentimentEnabled,
  setSentimentEnabled,
}: DataSelectionPanelProps) {
  const isCompact = variant === "compact"

  return (
    <div className="bg-[#111827] rounded-lg p-6">
      {isCompact && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Data Selection</h2>
          <div className="h-6 w-6 rounded-full bg-[#1F2937] flex items-center justify-center">
            <span className="text-xs">i</span>
          </div>
        </div>
      )}

      {!isCompact && <h2 className="text-xl font-medium mb-6">Data Selection</h2>}

      <div className="mb-4">
        <label className="block text-sm text-gray-400 mb-2">Select Asset</label>
        <div className="relative">
          <select
            className="w-full bg-[#1F2937] border border-[#374151] rounded-md py-2 px-3 appearance-none text-white"
            value={selectedAsset}
            onChange={(e) => setSelectedAsset(e.target.value)}
          >
            <option value="BTS">BTS</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm text-gray-400 mb-2">Data Source</label>
        <div className="relative">
          <div className="flex items-center bg-[#1F2937] border border-[#374151] rounded-md py-2 px-3 text-white">
            <Database size={16} className="mr-2 text-blue-400" />
            <span className="flex-1">CryptoQuant</span>
            <ChevronDown className="text-gray-400" size={18} />
          </div>
          <div className="absolute top-full left-0 right-0 mt-1 bg-[#1F2937] border border-[#374151] rounded-md py-1 z-10 hidden">
            <div className="px-3 py-1 hover:bg-[#374151] cursor-pointer">CryptoQuant</div>
            <div className="px-3 py-1 hover:bg-[#374151] cursor-pointer">Glassnode</div>
            <div className="px-3 py-1 hover:bg-[#374151] cursor-pointer">Dune Analytics</div>
            <div className="px-3 py-1 hover:bg-[#374151] cursor-pointer">Nansen</div>
          </div>
        </div>
        <p className="text-xs text-blue-400 mt-1">On-chain data provider</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm text-gray-400 mb-2">Select Interval</label>
        <div className="relative">
          <select
            className="w-full bg-[#1F2937] border border-[#374151] rounded-md py-2 px-3 appearance-none text-white"
            value={selectedInterval}
            onChange={(e) => setSelectedInterval(e.target.value)}
          >
            <option value="4H">4H</option>
            <option value="1D">1D</option>
            <option value="1W">1W</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm text-gray-400 mb-2">Backtest Period</label>
        <div className="bg-[#1F2937] border border-[#374151] rounded-md p-3">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <p className="text-xs text-gray-400">Start Date</p>
              <p className="text-sm">Jan 1, 2020</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">End Date</p>
              <p className="text-sm">Dec 31, 2023</p>
            </div>
          </div>
          <div className="h-2 bg-[#111827] rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-full"></div>
          </div>
          <p className="text-xs text-center mt-2 text-blue-400 font-medium">4-Year Backtesting Period</p>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <Switch
          checked={sentimentEnabled}
          onCheckedChange={setSentimentEnabled}
          className="data-[state=checked]:bg-[#3B82F6]"
        />
        <span className="ml-2 text-sm">Enable Sentiment Analysis</span>
      </div>

      <button className="w-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors">
        Next <ArrowRight size={16} className="ml-1" />
      </button>
    </div>
  )
}
