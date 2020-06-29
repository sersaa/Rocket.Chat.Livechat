import queryString from 'query-string';
import LivechatClient from '@rocket.chat/sdk/lib/clients/Livechat';

const host = 'https://alquimio.rocket.chat'
const useSsl = host && host.match(/^https:/) !== null;

export const Livechat = new LivechatClient({ host, protocol: 'ddp', useSsl });
