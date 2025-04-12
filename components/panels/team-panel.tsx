import { Monitor } from "lucide-react"

interface TeamPanelProps {
  variant?: "default" | "compact"
}

export default function TeamPanel({ variant = "default" }: TeamPanelProps) {
  const isCompact = variant === "compact"
  const teamMembers = [
    { name: "Sarah", role: isCompact ? "Data Scientist" : "Lead Data Scientist" },
    { name: "Mark", role: isCompact ? "ML Engineer" : "ML Engineer" },
    { name: "Anna", role: isCompact ? "Quant Analyst" : "Quantitative Analyst" },
  ]

  return (
    <div className="bg-[#111827] rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Team/About</h2>
        {isCompact && (
          <div className="h-6 w-6 rounded-full border border-gray-600 flex items-center justify-center">
            <Monitor size={14} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-gray-700 mb-2 overflow-hidden">
              <div className="w-full h-full bg-gray-600"></div>
            </div>
            <p className="text-sm font-medium">{member.name}</p>
            <p className="text-xs text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>

      {isCompact ? (
        <div className="flex justify-center space-x-4 mb-4">
          <div className="h-6 w-6 rounded-full border border-gray-600 flex items-center justify-center">
            <Monitor size={14} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center space-x-4 mb-4">
          <div className="h-6 w-6 rounded-full border border-gray-600 flex items-center justify-center">
            <Monitor size={14} />
          </div>
          <div className="h-6 w-6 rounded-full border border-gray-600 flex items-center justify-center">
            <Monitor size={14} />
          </div>
          <div className="h-6 w-6 rounded-full border border-gray-600 flex items-center justify-center">
            <Monitor size={14} />
          </div>
          <div className="h-6 w-6 rounded-full border border-gray-600 flex items-center justify-center">
            <Monitor size={14} />
          </div>
        </div>
      )}

      <p className="text-sm text-center">
        We believe crypto trading should be{" "}
        {isCompact ? "driven by data, not emotion." : "based on quantitative analysis and machine learning."}
      </p>
    </div>
  )
}
