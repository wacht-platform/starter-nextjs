import { requireAuth } from '@wacht/nextjs/server';

export async function GET(request: Request) {
  const auth = await requireAuth(request);

  return Response.json({
    userId: auth.userId,
    organizationId: auth.organizationId,
    workspaceId: auth.workspaceId,
  });
}
