export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'pie',
  description: 'Pie is the first meme coin.',
  nav: [
    { title: '首页', key: 'nav.home', href: '/#首页' },
    { title: '项目介绍', key: 'nav.introduction', href: '/#项目介绍' },
    { title: '如何购买', key: 'nav.howToBuy', href: '/#如何购买' },
    { title: 'NFT挖矿', key: 'nav.nftMining', href: '/#NFT挖矿' },
    { title: '代币模型', key: 'nav.tokenomics', href: '/#代币模型' },
    { title: '路线图', key: 'nav.roadmap', href: '/#路线图' },
  ],
};
