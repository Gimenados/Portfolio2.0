export const runtime = "nodejs";

import { headers } from "next/headers";

let CURRENT_STATUS = {
  mode: "Disponible",
  message: "Respondo en 24–48 hs.",
  updatedAt: new Date().toISOString(),
};

export async function POST(req) {
  const token = headers().get("x-admin-token");

  if (token !== process.env.ADMIN_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  CURRENT_STATUS = {
    mode: body.mode || CURRENT_STATUS.mode,
    message: body.message || CURRENT_STATUS.message,
    updatedAt: new Date().toISOString(),
  };

  return Response.json(CURRENT_STATUS);
}
