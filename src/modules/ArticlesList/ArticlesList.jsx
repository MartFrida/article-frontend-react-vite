import { useState, useEffect } from "react"
import { fetchAllArticles } from '../../api/article-api.js'

const ArticlesList = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await fetchAllArticles()
        setArticles(data)

      } catch (error) {
        console.log(error.message)
      }
    }
    fetchArticles()
  }, [])

  const elements = articles.map(({ id, title }) => <li key={id}>{title}</li>)

  return (
    <ul>
      {elements}
    </ul>
  )

}

export default ArticlesList