import { ListOfNews } from "@/app/components/navbar/ListOfNews"
import { capitalizeFirstLetter } from "@/app/utils/basics"
import { getNewsByCategory } from "@/app/utils/news"

interface Props {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: Props) {
  return {
    title: "News - " + capitalizeFirstLetter(params.category)
  }
}

export default async function CategoryPage({ params }: Props) {
  const newsByCategory = await getNewsByCategory(params.category)

  return (
    <ListOfNews news={newsByCategory} />
  )
}