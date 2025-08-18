
from openai import OpenAI

client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key="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",
)

completion = client.chat.completions.create(
  extra_headers={
  },
  model="deepseek/deepseek-r1-0528:free",
  messages=[
    {
      "role": "user",
      "content": "What is the meaning of life?"
    }
  ]
)

print(completion.choices[0].message.content)
