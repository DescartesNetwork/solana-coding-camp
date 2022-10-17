import { useSelector } from 'react-redux'
import { AppState } from 'store'

export const useBlogs = () => {
  const blogs = useSelector((state: AppState) => state.blogs)

  return blogs
}
