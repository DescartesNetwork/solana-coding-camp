const dummyProjects = [
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
  },
]

export const useProjects = () => {
  return dummyProjects
}
