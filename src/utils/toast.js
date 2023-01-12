import EventManager from '../lib/EventManager';

export const ToastEventManager = new EventManager();

export default function toast({ type, text, duration }) {
  ToastEventManager.emit('addtoast', { type, text, duration });
}
