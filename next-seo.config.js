/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'GaaS',
  titleTemplate: '%s | Greetings as a Service',
  defaultTitle: 'GaaS',
  description: 'Greetings as a Service',
  canonical: 'https://gaas.sznm.dev',
  openGraph: {
    url: 'https://gaas.sznm.dev',
    title: 'GaaS',
    description: 'Greetings as a Service',
    images: [
      {
        url: 'https://og.sznm.dev/api/generate?heading=GaaS&text=Greetings%20as%20a%20Service%20|%20https://gaas.sznm.dev&template=color&center=true',
        alt: 'gaas.sznm.dev og-image',
      },
    ],
    site_name: 'GaaS',
  },
  twitter: {
    handle: '@sozonome',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
