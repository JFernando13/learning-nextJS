import { ListOfTask } from "@/components/task/ListOfTask";
import { NewTask } from "@/components/task/NewTask";

export default async function Home() {
  return (
    <main>
      <header>
        <h1 className="text-4xl text-center py-7 font-bold">Task - CRUD</h1>
      </header>
      <ListOfTask />
      <NewTask />
    </main>
  )
}
