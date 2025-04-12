"use client"

import { useState } from "react"
import MainPanel from "./panels/main-panel"
import DataSelectionPanel from "./panels/data-selection-panel"
import ModelSettingsPanel from "./panels/model-settings-panel"
import ResultDashboardPanel from "./panels/result-dashboard-panel"
import SentimentAnalysisPanel from "./panels/sentiment-analysis-panel"
import StrategyReportPanel from "./panels/strategy-report-panel"
import TeamPanel from "./panels/team-panel"

export default function TradingDashboard() {
  const [selectedAsset, setSelectedAsset] = useState("BTS")
  const [selectedInterval, setSelectedInterval] = useState("4H")
  const [sentimentEnabled, setSentimentEnabled] = useState(true)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <MainPanel />
        <DataSelectionPanel
          selectedAsset={selectedAsset}
          setSelectedAsset={setSelectedAsset}
          selectedInterval={selectedInterval}
          setSelectedInterval={setSelectedInterval}
          sentimentEnabled={sentimentEnabled}
          setSentimentEnabled={setSentimentEnabled}
        />
        <ModelSettingsPanel />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <DataSelectionPanel
          variant="compact"
          selectedAsset={selectedAsset}
          setSelectedAsset={setSelectedAsset}
          selectedInterval={selectedInterval}
          setSelectedInterval={setSelectedInterval}
          sentimentEnabled={sentimentEnabled}
          setSentimentEnabled={setSentimentEnabled}
        />
        <ResultDashboardPanel />
        <SentimentAnalysisPanel />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StrategyReportPanel />
        <TeamPanel />
      </div>
    </div>
  )
}
