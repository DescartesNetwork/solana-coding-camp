export const normalizeProjectData = (projects: any[]) => {
  return projects.map(
    ({ answers, submitted_at }: { answers: any[]; submitted_at: string }) => {
      console.log(answers)
      return {
        name: parseName(answers),
        logo: parseLogo(answers),
        cover: parseCover(answers),
        description: parseDescription(answers),
        author: parseAuthor(answers),
        metadata: {
          twitter: parseTwitter(answers),
          discord: parseDiscord(answers),
          website: parseWebsite(answers),
          github: parseGithub(answers),
          telegram: parseTelegram(answers),
          facebook: parseFacebook(answers),
        },
        category: parseCategory(answers),
        submittedAt: Number(new Date(submitted_at)),
      }
    },
  )
}

export const parseName = (answers: any[]) => {
  try {
    return answers.find(({ field: { id } }) => id === '9qngNlGI20QK').text
  } catch (er) {
    return 'Unknown'
  }
}

export const parseLogo = (answers: any[]) => {
  try {
    const raw = answers.find(
      ({ field: { id } }) => id === 'riiipCNxEWn3',
    ).file_url
    return `https://stat.sentre.io/codingcamp/get-typeform-file?url=${encodeURIComponent(
      raw,
    )}`
  } catch (er) {
    return ''
  }
}

export const parseCover = (answers: any[]) => {
  try {
    const raw = answers.find(
      ({ field: { id } }) => id === '09Ll2C44rG5c',
    ).file_url
    return `https://stat.sentre.io/codingcamp/get-typeform-file?url=${encodeURIComponent(
      raw,
    )}`
  } catch (er) {
    return ''
  }
}

export const parseDescription = (answers: any[]) => {
  try {
    return answers.find(({ field: { id } }) => id === 'YB53ek6eWawf').text
  } catch (er) {
    return ''
  }
}

export const parseAuthor = (answers: any[]) => {
  try {
    return answers.find(({ field: { id } }) => id === 'Aj9TpBDtBLMc').text
  } catch (er) {
    return ''
  }
}

export const parseEmail = (answers: any[]) => {
  try {
    return answers.find(({ field: { id } }) => id === 'XEXux0lJXrSM').email
  } catch (er) {
    return ''
  }
}

export const parseTwitter = (answers: any[]) => {
  try {
    return answers.find(({ field: { id } }) => id === '').text
  } catch (er) {
    return ''
  }
}

export const parseDiscord = (answers: any[]) => {
  try {
    return answers.find(({ field: { id } }) => id === '').text
  } catch (er) {
    return ''
  }
}

export const parseWebsite = (answers: any[]) => {
  try {
    return answers.find(({ field: { id } }) => id === 'tzggYSosiMkn').url
  } catch (er) {
    return ''
  }
}

export const parseGithub = (answers: any[]) => {
  try {
    return answers.find(({ field: { id } }) => id === 'fDvZBe1iCyXs').url
  } catch (er) {
    return ''
  }
}

export const parseTelegram = (answers: any[]) => {
  try {
    return answers.find(
      ({ field: { id } }) => id === '' || id === 'KCghcFynydCN',
    ).url
  } catch (er) {
    return ''
  }
}

export const parseFacebook = (answers: any[]) => {
  try {
    return answers.find(({ field: { id } }) => id === '').url
  } catch (er) {
    return ''
  }
}

export const parseCategory = (answers: any[]) => {
  try {
    return answers.find(({ field: { id } }) => id === 'y5EjfhWSiQPn').text
  } catch (er) {
    return ''
  }
}

export const parseRepresentation = (answers: any[]) => {
  try {
    return answers.find(({ field: { id } }) => id === 'U4Xk0dI13CqW').url
  } catch (er) {
    return ''
  }
}
