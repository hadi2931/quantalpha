export default function StrategyReportPanel() {
  const reportData = [
    { entityDate: "20 Apr 2023", editTime: "21:20:25", signal: "Buy", frevel: "Breakout", score: 4 },
    { entityDate: "23 Apr 2023", editTime: "13:25:53", signal: "Hold", frevel: "Support", score: 2 },
    { entityDate: "30 Apr 2023", editTime: "15:20:22", signal: "Sell", frevel: "Resistance", score: -3 },
  ]

  return (
    <div className="bg-[#111827] rounded-lg p-6">
      <h2 className="text-lg font-medium mb-6">Strategy Report</h2>

      <div className="mb-6">
        <div className="grid grid-cols-5 gap-2 text-xs text-gray-400 mb-2">
          <div>Trade Date</div>
          <div>Time</div>
          <div>Score</div>
          <div>Action</div>
          <div>Pattern</div>
        </div>

        {reportData.map((item, index) => (
          <div key={index} className="grid grid-cols-5 gap-2 text-sm mb-3">
            <div>{item.entityDate}</div>
            <div>{item.editTime}</div>
            <div
              className={`flex justify-center ${
                item.score > 0 ? "text-green-400" : item.score < 0 ? "text-red-400" : ""
              }`}
            >
              {item.score > 0 ? "+" : item.score < 0 ? "-" : ""}
            </div>
            <div>{item.signal}</div>
            <div>{item.frevel}</div>
          </div>
        ))}
      </div>

      <div>
        <p className="text-sm mb-2">Equity Curve</p>
        <div className="h-20 w-full relative">
          <svg className="w-full h-full" viewBox="0 0 300 80">
            <path
              d="M0,60 C20,65 40,70 60,65 C80,60 100,55 120,50 C140,45 160,40 180,35 C200,30 220,25 240,20 C260,15 280,10 300,5"
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
