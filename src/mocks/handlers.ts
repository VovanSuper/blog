import { http } from 'msw';

const handlers = [
  http.get('https://614c99f03c438c00179faa84.mockapi.io/fruits', (data) => new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
    }
  }))
];

export default handlers;
