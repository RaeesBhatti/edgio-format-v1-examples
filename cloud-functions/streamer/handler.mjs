function createStream() {
  return new ReadableStream({
    start(controller) {
      let i = 1;
      const timer = setInterval(() => {
        controller.enqueue(new TextEncoder().encode(i.toString() + '\n'));
        if (i++ === 5) {
          controller.close();
          clearInterval(timer);
        }
      }, 1000);
    }
  });
}

export async function handleHttpRequest(request, context) {
  const stream = createStream();
  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
  });
}
