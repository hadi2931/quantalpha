import { ChevronDown } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function ModelSettingsPanel() {
  return (
    <div className="bg-[#111827] rounded-lg p-6">
      <h2 className="text-xl font-medium mb-6">Model Settings</h2>

      <div className="mb-4">
        <label className="block text-sm text-gray-400 mb-2">Lookback Window</label>
        <input
          type="text"
          className="w-full bg-[#1F2937] border border-[#374151] rounded-md py-2 px-3 text-white"
          value="160"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm text-gray-400 mb-2">Number of Hidden States</label>
        <div className="relative">
          <select
            className="w-full bg-[#1F2937] border border-[#374151] rounded-md py-2 px-3 appearance-none text-white"
            defaultValue="AB"
          >
            <option value="AB">AB</option>
            <option value="CD">CD</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm text-gray-400 mb-2">HMM Algorithm</label>
        <div className="relative">
          <select
            className="w-full bg-[#1F2937] border border-[#374151] rounded-md py-2 px-3 appearance-none text-white"
            defaultValue="baum-welch"
          >
            <option value="baum-welch">Baum-Welch</option>
            <option value="viterbi">Viterbi</option>
            <option value="forward-backward">Forward-Backward</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm">Include Sentiment Score</span>
        <Switch defaultChecked={true} className="data-[state=checked]:bg-[#10B981]" />
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className="text-sm">Include Trading Fees</span>
        <Switch defaultChecked={true} className="data-[state=checked]:bg-[#10B981]" />
      </div>

      <button className="w-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-medium py-2 px-4 rounded-md transition-colors">
        Run Model
      </button>
    </div>
  )
}
