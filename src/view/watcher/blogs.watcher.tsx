import { Fragment, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from 'store'
import { BlogsData, setBlogsData } from 'store/blogs.reducer'

const ACADEMY_DOMAIN = 'https://academy.sentre.io'
const CONTENT_KEY = '2f42a053d7da65e50e82be9166'
const SOLANA_TAG_NAME = 'Solana'

const BlogsWatcher = () => {
  const dispatch = useDispatch<AppDispatch>()

  const fetchBlogsData = useCallback(
    async (limit = 'all') => {
      try {
        const response = await fetch(
          `${ACADEMY_DOMAIN}/ghost/api/content/posts/?key=${CONTENT_KEY}&include=tags,authors&limit=${limit}`,
        )
        const data = await response.json()

        const blogs = data.posts as BlogsData[]
        const filterByTags = blogs.filter((blog) => {
          const result = blog.tags.filter((tag) => tag.name === SOLANA_TAG_NAME)
          return !!result && result.length > 0
        })
        return dispatch(setBlogsData(filterByTags))
      } catch (error) {
        return dispatch(setBlogsData([]))
      }
    },
    [dispatch],
  )

  // Listen window events
  useEffect(() => {
    fetchBlogsData()
  }, [fetchBlogsData])

  return <Fragment />
}

export default BlogsWatcher
