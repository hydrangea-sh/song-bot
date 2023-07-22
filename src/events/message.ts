import { event, Events } from '../utils/index.js';

export default event(Events.MessageCreate, ({ log }, msg) => {
  if (msg.content.toLowerCase().includes('ping')) {
    return msg.reply('pong');
  }
});
