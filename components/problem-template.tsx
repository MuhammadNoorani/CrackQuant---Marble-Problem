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
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card className="p-4 rounded-2xl bg-white shadow-sm">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-medium">
              <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              {category}
            </span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              {difficulty}
            </span>
          </div>

          {/* Mobile illustration */}
          <div className="md:hidden">
            {illustration && (
              <div className="w-48 h-48 mx-auto">
                <img 
                  src={illustration} 
                  alt="Problem illustration"
                  className="w-full h-full object-cover rounded-xl"
                  width={192}
                  height={192}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 space-y-4">
              <p className="text-gray-700">{description}</p>

              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="flex gap-2 items-center text-blue-600">
                  <InfoIcon className="w-4 h-4" />
                  <span className="font-medium">Question:</span>
                </div>
                <p className="mt-2 text-gray-700">{question}</p>
              </div>
            </div>
            
            {/* Desktop illustration */}
            {illustration && (
              <div className="hidden md:block w-48 h-48 shrink-0">
                <img 
                  src={illustration} 
                  alt="Problem illustration"
                  className="w-full h-full object-cover rounded-xl"
                  width={192}
                  height={192}
                />
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="text-center">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-colors"
        >
          {showSolution ? "Hide Solution" : "Show Solution"}
        </button>
      </div>

      {showSolution && (
        <>
          <Card className="p-4 rounded-2xl bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Solution</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-3">Explanation</h3>
                {solution}
              </div>
              <MarbleJarVisualization />
            </div>
          </Card>

          <Card className="p-4 rounded-2xl bg-white shadow-sm">
            <MarbleJarSimulation />
          </Card>
        </>
      )}
    </div>
  );
}
