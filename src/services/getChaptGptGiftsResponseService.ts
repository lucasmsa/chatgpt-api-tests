import axios from 'axios';
import { CHATGPT_API_KEY, CHATGPT_API_URL } from '../config/apiInformations';
import { Prompt } from '../util/generatePrompt';

interface ChatGptGiftsResponse {
  answer: string;
}

export async function getChatGptGiftsResponse(
  prompt: Prompt[]
): Promise<ChatGptGiftsResponse> {
  try {
    const chatGptResponse = await axios.post(
      CHATGPT_API_URL,
      {
        model: 'gpt-3.5-turbo',
        temperature: 0.3,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        messages: prompt,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${CHATGPT_API_KEY}`,
        },
      }
    );

    const { data } = chatGptResponse;
    const { choices } = data;

    const chatgptAnswer = choices[0].message.trim();

    return {
      answer: chatgptAnswer,
    };
  } catch (error) {
    console.error(error.response.data);
  }
}
