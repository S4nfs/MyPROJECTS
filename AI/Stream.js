import { StringOutputParser } from '@langchain/core/output_parsers'
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { ChatOpenAI } from '@langchain/openai'
import 'dotenv/config'
async function main() {
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

  const prompt = ChatPromptTemplate.fromTemplate('tell me a joke about {topic}')
  const parser = new StringOutputParser()
  const chain = prompt.pipe(model).pipe(parser)

  const eventStream = await chain.streamEvents({ topic: 'parrot' }, { version: 'v1' })
  // console.dir(JSON.stringify(eventStream, null, 2))
  // for await (const event of eventStream) {
  //   const kind = event.event
  //   if (kind === 'on_chain_stream') {
  //     console.log(event.data.chunk)
  //   }
  // }

  for await (const event of eventStream) {
    if (event.event === 'on_chain_stream') {
      console.log('BEIGINNNN', event.name)
    }
    if (event.event === 'on_chain_end') {
      console.log('end')
    }
  }
}

main().catch(console.error)
