export async function HEAD() {
  return new Response(null, { status: 200 });
}
export async function GET() {
  return new Response('ok', { status: 200 });
}
