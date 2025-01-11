import { useState, useEffect } from "react"
import { fetchAllArticles } from '../../api/article-api.js'

const ArticlesList = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { result } = await fetchAllArticles()
        setArticles(result)
        console.log(articles)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchArticles()
  }, [])

  return (
    <ul>
      {articles?.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>

  )

}

export default ArticlesList