
import { ListOfNews } from "./components/navbar/ListOfNews"
import { getAllNews } from "./utils/news"

export const metadata = {
  title: "News"
}

export default async function Home() {

  const allNews = await getAllNews()

  return (
    <ListOfNews news={allNews}/>
  )
}
