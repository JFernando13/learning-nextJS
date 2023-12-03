"use client"
import { useRouter } from "next/navigation"
import { SyntheticEvent, useState } from "react"

const getTask = async (taskId: string): Promise<TTask> => {
  const res = await fetch(`http://localhost:3000/api/tasks/${taskId}`)
  return await res.json()
}

interface Props {
  params: {
    taskId: string
  }
}

const initialFields = {
  title: "",
  description: ""
}

export default function OneTaskPage({ params }: Props) {
  const [fields, setFields] = useState(initialFields)
  const router = useRouter()

  const onSubmit = (id: string) => async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch(`http://localhost:3000/api/task/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields)
    })
    const data = await res.json()

    if (data.id) {
      setFields(initialFields)
      router.push("/")
    }

  }

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log(e)
    if (e.currentTarget) {
      setFields(prevState => {
        return {
          ...prevState,
          [e.currentTarget.name]: e.currentTarget.value
        }
      })
    }
  }

  return (
    <main className="grid min-h-screen">
      <form
        className="grid gap-5 w-1/2 m-auto  place-items-center bg-gray-800 p-5 rounded-md text-black"
        onSubmit={onSubmit(params.taskId)}
      >
        <h2 className="text-white text-4xl font-bold">Update Task</h2>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Titulo..."
          onChange={handleChange}
          value={fields.title}
          className="w-full rounded p-2"
        />

        <textarea
          className="w-full rounded p-2"
          name="description"
          id="description"
          placeholder="Descripcion...">

        </textarea>

        <footer className="flex justify-center gap-6">
          <button type="submit" className="bg-gray-600 w-max p-2 px-4 rounded cursor-pointer text-white hover:opacity-80 transition duration-300 ease-out">
            Actualizar
          </button>

        </footer>


      </form>
    </main>
  )
}