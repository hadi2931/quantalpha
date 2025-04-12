import { ChevronDown } from "lucide-react"

export default function SentimentAnalysisPanel() {
  const sentimentData = [
    { entityDate: "14 Apr 2023", editDate: "16 Apr 2023", signal: "Bullish", score: 2 },
    { entityDate: "15 Apr 2023", editDate: "12 Apr 2023", signal: "Strong Buy", score: 3 },
    { entityDate: "29 Apr 2023", editDate: "Apr 2023", signal: "Neutral", score: 0 },
  ]

  return (
    <div className="bg-[#111827] rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Sentiment Analysis</h2>
        <div className="relative">
          <select className="bg-transparent text-sm border border-[#374151] rounded-md py-1 px-3 appearance-none text-white">
            <option value="Currency">Currency</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
        </div>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-4 gap-2 text-xs text-gray-400 mb-2">
          <div>Entity Date</div>
          <div>Edit Date</div>
          <div>Signal</div>
          <div></div>
        </div>

        {sentimentData.map((item, index) => (
          <div key={index} className="grid grid-cols-4 gap-2 text-sm mb-3">
            <div>{item.entityDate}</div>
            <div>{item.editDate}</div>
            <div>{item.signal}</div>
            <div className="flex justify-end">
              <div
                className={`h-6 w-6 rounded-full flex items-center justify-center ${
                  item.score > 0 ? "bg-green-900 text-green-400" : "bg-red-900 text-red-400"
                }`}
              >
                {item.score}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="text-sm mb-2">Sentiment Trend</p>
        <div className="h-20 w-full relative">
          <svg className="w-full h-full" viewBox="0 0 300 80">
            <path
              d="M0,70 C20,65 40,60 60,55 C80,50 100,45 120,40 C140,35 160,30 180,25 C200,20 220,15 240,10 C260,5 280,0 300,0"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
