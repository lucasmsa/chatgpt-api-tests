interface GenerateGiftsPrompt {
  age: string;
  genre: string;
  interests: string;
}

export function generateGiftsPrompt({
  age,
  genre,
  interests,
}: GenerateGiftsPrompt): string {
  return `
    I would like to buy a gift for a ${age} year old ${genre} who likes ${interests}.
  `;
}
