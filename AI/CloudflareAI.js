//  CLOUDFLARE WORKERS AI

import dotenv from 'dotenv'
dotenv.config()
import fetch from 'node-fetch'

async function run(model, input) {
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.ACCOUNT}/ai/run/${model}`, {
    headers: {
      Authorization: `Bearer ${process.env.CLOUDFLARE_WORKERS_KEY}`,
    },
    method: 'POST',
    body: JSON.stringify(input),
  })
  const result = await response.json()
  return result
}

const citiesTemperature = {
  Seoul: '10',
  'New York': '20',
  London: '15',
}

function getTemperature(city) {
  return citiesTemperature[city]
}

run('@hf/thebloke/llama-2-13b-chat-awq', {
  // messages: [
  //    {
  //      role: 'system',
  //      content: `You are a friendly assistant that helps users by providing temperature data for various cities. Here is some of the data you know: ${JSON.stringify(
  //        citiesTemperature
  //      )}`,
  //    },
  //    {
  //      role: 'user',
  //      content: 'What is the temperature in Seoul?',
  //    },
  //    {
  //      role: 'assistant',
  //      content: 'getTemperature("Seoul")',
  //      function: {
  //        name: 'getTemperature',
  //        arguments: ['Seoul'],
  //      },
  //    },
  // ],
  messages: [
    { role: 'system', content: 'You are a helpful assistant' },
    { role: 'user', content: 'Hello my name is Sagar Verma' },
    { role: 'user', content: 'What is my name?' },
  ],
}).then((response) => {
  console.log(response)
  // Check if response.messages is defined and not empty
  // if (response.messages && response.messages.length > 0) {
  //   const functionCall = response.messages[response.messages.length - 1].function
  //   if (functionCall && functionCall.name === 'getTemperature') {
  //     const temperature = getTemperature(...functionCall.arguments)
  //     run('@hf/thebloke/llama-2-13b-chat-awq', {
  //       messages: [
  //         {
  //           role: 'system',
  //           content: `You are a friendly assistant that helps users by providing temperature data for various cities. Here is some of the data you know: ${JSON.stringify(
  //             citiesTemperature
  //           )}`,
  //         },
  //         {
  //           role: 'user',
  //           content: 'What is the temperature in Seoul?',
  //         },
  //         {
  //           role: 'assistant',
  //           content: `The temperature in Seoul is ${temperature}°C.`,
  //         },
  //       ],
  //     }).then((response) => {
  //       console.log(JSON.stringify(response))
  //     })
  //   }
  // } else {
  //   console.error('No messages in the response or messages array is empty.')
  // }
})
