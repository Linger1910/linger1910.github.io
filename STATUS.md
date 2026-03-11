# 项目状态

## 当前进度

### 已完成
- [x] 极客风格个人网站基础架构
- [x] 博客功能实现 (2026-03-11)

## 博客功能

### 文件结构
```
src/
├── content.config.ts      # 内容集合配置 (Astro 6 新格式)
├── content/
│   └── blog/
│       └── hello-world.md # 示例文章
├── layouts/
│   └── Layout.astro       # 终端风格布局
└── pages/
    ├── index.astro        # 首页
    └── blog/
        ├── index.astro    # 博客列表页
        └── [slug].astro   # 文章详情页
```

### 特性
- 终端风格设计（保持一致性）
- 博客列表使用 `$ ls ./posts/` 命令提示符风格
- 文章详情使用 `$ cat filename.md` 风格
- 支持标签分类
- 按发布日期排序

### 添加新文章
1. 在 `src/content/blog/` 目录创建 `.md` 文件
2. 添加 frontmatter：
```yaml
---
title: "文章标题"
description: "文章简介"
pubDate: 2026-03-11
tags: ["标签1", "标签2"]
---
```

## 技术栈
- Astro 6.0.2
- TypeScript
- Content Collections (glob loader)
