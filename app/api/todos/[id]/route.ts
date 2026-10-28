import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

type Params = {
  params: {
    id: string;
  };
};
//@ts-ignore
export async function GET(
  request: NextRequest,
  ctx: RouteContext<"/api/todo/[id]">,
) {
  try {
    //@ts-ignore
    const { id } = await ctx.params;
    const todo = await prisma.todo.findUnique({
      where: {
        id: id,
      },
    });
    if (!todo) {
      return NextResponse.json(
        {
          error: "todo not found",
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(
      {
        success: true,
        data: todo,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        error: "failed to create todo",
      },
      {
        status: 500,
      },
    );
  }
}
