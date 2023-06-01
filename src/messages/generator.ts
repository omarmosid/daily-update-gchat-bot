import { Env } from "../index";
import { getRandomElementFromArray } from "../utils/getRandom";

export const getGreeting = () => {
  const greetings = ["Happy days!", "Shalom!", "Guten Tag!", "Salam!"];
  const greeting = getRandomElementFromArray(greetings);
  return greeting;
};

export const generateMessage = (options: any, env: Env) => {
  const now = Date.now();

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(now);

  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(now);

  const greeting = getGreeting();

  return {
    text: `
*_Good morning!_*
*_Daily update thread [ ${formattedDate} ]_*
    
-- Update template: feel free to copy-paste --

*What am I trying to complete today?*
answer

*What is blocking me?*
answer
  
*What questions I have open, and to whom?*
answer

${
  dayOfWeek === "Friday" &&
  "Don't forget to send your kudos and Aperitivo ideas!"
}
${greeting} 🌻🦔`,
  };
};
