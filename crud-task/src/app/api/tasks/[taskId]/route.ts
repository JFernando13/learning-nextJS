import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

const { task: tasks } = prisma
interface Props {
  params: { taskId: string }
}

export async function GET(_: Request, { params }: Props) {
  const response = await tasks.findUnique({
    where: {
      id: params.taskId
    }
  })

  return NextResponse.json(response)
}

export async function PUT(request: Request, { params }: Props) {
  const task = await request.json()

  const taskUpdated = await tasks.update({
    where: {
      id: params.taskId
    },
    data: task
  })

  return NextResponse.json(taskUpdated)
}

export async function DELETE(_: Request, { params }: Props) {
  try {
    const taksRemoved = await tasks.delete({
      where: {
        id: params.taskId
      }
    })

    console.log(taksRemoved)

    return NextResponse.json("Eliminando tarea: " + params.taskId)
  } catch (err) {
    return err instanceof Error && NextResponse.json(err.message)
  }
}