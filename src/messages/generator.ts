import { Env } from "../index";

export const generateMessage = (options: any, env: Env) => {
  const date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(Date.now());

  return {
    text: `
    *_Good morning!_*
    *_Daily update thread [ ${date} ]*
    ---

    *What am I trying to complete today?*
    answer
  
    *What is blocking me?*
    answer
  
    *What questions I have open, and to whom?*
    answer

    Happy days! 🌻🦔
    `,
  };
};
