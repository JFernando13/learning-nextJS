export const getAllNews = async (): Promise<TNews[]> => {
  const res = await fetch("https://newsapi.org/v2/everything?q=apple&pageSize=12&page=2", {
    headers: {
      "X-Api-Key": "573cd23ac08745139dd977e420ac05f7",
    }
  })

  const { articles }: { articles: TNews[] } = await res.json()

  const mappedArticles = articles.map(article => {
    return {
      ...article,
      publishedAt: new Intl.DateTimeFormat('es-ES', {
        dateStyle: "long"
      }).format(new Date(article.publishedAt))
    }
  })
  return mappedArticles
}

export const getNewsByCategory = async (category: string) => {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&pageSize=12&page=2`, {
    headers: {
      "X-Api-Key": "573cd23ac08745139dd977e420ac05f7"
    }
  })

  const { articles }: { articles: TNews[] } = await res.json()

  const mappedArticles = articles.map(article => {
    return {
      ...article,
      publishedAt: new Intl.DateTimeFormat('es-ES', {
        dateStyle: "long"
      }).format(new Date(article.publishedAt))
    }
  })

  return mappedArticles
}