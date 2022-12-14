import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { uid } from '@sentre/codingcamp'
import axios from 'axios'
import { encode } from 'bs58'

import configs from 'configs'
import { UNSUPPORT_PROJECT } from 'constant'
import { normalizeProjectData } from 'helpers/projectParser'

const {
  stat: { projectsApi },
} = configs

export enum Social {
  Twitter = 'twitter',
  Discord = 'discord',
  Website = 'website',
  Github = 'github',
  Telegram = 'telegram',
  Facebook = 'facebook',
  Youtube = 'youtube',
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
  submittedAt: number
  category: string
  presentation: string
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
  } = await axios.get(projectsApi)
  const projects: ProjectState = {}
  normalizeProjectData(items).forEach((project) => {
    const projectKey = encode(uid(project.name))
    if (!UNSUPPORT_PROJECT.includes(projectKey)) projects[projectKey] = project
  })
  return projects
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
