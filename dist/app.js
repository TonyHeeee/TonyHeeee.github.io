'use strict';

const $ = (selector) => document.querySelector(selector);
const themeToggle = $('#theme-toggle');
const root = document.documentElement;
let language = 'en';
try { if (localStorage.getItem('donglin-language') === 'zh') language = 'zh'; } catch { /* English is the default without storage. */ }
const t = key => translations[language][key];
function applyTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.setAttribute('aria-label', t(theme === 'dark' ? 'themeLight' : 'themeDark'));
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#151a1b' : '#f5f4f0';
}
try { applyTheme(localStorage.getItem('donglin-theme') === 'dark' ? 'dark' : 'light'); } catch { applyTheme('light'); }
themeToggle.addEventListener('click', () => {
  const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  applyTheme(theme);
  try { localStorage.setItem('donglin-theme', theme); } catch { /* Theme still works when storage is disabled. */ }
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    let count = 0;
    document.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-categories]').forEach(project => {
      const visible = category === 'all' || project.dataset.categories.split(' ').includes(category);
      project.hidden = !visible;
      if (visible) count++;
    });
    $('#filter-status').textContent = t('projectCount').replace('{count}', count);
  });
});

const projectsZh = {
  gewu: {
    kicker: '01 / AI APPLICATION', title: '格物智造 · GewuZhizao',
    role: '核心开发成员 · 双人协作项目 · 2026.09 至今',
    sections: [
      ['项目目标', '将二维建筑户型图的分析、编辑与交互式三维室内设计连接起来，支持识别、几何修复、空间建模和家具编辑等流程。'],
      ['我的参与：框架与功能迭代', '参与技术方案设计与基础框架搭建，编写部分框架代码；结合 Codex 辅助扩展功能、修改代码和集成模块，推进二维编辑与三维建模功能迭代。'],
      ['我的参与：视觉与几何处理', '参与基于 Python 图像处理、几何规则与 ONNX 模型的户型分析，支持墙体、门窗与家具候选识别，以及墙体连接修复、空间闭合诊断和房间自动分区。'],
      ['项目功能', '项目已支持墙体实体合并、家具拖拽和旋转、吸附对齐、碰撞检测及 GLB 模型导入，集成 17 类程序化家具模型和 160 款 PBR 基础材质，支持材质编辑与高清图片导出。'],
      ['我的参与：测试与质量保障', '负责功能测试、结果校验与问题反馈，通过 Python、Node.js 自动化测试与浏览器交互验证识别效果、几何正确性及功能兼容性，推进问题修复和回归测试。'],
      ['协作说明', '这是双人协作项目，上述项目功能为团队成果。该项目仓库位于我的另一个开发账号 ETET114514 下。首页线稿为工作流示意，项目实际效果请查看展示仓库。']
    ],
    links: [['查看展示仓库', 'https://github.com/ETET114514/GewuZhizao_Showcase'], ['查看开发仓库', 'https://github.com/ETET114514/GewuZhizaoNew']]
  },
  nodebb: {
    kicker: '02 / BACKEND & LLM', title: 'NodeBB 课程问答平台',
    role: '后端开发成员 · CMU 四人课程团队 · 2026.01–2026.04',
    sections: [
      ['项目场景', '基于开源论坛系统 NodeBB，扩展面向高校课程的问答管理功能，在四人团队中参与需求分析、敏捷迭代、代码审查与功能测试。'],
      ['后端 API：问答状态管理', '实现帖子“已解决 / 未解决”状态管理相关后端 API，支持状态修改、按状态筛选及自动化测试，改善课程问答内容的组织与检索。'],
      ['AI 集成：帖子翻译', '参与将本地部署的开源大语言模型接入 NodeBB，开发论坛帖子翻译功能，实现后端服务调用与原有业务逻辑的集成。'],
      ['工程实践：持续集成与部署', '将 Semgrep 静态代码分析集成至 GitHub Actions 工作流，参与 Docker 容器化部署、后端测试及运行环境问题排查。']
    ],
    links: [['查看 GitHub 个人主页', 'https://github.com/TonyHeeee']]
  },
  pipedream: {
    kicker: '03 / OPEN SOURCE', title: 'Pipedream · Fitbit MCP',
    role: '开源贡献者 · PipedreamHQ/pipedream · 2026.04',
    sections: [
      ['我负责的功能', '参与 Fitbit MCP 工具开发，负责每日运动数据汇总功能（Activity Summary），让运动指标能够以结构化形式供集成工作流使用。'],
      ['API 封装与数据处理', '编写可复用的 Fitbit API 请求辅助函数，实现卡路里消耗、运动距离、活跃时长等运动指标的获取、处理与结构化输出。'],
      ['代码审查与合并', '提交并合并 Pull Request #20666，涉及 3 个文件，新增 106 行、删除 4 行代码。根据维护者 Review 反馈完善实现、清理无关文件，并执行 JavaScript 语法检查。'],
      ['可查看的成果', '完整的代码变更、审查讨论和合并记录可通过下方上游 PR 链接查看。']
    ],
    links: [['查看已合并 PR #20666', 'https://github.com/PipedreamHQ/pipedream/pull/20666']]
  }
};
const projectsEn = {
  gewu: {
    kicker: '01 / AI APPLICATION', title: 'GewuZhizao · AI Interior Design',
    role: 'Core developer · Two-person team · Sep 2026–present',
    sections: [
      ['The goal', 'Connect 2D floor-plan analysis and editing with interactive 3D interior design, including recognition, geometric repair, spatial modeling, and furniture editing.'],
      ['My contribution: architecture & iteration', 'Contributed to technical planning and the initial framework, wrote part of the framework code, and used Codex to assist with feature development, code changes, and module integration across the 2D editor and 3D modeling workflow.'],
      ['My contribution: vision & geometry', 'Helped develop floor-plan analysis using Python image processing, geometric rules, and ONNX models. The workflow identifies candidate walls, doors, windows, and furniture, repairs wall connections, diagnoses unclosed spaces, and partitions rooms.'],
      ['Team-delivered features', 'The project supports wall-solid merging, furniture dragging and rotation, snapping, collision detection, and GLB imports. It includes 17 types of procedural furniture and 160 PBR base materials, with material editing and high-resolution image export.'],
      ['My contribution: testing & validation', 'Responsible for functional testing, result validation, and issue feedback. Used Python and Node.js automated tests and browser interaction to verify recognition results, geometry, and compatibility, and contributed to fixes and regression testing.'],
      ['Collaboration & project links', 'This is a two-person project; the features described above are team outcomes. Its repositories are under my other development account, ETET114514. The homepage drawing is a workflow schematic; see the showcase repository for actual project visuals.']
    ],
    links: [['Showcase repository', 'https://github.com/ETET114514/GewuZhizao_Showcase'], ['Development repository', 'https://github.com/ETET114514/GewuZhizaoNew']]
  },
  nodebb: {
    kicker: '02 / BACKEND & LLM', title: 'NodeBB · Course Q&A Platform',
    role: 'Backend developer · Four-person CMU course team · Jan–Apr 2026',
    sections: [
      ['The context', 'Extended the open-source NodeBB forum for university course Q&A. Worked in a four-person team on requirements, agile iteration, code review, and functional testing.'],
      ['Backend APIs: question status', 'Implemented backend APIs for resolved and unresolved post status, including updates, filtering, and automated tests to improve the organization and retrieval of course questions.'],
      ['AI integration: post translation', 'Helped integrate a locally deployed open-source LLM with NodeBB for post translation, connecting backend model calls with the existing application logic.'],
      ['Engineering: CI & deployment', 'Integrated Semgrep static analysis into GitHub Actions and contributed to Docker deployment, backend testing, and runtime troubleshooting.']
    ],
    links: [['GitHub profile', 'https://github.com/TonyHeeee']]
  },
  pipedream: {
    kicker: '03 / OPEN SOURCE', title: 'Pipedream · Fitbit MCP',
    role: 'Open-source contributor · PipedreamHQ/pipedream · Apr 2026',
    sections: [
      ['My feature', 'Developed the daily Activity Summary functionality for the Fitbit MCP integration, making activity metrics available as structured data for integration workflows.'],
      ['API wrappers & data processing', 'Wrote reusable Fitbit API request helpers to retrieve and process calories burned, distance, active minutes, and other activity metrics into structured output.'],
      ['Review & merge', 'Submitted PR #20666, which was merged upstream: 3 files changed, 106 lines added, and 4 removed. Addressed maintainer feedback, removed unrelated files, and ran JavaScript syntax checks.'],
      ['Inspect the work', 'The upstream pull request below contains the code changes, review discussion, and merge record.']
    ],
    links: [['View merged PR #20666', 'https://github.com/PipedreamHQ/pipedream/pull/20666']]
  }
};
const dialog = $('#project-dialog');
let opener;
let activeProject;
function renderProject(key) {
    const project = (language === 'en' ? projectsEn : projectsZh)[key];
    $('#dialog-kicker').textContent = project.kicker;
    $('#dialog-title').textContent = project.title;
    $('#dialog-role').textContent = project.role;
    $('#dialog-body').replaceChildren(...project.sections.map(([title, text]) => {
      const block = document.createElement('section');
      block.className = 'detail-block';
      const h = document.createElement('h3'); h.textContent = title;
      const p = document.createElement('p'); p.textContent = text;
      block.append(h, p); return block;
    }));
    $('#dialog-links').replaceChildren(...project.links.map(([label, url], index) => {
      const link = document.createElement('a');
      link.className = 'button ' + (index === 0 ? 'primary' : 'secondary');
      link.textContent = label + ' ↗'; link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; return link;
    }));
}
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    opener = button;
    activeProject = button.dataset.project;
    renderProject(activeProject);
    dialog.showModal(); dialog.scrollTop = 0;
  });
});
$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => opener?.focus({preventScroll:true}));

