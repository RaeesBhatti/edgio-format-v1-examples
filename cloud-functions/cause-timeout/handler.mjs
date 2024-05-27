export async function handleHttpRequest(request, context) {
  await new Promise(resolve => setTimeout(resolve, 21_000).unref());
  return new Response("done!");
}
