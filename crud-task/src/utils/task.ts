
export const getAllTasks = async (): Promise<TTask[]> => {
  const res = await fetch("http://localhost:3000/api/tasks", {
    next: { revalidate: 500 }
  })

  return await res.json()
}