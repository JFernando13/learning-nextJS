import { FormTask } from "@/components/task/FormTask"
import { useRouter } from "next/navigation"
import { SyntheticEvent } from "react"

export default function NewTaskPage() {
  const router = useRouter()

  const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fields = Object.fromEntries(new FormData(e.currentTarget))

    const newTask = {
      id: crypto.randomUUID(),
      ...fields
    }

    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newTask)
    })

    const task = await res.json()

    if (task.id) {
      fields.title = ""
      fields.description = ""
      router.replace("/")
    }
  }

  return (
    <main className="grid min-h-screen">
      <FormTask onSubmit={onSubmit}/>
    </main>
  )
}