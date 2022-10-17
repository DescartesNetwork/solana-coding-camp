import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { uid } from '@sentre/codingcamp'
import axios from 'axios'
import { encode } from 'bs58'

import configs from 'configs'
import { normalizeProjectData } from 'helpers/projectParser'

const {
  stat: { projectsApi },
} = configs

const dummyProjects: ProjectData[] = [
  {
    name: 'Sentre',
    logo: 'https://raw.githubusercontent.com/DescartesNetwork/sen-static/master/square-logo.png',
    cover:
      'https://academy.sentre.io/content/images/size/w2000/2022/10/Sentre-v4.0-is-Live_final2.png',
    author: 'Sentre Protocol',
    description:
      'The DApp Store For All Things Solana. Explore & install DApps on Senhub, build on Sentre, and send your project to the moon with Sen Suite.',
    metadata: {
      website: 'https://sentre.io',
      twitter: 'https://twitter.com/SentreProtocol',
      discord: 'https://discord.com/invite/VD7UBAp2HN',
      github: 'https://github.com/DescartesNetwork',
    },
    submittedAt: Date.now(),
    category: 'Defi',
  },
  {
    name: 'Saros',
    logo: 'https://pbs.twimg.com/profile_images/1556909169445220353/ln2Suf5b_400x400.jpg',
    cover:
      'https://pbs.twimg.com/profile_banners/1304982931476066304/1660031049/1500x500',
    author: 'Coin98',
    description: 'A DeFi Super-Network Built on S◎lana.',
    metadata: {
      website: 'https://saros.finance/',
      twitter: 'https://twitter.com/Saros_Finance',
      discord: 'http://saros.link/discord',
    },
    submittedAt: Date.now(),
    category: 'Defi',
  },
]

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
  submittedAt: number
  category: string
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
  dummyProjects.forEach(
    (project) => (projects[encode(uid(project.name))] = project),
  )
  normalizeProjectData(items).forEach((project) => {
    projects[encode(uid(project.name))] = project
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
