"use client"
import { SyntheticEvent } from "react"

interface Props {
  onSubmit: (e: SyntheticEvent<HTMLFormElement>) => void  
}

export function FormTask({ onSubmit }: Props) {

  return (
    <form
      className="grid gap-5 w-1/2 m-auto  place-items-center bg-gray-800 p-5 rounded-md text-black"
      onSubmit={onSubmit}
    >
      <h2 className="text-white text-4xl font-bold">Create New Task</h2>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Titulo..."
        className="w-full rounded p-2"
      />

      <textarea
        className="w-full rounded p-2"
        name="description"
        id="description"
        placeholder="Descripcion...">

      </textarea>

      <button className="bg-gray-600 w-max p-2 px-4 rounded cursor-pointer text-white hover:opacity-80 transition duration-300 ease-out">
        Guardar Tarea
      </button>
    </form>
  )
}