let toastTimer;
function toast(message) { const element = $('#toast'); element.textContent = message; element.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { element.hidden = true; }, 4000); }
$('#copy-email').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(t('contactEmail')); toast(t('emailCopied')); }
  catch { toast(t('emailFallback')); }
});
function applyLanguage(nextLanguage) {
  language = nextLanguage === 'zh' ? 'zh' : 'en';
  root.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.innerHTML = t(element.dataset.i18n);
  });
  ['aria-label', 'title'].forEach(attribute => {
    document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
      element.setAttribute(attribute, t(element.getAttribute(`data-i18n-${attribute}`)));
    });
  });
  document.title = t('pageTitle');
  document.querySelector('meta[name="description"]').content = t('pageDescription');
  document.querySelectorAll('[data-resume]').forEach(link => {
    link.href = `./assets/resume-${language}.pdf`;
    if (link.hasAttribute('download')) link.download = language === 'en' ? 'Tony-He-Resume.pdf' : '何东霖-简历.pdf';
  });
  const emailLink = document.querySelector('.email');
  emailLink.href = `mailto:${t('contactEmail')}`;
  emailLink.replaceChildren(document.createTextNode(t('contactEmail') + ' '));
  const arrow = document.createElement('span');
  arrow.setAttribute('aria-hidden', 'true'); arrow.textContent = '↗'; emailLink.append(arrow);
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  applyTheme(root.dataset.theme);
  const count = document.querySelectorAll('article.project:not([hidden])').length;
  $('#filter-status').textContent = t('projectCount').replace('{count}', count);
  if (dialog.open && activeProject) renderProject(activeProject);
  $('#toast').hidden = true;
}
document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.language);
    try { localStorage.setItem('donglin-language', language); } catch { /* Switching remains available without storage. */ }
  });
});
applyLanguage(language);
$('#year').textContent = new Date().getFullYear();
