import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import configs from 'configs'

const {
  stat: { projects },
} = configs

export enum Social {
  Twitter = 'twitter',
  Discord = 'discord',
  Website = 'website',
  Github = 'github',
  Telegram = 'telegram',
  Facebook = 'facebook',
}

export type ProjectMetadata = Partial<
  Record<Social, string> & Record<'others', string[]>
>

export type ProjectData = {
  name: string
  logo: string
  cover: string
  description: string
  author: string
  metadata: ProjectMetadata
}

export type ProjectState = Record<string, ProjectData>

/**
 * Store constructor
 */

const NAME = 'project'
const initialState: ProjectState = {}

/**
 * Actions
 */

export const getProjects = createAsyncThunk(`${NAME}/getProjects`, async () => {
  const {
    data: { items },
  } = await axios.get(projects)
  console.log(items)
  return {}
})

/**
 * Usual procedure
 */

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder.addCase(
      getProjects.fulfilled,
      (state, { payload }) => void Object.assign(state, payload),
    ),
})

export default slice.reducer
