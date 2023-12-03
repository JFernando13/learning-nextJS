import { getAllTasks } from "@/utils/task"
import { Task } from "./Task"

export async function ListOfTask() {
  const allTasks = await getAllTasks()

  return (
    <section className="w-2/4 m-auto bg-gray-900 rounded-md min-h-[500px] p-7">
      {allTasks.map(task => <Task task={task} key={task.id} />)}
    </section>
  )
}