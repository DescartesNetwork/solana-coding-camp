export const normalizeProjectData = (projects: any[]) => {
  return projects.map(
    ({ answers, submitted_at }: { answers: any[]; submitted_at: string }) => {
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
    return answers[1].text
  } catch (er) {
    return 'Unknown'
  }
}

export const parseLogo = (answers: any[]) => {
  try {
    return answers[0].text
  } catch (er) {
    return ''
  }
}

export const parseCover = (answers: any[]) => {
  try {
    return answers[0].text
  } catch (er) {
    return ''
  }
}

export const parseDescription = (answers: any[]) => {
  try {
    return answers[7].text
  } catch (er) {
    return ''
  }
}

export const parseAuthor = (answers: any[]) => {
  try {
    return answers[3].text
  } catch (er) {
    return ''
  }
}

export const parseEmail = (answers: any[]) => {
  try {
    return answers[4].email
  } catch (er) {
    return ''
  }
}

export const parseTwitter = (answers: any[]) => {
  try {
    return answers[0].text
  } catch (er) {
    return ''
  }
}

export const parseDiscord = (answers: any[]) => {
  try {
    return answers[0].text
  } catch (er) {
    return ''
  }
}

export const parseWebsite = (answers: any[]) => {
  try {
    return answers[10].url
  } catch (er) {
    return ''
  }
}

export const parseGithub = (answers: any[]) => {
  try {
    return answers[9].url
  } catch (er) {
    return ''
  }
}

export const parseTelegram = (answers: any[]) => {
  try {
    return answers[5].text
  } catch (er) {
    return ''
  }
}

export const parseFacebook = (answers: any[]) => {
  try {
    return answers[0].text
  } catch (er) {
    return ''
  }
}

export const parseCategory = (answers: any[]) => {
  try {
    return answers[6].text
  } catch (er) {
    return ''
  }
}
