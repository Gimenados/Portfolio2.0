export const runtime = "nodejs";

let CURRENT_STATUS = {
  mode: "Disponible",
  message: "Respondo en 24–48 hs.",
  updatedAt: new Date().toISOString(),
};

export async function GET() {
  return Response.json(CURRENT_STATUS);
}
