import { ChatGroq } from '@langchain/groq'
import { ChatPromptTemplate } from '@langchain/core/prompts'
import 'dotenv/config'

// Mocked out function, could be a database/API call in production
function getCurrentWeather(location, _unit) {
  if (location.toLowerCase().includes('tokyo')) {
    return JSON.stringify({ location, temperature: '10', unit: 'celsius' })
  } else if (location.toLowerCase().includes('san francisco')) {
    return JSON.stringify({
      location,
      temperature: '72',
      unit: 'fahrenheit',
    })
  } else {
    return JSON.stringify({ location, temperature: '22', unit: 'celsius' })
  }
}

// Bind function to the model as a tool
const chat = new ChatGroq({
  apiKey: process.env.GROQ_KEY,
  model: 'llama3-8b-8192',
}).bind({
  tools: [
    {
      type: 'function',
      function: {
        name: 'get_current_weather',
        description: 'Get the current weather in a given location',
        parameters: {
          type: 'object',
          properties: {
            location: {
              type: 'string',
              description: 'The city and state, e.g. San Francisco, CA',
            },
            unit: { type: 'string', enum: ['celsius', 'fahrenheit'] },
          },
          required: ['location'],
        },
      },
    },
  ],
  tool_choice: 'auto',
})

// const res = await chat.invoke([['human', "What's the weather like in San Francisco?"]])
const res = await chat.invoke([['human', "What's the weather like in San Francisco?"]])

console.log(res.additional_kwargs.tool_calls, res.result)
