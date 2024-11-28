import ProblemTemplate from "@/components/problem-template"

export default function Page() {
  return (
    <ProblemTemplate
      title="The Marble Jar Probability Puzzle"
      category="Probability"
      difficulty="Medium"
      description="Imagine you are presented with two empty jars and 100 marbles - 50 white and 50 black. Your task is to distribute the marbles between the two jars in any way you choose. Once the marbles are distributed, the jars will be shaken up and rearranged on the table so you can no longer tell which jar contains which marbles. You will then be allowed to choose one jar and withdraw a single marble from it. Your goal is to maximize the chances of selecting a white marble."
      question="What is the optimal distribution of marbles between the two jars to maximize the probability of selecting a white marble?"
      illustration="/placeholder.svg?height=200&width=200"
      solution={
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold mb-3">1. Maximizing the Probability of Selecting a White Marble</h3>
            <p>
              To maximize the probability of selecting a white marble, we need to concentrate as many white marbles as possible in one jar. The optimal strategy is to place 1 white marble in one jar and the remaining 99 marbles (49 white, 50 black) in the other jar.
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium">This approach gives us:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Probability of selecting the jar with 1 white marble: 1/2</li>
                <li>Probability of selecting a white marble from that jar: 1/1 = 100%</li>
              </ul>
              <p className="mt-2">Therefore, the overall probability = 1/2 * 1 = 1/2 or 50%</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">2. Minimizing the Probability of Selecting a White Marble</h3>
            <p>
              To minimize the probability, we should distribute the marbles evenly between the two jars. This means placing 25 white and 25 black marbles in each jar.
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium">This gives us:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Probability of selecting either jar: 1/2</li>
                <li>Probability of selecting a white marble from either jar: 25/50 = 50%</li>
              </ul>
              <p className="mt-2">Therefore, the overall probability = 1/2 * 1/2 = 1/4 or 25%</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-medium">Key Insight:</p>
            <p>
              By concentrating the white marbles in a single jar, we maximize the probability of selecting a white marble. Conversely, by spreading the marbles evenly, we minimize the probability of selecting a white marble.
            </p>
          </div>
        </div>
      }
    />
  )
}

