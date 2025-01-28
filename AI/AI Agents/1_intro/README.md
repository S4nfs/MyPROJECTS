# Intro
This directory contains a single graph, located inside the `index.ts` file.

## Setup

To setup the intro project, install the dependencies:

```bash
yarn install
```

## Environment variables

The intro project requires Tavily and OpenAI API keys to run. Sign up here:

- OpenAI: https://platform.openai.com/signup
- Tavily: https://tavily.com/

Once you have your API keys, create a `.env` file in this directory and add the following:

```bash
TAVILY_API_KEY=YOUR_API_KEY
OPENAI_API_KEY=YOUR_API_KEY
```

## LangGraph Config

The LangGraph configuration file for the intro project is located inside [`langgraph.json`](langgraph.json). This file defines the single graph implemented in the project: `simple_agent`.