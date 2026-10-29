# 何东霖 · 个人作品集

为 AI 应用、软件开发、后端开发实习制作的个人网站。原生 HTML / CSS / JavaScript，无构建依赖、外部字体、跟踪器或后端服务。

## 本地查看

直接打开 `dist/index.html`，或在本目录运行：

```sh
python -m http.server 4173 --bind 127.0.0.1 --directory dist
```

浏览器访问 `http://127.0.0.1:4173`。通过 HTTP 访问可获得更完整的简历下载、剪贴板和主题保存体验。

## 已实现

- 中英双语个人首页，首次访问默认英文，右上角 EN / 中文切换并保存语言偏好。
- 导航、项目、详情弹窗、提示、页面标题和无障碍标签同步切换语言，针对桌面和手机布局。
- 浅色纸感与深色模式，保存主题选择。
- AI 应用、后端开发、开源贡献项目筛选。
- 三个项目详情弹窗，支持 Escape、焦点返回和键盘操作。
- 简历查看 / 下载、GitHub 与项目链接、邮件联系和复制邮箱。
- 格物智造的工作流 SVG 示意，已明确注明为示意图。
- GitHub Pages 自动部署配置，兼容根域名和仓库子路径。

## 发布至 TonyHeeee 的 GitHub Pages

目标仓库为 `TonyHeeee/TonyHeeee.github.io`，网站地址为 `https://tonyheeee.github.io/`。推送到 `main` 分支后，GitHub Actions 自动部署 `dist/`。首次配置或迁移时可按以下步骤操作：

1. 检查该账号下是否已有 `TonyHeeee.github.io` 仓库。若已有，请先审阅现有内容，避免覆盖既有网站。
2. 若没有，创建公开仓库 `TonyHeeee.github.io`。
3. 将本目录内容推送到仓库的 `main` 分支，保留 `.github/workflows/deploy.yml`。
4. 在仓库 Settings → Pages → Build and deployment 中选择 GitHub Actions。
5. 运行 `Deploy portfolio to GitHub Pages`，确认 Actions 成功后访问网站。预期地址为 `https://tonyheeee.github.io/`，此地址不是已上线确认。

部署配置参考 [GitHub 官方静态站点模板](https://github.com/actions/starter-workflows/blob/main/pages/static.yml)，仅上传 `dist/` 网站目录。

也可使用其他仓库名，网站相对路径已兼容 `https://tonyheeee.github.io/仓库名/`。

## 修改内容

- 首页、技能、教育与联系方式：`dist/index.html`
- 首页翻译：`dist/i18n.js`，对应 `dist/index.html` 中的 `data-i18n` 标记
- 项目展开详情：`dist/app.js` 中的 `projectsEn` 与 `projectsZh`
- 配色、字体、间距及手机布局：`dist/style.css`
- 英文简历：替换 `dist/assets/resume-en.pdf`
- 中文简历：替换 `dist/assets/resume-zh.pdf`

项目经历、时间和数据来自提供的 2026 年 10 月中英文简历；页面描述区分个人参与和团队成果。格物智造链接到 ETET114514，求职主账号指向 TonyHeeee。英文页面使用 Tony (Donglin) He 和 Gmail，中文页面使用何东霖和 163 邮箱，简历查看及下载随语言同步切换。

发布内容含邮箱和可下载的原始简历，原始简历中含电话。更新联系方式时请同时更新页面和 PDF。
