import { error } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

// get all centerlines
export const GET: RequestHandler = async () => {
  const result = "";
  return new Response(JSON.stringify(result));
};

// create a new centerline
export const POST: RequestHandler = async () => {
  const result = "";
  return new Response(JSON.stringify(result));
};
