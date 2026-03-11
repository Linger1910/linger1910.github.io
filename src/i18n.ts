export const languages = {
  en: 'English',
  zh: '中文',
};

export const defaultLang = 'en';

export const translations = {
  en: {
    'nav.github': 'GitHub',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'contact.title': 'contact.txt',
    'contact.email': 'Email',
    'contact.backHome': '← Back Home',
    'blog.title': 'posts/',
    'blog.noPosts': 'No posts found.',
    'blog.backHome': '← Back Home',
    'blog.backPosts': '← All Posts',
    'hero.greeting': "Hi, I'm",
    'hero.tagline': 'Tinkerer. Independent Developer. Building small things, sometimes they work.',
    'about.command': 'cat about.txt',
    'about.content': 'Exploring AI-native development workflow. I build things with the help of AI assistants, learning and creating along the way.',
    'about.signature': '// Building in public, sharing the journey.',
    'interests.command': 'ls ./interests/',
    'interests.ai': 'AI-Native Development',
    'interests.opensource': 'Open Source Projects',
    'interests.indie': 'Independent Building',
    'interests.philosophy': 'Technology & Philosophy',
    'links.command': 'echo $LINKS',
  },
  zh: {
    'nav.github': 'GitHub',
    'nav.blog': '博客',
    'nav.contact': '联系方式',
    'contact.title': 'contact.txt',
    'contact.email': '邮箱',
    'contact.backHome': '← 返回首页',
    'blog.title': 'posts/',
    'blog.noPosts': '暂无文章',
    'blog.backHome': '← 返回首页',
    'blog.backPosts': '← 所有文章',
    'hero.greeting': '你好，我是',
    'hero.tagline': '折腾者。独立开发者。用 AI 原生工作流构建小东西。',
    'about.command': 'cat 关于.txt',
    'about.content': '探索 AI 原生开发工作流。我在 AI 助手的帮助下构建东西，边学边创造。',
    'about.signature': '// 公开构建，分享旅程。',
    'interests.command': 'ls ./兴趣/',
    'interests.ai': 'AI 原生开发',
    'interests.opensource': '开源项目',
    'interests.indie': '独立开发',
    'interests.philosophy': '技术与哲学',
    'links.command': 'echo $链接',
  },
} as const;

export function t(key: keyof typeof translations['en'], lang: string): string {
  return translations[lang as keyof typeof translations]?.[key] ?? translations['en'][key];
}

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split('/');
  return lang === 'zh' ? 'zh' : 'en';
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);

  if (parts[0] === 'zh') {
    return '/' + parts.slice(1).join('/');
  }
  return pathname;
}
