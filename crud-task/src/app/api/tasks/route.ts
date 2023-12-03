import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const { task: tasks } = prisma

export async function GET() {
  const response = await tasks.findMany()
  return Response.json(response)
}

export async function POST(request: Request) {
  try {
    const task = await request.json()

    const newTask = await tasks.create({
      data: task
    })

    return NextResponse.json(newTask)
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message })
    }
  }
}