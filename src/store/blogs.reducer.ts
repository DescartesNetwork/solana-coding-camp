import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

/**
 * Interface & Utility
 */

export type AuthorData = {
  id: string
  location: string
  name: string
  profile_image: string
  slug: string
  url: string
}

export type TagData = {
  id: string
  name: string
  slug: string
}

export type BlogsData = {
  access: boolean
  authors: AuthorData[]
  comment_id: string
  created_at: string
  custom_excerpt: string
  custom_template: any
  email_recipient_filter: string
  excerpt: string
  eature_image: string
  html: string
  id: string
  meta_description: string
  primary_author: AuthorData
  primary_tag: TagData
  published_at: string
  reading_time: number
  slug: string
  tags: TagData[]
  title: string
  updated_at: string
  url: string
  uuid: string
  visibility: string
  feature_image: string
}
export type BlogsState = Record<string, BlogsData>

/**
 * Store constructor
 */

const NAME = 'blogs'
const initialState: BlogsState = {}

/**
 * Actions
 */

export const setBlogsData = createAsyncThunk(
  `${NAME} setBlogsData`,
  async (data: BlogsData[]) => {
    if (!data) return {}
    const nextData: BlogsState = {}

    for (const post of data) {
      nextData[post.id] = post
    }
    return nextData
  },
)

/**
 * Usual procedure
 */

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder.addCase(
      setBlogsData.fulfilled,
      (state, { payload }) => void Object.assign(state, payload),
    ),
})

export default slice.reducer
