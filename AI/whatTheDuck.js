import { DuckDuckGoSearch } from '@langchain/community/tools/duckduckgo_search'

// Instantiate the DuckDuckGoSearch tool.
const tool = new DuckDuckGoSearch({ maxResults: 1 })

// Get the results of a query by calling .invoke on the tool.
const result = await tool.invoke('What is Arclight?')

console.log(result)
