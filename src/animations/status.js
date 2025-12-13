export const runtime = "nodejs";

// estado en memoria (después lo pasamos a DB si querés)
let CURRENT_STATUS = {
  mode: "Disponible",
  message: "Respondo en 24–48 hs.",
  updatedAt: new Date().toISOString(),
};

export async function GET() {
  return Response.json(CURRENT_STATUS);
}
