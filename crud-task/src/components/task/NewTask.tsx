"use client"

import { PlusCircle } from "iconoir-react/regular"
import Link from "next/link"

interface TTaskCreate {
  title: string,
  description: string
}

const task = {
  title: "Voler a hablarle...",
  description: "Seguro que quieres volver a hablarle"
}

export function NewTask() {
  const createTask = (task: TTaskCreate) => async () => {
    const newTask = {
      id: crypto.randomUUID(),
      ...task
    }

    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask)
    })
  }

  return (
    <Link
      href="/tasks/new"
      onClick={createTask(task)}
      className="absolute bottom-14 right-14 p-4 rounded-full bg-gray-700">
      <PlusCircle width="3em" height="3em" />
    </Link>
  )
}