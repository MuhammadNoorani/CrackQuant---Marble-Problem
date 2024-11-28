"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCcw, Shuffle } from 'lucide-react'

interface SimulationStats {
  totalTrials: number
  successfulPicks: number
  observedProbability: number
}

export function MarbleJarSimulation() {
  const [jar1Whites, setJar1Whites] = useState(1)
  const [jar1Blacks, setJar1Blacks] = useState(0)
  const [jar2Whites, setJar2Whites] = useState(49)
  const [jar2Blacks, setJar2Blacks] = useState(50)
  const [selectedJar, setSelectedJar] = useState<number | null>(null)
  const [stats, setStats] = useState<SimulationStats>({
    totalTrials: 0,
    successfulPicks: 0,
    observedProbability: 0,
  })
  const [isSimulating, setIsSimulating] = useState(false)

  const runSimulation = useCallback(() => {
    setIsSimulating(true)
    const jar = Math.random() < 0.5 ? 1 : 2
    
    let success = false
    if (jar === 1) {
      success = Math.random() < (jar1Whites / (jar1Whites + jar1Blacks))
    } else {
      success = Math.random() < (jar2Whites / (jar2Whites + jar2Blacks))
    }
    
    setSelectedJar(jar)
    
    setTimeout(() => {
      setStats(prev => {
        const newStats = {
          totalTrials: prev.totalTrials + 1,
          successfulPicks: prev.successfulPicks + (success ? 1 : 0),
          observedProbability: ((prev.successfulPicks + (success ? 1 : 0)) / (prev.totalTrials + 1)) * 100
        }
        return newStats
      })
      setIsSimulating(false)
    }, 1000)
  }, [jar1Whites, jar1Blacks, jar2Whites, jar2Blacks])

  const resetSimulation = useCallback(() => {
    setStats({
      totalTrials: 0,
      successfulPicks: 0,
      observedProbability: 0
    })
    setSelectedJar(null)
  }, [])

  const renderJar = (jarNumber: number, whites: number, blacks: number) => {
    const total = whites + blacks
    const whiteHeight = (whites / total) * 100
    const isSelected = selectedJar === jarNumber

    return (
      <div className={`relative w-24 sm:w-32 h-36 sm:h-48 rounded-3xl overflow-hidden border-2 transition-all ${
        isSelected ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200'
      }`}>
        <div 
          className="absolute bottom-0 w-full bg-gray-100 transition-all"
          style={{ height: `${whiteHeight}%` }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-medium">
            {whites} white
          </div>
        </div>
        <div 
          className="absolute top-0 w-full bg-gray-700 transition-all"
          style={{ height: `${100 - whiteHeight}%` }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-medium text-white">
            {blacks} black
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">Interactive Simulation</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={resetSimulation}
            className="flex-1 sm:flex-none"
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button
            size="sm"
            onClick={runSimulation}
            disabled={isSimulating}
            className="flex-1 sm:flex-none bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Draw Marble
          </Button>
        </div>
      </div>

      <div className="flex justify-center gap-4 sm:gap-8 items-center">
        {renderJar(1, jar1Whites, jar1Blacks)}
        {renderJar(2, jar2Whites, jar2Blacks)}
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
        <div className="p-2 sm:p-4 bg-gray-50 rounded-lg">
          <div className="text-lg sm:text-2xl font-bold">{stats.totalTrials}</div>
          <div className="text-xs sm:text-sm text-gray-600">Total Trials</div>
        </div>
        <div className="p-2 sm:p-4 bg-gray-50 rounded-lg">
          <div className="text-lg sm:text-2xl font-bold">{stats.successfulPicks}</div>
          <div className="text-xs sm:text-sm text-gray-600">White Marbles</div>
        </div>
        <div className="p-2 sm:p-4 bg-gray-50 rounded-lg">
          <div className="text-lg sm:text-2xl font-bold">{stats.observedProbability.toFixed(1)}%</div>
          <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Distribution Strategy
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          <Button
            variant="outline"
            onClick={() => {
              setJar1Whites(1)
              setJar1Blacks(0)
              setJar2Whites(49)
              setJar2Blacks(50)
              resetSimulation()
            }}
            className="w-full"
          >
            Optimal Strategy
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setJar1Whites(25)
              setJar1Blacks(25)
              setJar2Whites(25)
              setJar2Blacks(25)
              resetSimulation()
            }}
            className="w-full"
          >
            Even Distribution
          </Button>
        </div>
      </div>
    </div>
  )
}
