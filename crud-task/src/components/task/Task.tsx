"use client"

import Link from "next/link"
import { SyntheticEvent } from "react"

interface Props {
  task: TTask
}

export function Task({ task }: Props) {
  const deleteTask = (id: string) => async (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("Se ejecuta???")

    const res = await fetch(`/api/tasks/${id}`, {
      method: "DELETE"
    })
    const data = await res.json()

    console.log(data)
  }

  return (
    <Link href={`/tasks/${task.id}`}>
      <article className="hover:bg-gray-700 transition origin-bottom duration-300 rounded p-2 px-4 border-b-2 border-b-gray-700 flex justify-between items-center">

        <h2 className="text-lg">{task.title}</h2>
        <p>{task.updatedAt}</p>

        <button
          onClick={deleteTask(task.id)}
          className="bg-red-500 w-max p-2 px-4 rounded cursor-pointer text-white hover:opacity-80 transition duration-300 ease-out">
          Delete
        </button>
      </article>
    </Link>
  )
}