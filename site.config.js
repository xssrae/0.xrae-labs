const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Rae Labs",
    image: "/icon.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "IT engineer",
    bio: "Cybersecurity, Mobile Security, Application Security.",
    email: "fontesraquel@proton.me",
    linkedin: "xssrae",
    github: "xssrae",
    instagram: "xssrae",
  },
  projects: [
    {
      name: `morethan-log`,
      href: "https://github.com/morethanmin/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Rae Labs",
    description: "bem vindo(a) ao Rae Labs!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://0-xrae-labs.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "pt-BR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    //pageId: process.env.NOTION_PAGE_ID,
    pageId: "1334f4c3dbcf80899321c6427064d8a8",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
