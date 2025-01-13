import { RunnableSequence } from '@langchain/core/runnables'
import { ChatOpenAI } from '@langchain/openai'
import { StringOutputParser } from '@langchain/core/output_parsers'
import 'dotenv/config'

const model = new ChatOpenAI(
  {
    openAIApiKey: process.env.GROQ_KEY,
    modelName: 'llama-3.1-70b-versatile',
    temperature: 0.7,
  },
  {
    baseURL: 'https://api.groq.com/openai/v1',
  }
)

// Create a sequence where the model is first and then parse the output
const runnable = new RunnableSequence([model, new StringOutputParser()])

// Wrap the invocation in an async function
async function main() {
  try {
    const result = await runnable.invoke({ input: 'Tell me a joke.' })
    console.log(result)
  } catch (error) {
    console.error('Error invoking runnable:', error)
  }
}

main()
