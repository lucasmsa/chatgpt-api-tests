import axios from 'axios';
import { CHATGPT_API_KEY, CHATGPT_API_URL } from '../config/apiInformations';

interface ChatGptGiftsResponse {
  answer: string;
}

export async function getChatGptGiftsResponse(
  prompt: string
): Promise<ChatGptGiftsResponse> {
  try {
    const chatGptResponse = await axios.post(
      CHATGPT_API_URL,
      {
        prompt,
        max_tokens: 50,
        n: 1,
        stop: null,
        temperature: 0.8,
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
    console.log({ choices });

    const chatgptAnswer = choices[0].text.trim();

    return {
      answer: chatgptAnswer,
    };
  } catch (error) {
    console.error(error.response.data);
  }
}
