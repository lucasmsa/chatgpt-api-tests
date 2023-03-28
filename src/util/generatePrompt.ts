interface GenerateGiftsPrompt {
  age: string;
  genre: string;
  interests: string;
}

export interface Prompt {
  role: string;
  content: string;
}

export function generateGiftsPrompt({
  age,
  genre,
  interests,
}: GenerateGiftsPrompt): Prompt[] {
  return [
    {
      role: 'user',
      content: `I would like to buy a gift for a ${age} year old ${genre} who likes ${interests}.`,
    },
  ];
}
