const API_URI = "http://localhost:3000";

async function consumeAPI() {
  const response = await fetch(API_URI, {
    signal,
  });

  const reader = response.body.getReader();
}

const abortController = new AbortController();
await consumeAPI(abortController.signal);
