"use client"

import { useState } from "react"
import { InfoIcon } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { MarbleJarVisualization } from './marble-jar-visualization'
import { MarbleJarSimulation } from './marble-jar-simulation'

interface ProblemTemplateProps {
  title: string
  category: string
  difficulty: "Easy" | "Medium" | "Hard"
  description: string
  question: string
  illustration?: string
  solution: React.ReactNode
}

export default function ProblemTemplate({
  title,
  category,
  difficulty,
  description,
  question,
  illustration,
  solution,
}: ProblemTemplateProps) {
  const [showSolution, setShowSolution] = useState(false)

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Card className="p-6 rounded-2xl bg-white shadow-sm">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">{title}</h1>
          
          <div className="flex gap-3">
            <span className="px-4 py-1.5 bg-pink-500 text-white rounded-full text-sm font-medium">
              {category}
            </span>
            <span className="px-4 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              {difficulty}
            </span>
          </div>

          <p className="text-gray-700">{description}</p>

          <div className="flex items-start gap-6">
            <div className="flex-1 bg-blue-50 p-6 rounded-xl">
              <div className="flex gap-2 items-center text-blue-600">
                <InfoIcon size={20} />
                <span className="font-medium">Question:</span>
              </div>
              <p className="mt-2 text-gray-700">{question}</p>
            </div>
            {illustration && (
              <div className="w-56 h-56 shrink-0">
                <img 
                  src={illustration} 
                  alt="Problem illustration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="text-center">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="px-8 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-colors"
        >
          {showSolution ? "Hide Solution" : "Show Solution"}
        </button>
      </div>

      {showSolution && (
        <>
          <Card className="p-6 rounded-2xl bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Solution</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-3">Explanation</h3>
                {solution}
              </div>
              <MarbleJarVisualization />
            </div>
          </Card>

          <Card className="p-6 rounded-2xl bg-white shadow-sm">
            <MarbleJarSimulation />
          </Card>
        </>
      )}
    </div>
  )
}

