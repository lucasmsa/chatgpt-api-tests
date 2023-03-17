import { config as configureDotenv } from 'dotenv';
configureDotenv();

import express, { Request, Response } from 'express';
import { getChatGptGiftsResponse } from './services/getChaptGptGiftsResponseService';
import { generateGiftsPrompt } from './util/generatePrompt';

const app = express();

app.use(express.json());

app.post('/', async (request: Request, response: Response) => {
  const { age, genre, interests } = request.body;

  const chatGptPrompt = generateGiftsPrompt({
    age,
    genre,
    interests,
  });

  const chatGptResponse = await getChatGptGiftsResponse(chatGptPrompt);

  return response.json({
    chatGptResponse,
  });
});

app.listen(3003, () => {
  console.log('🚀 Server is running on port 3003');
});
