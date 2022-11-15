import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { AppState } from 'store'

export const useBlogs = () => {
  const blogs = useSelector((state: AppState) => state.blogs)
  const [camp1Blogs, setCamp1Blogs] = useState<string[]>([])
  const [camp2Blogs, setCamp2Blogs] = useState<string[]>([])

  const filterBlogs = useCallback(() => {
    const camp1: string[] = []
    const camp2: string[] = []
    for (const id in blogs) {
      const { tags } = blogs[id]
      for (const { name } of tags) {
        if (name === 'Camp1') camp1.push(id)
        if (name === 'Camp2') camp2.push(id)
      }
    }
    setCamp1Blogs(camp1)
    return setCamp2Blogs(camp2)
  }, [blogs])

  useEffect(() => {
    filterBlogs()
  }, [filterBlogs])

  return { camp1Blogs, camp2Blogs, blogs }
}
