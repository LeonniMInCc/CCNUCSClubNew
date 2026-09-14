# IoT 物联网协会 — 招新网站

2026 年 CCNU 计算机学院社团招新 · IoT 物联网协会宣传页。

技术栈：**Astro 5**（纯静态站点，无后端、无数据库）。

---

## 一、目录结构

```
IoT/
├── astro.config.mjs       # Astro 配置（site 输出为静态站）
├── package.json           # 依赖与 npm scripts
├── package-lock.json      # 依赖锁文件
├── .gitignore             # 已忽略 node_modules / dist / .astro
├── public/                # 静态资源，构建时原样拷贝到 dist/ 根目录
│   └── assets/
│       ├── group-qr.png.jpg        # 招新 QQ 群二维码（页脚展示）
│       ├── groups/.gitkeep         # 预留：社团分组图片
│       └── showcase/               # 获奖/活动作品展示墙图片
│           ├── 1.jpg ~ 22.jpg / 7.png / 11.png / 13.png / 16.png / 19.png / 20.png / 21.png
│           └── .gitkeep
└── src/
    ├── pages/index.astro      # 唯一页面：整站所有 section 的结构与样式
    ├── data/
    │   ├── showcase.ts        # 展示墙数据（图片路径、标题、描述、分类）
    │   └── groups.ts          # 社团分组数据
    └── styles/global.css      # 全局样式（含滚动动效、自定义滚动条）
```

### 页面 Section 构成（`src/pages/index.astro`）

| 顺序 | Section | 说明 |
| --- | --- | --- |
| 1 | Hero 首屏 | 主视觉与社团标语 |
| 2 | 关于协会 | 社团介绍 |
| 3 | 展示墙 Showcase | 横向滚动画廊，数据来自 `src/data/showcase.ts` |
| 4 | 招新信息 | 招新要求 / 方向 |
| 5 | 二维码 | 招新群二维码（`public/assets/group-qr.png.jpg`） |
| 6 | Footer | 页脚信息 |

> 特色：多层 sticky 堆叠滚动 + 分层遮罩（`feat: stacked sticky scroll with per-layer masking`）。

---

## 二、资源说明

| 资源 | 路径 | 是否需要打包 |
| --- | --- | --- |
| 展示墙图片（22 张） | `public/assets/showcase/` | 需要，已入库（约 10 MB） |
| 招新群二维码 | `public/assets/group-qr.png.jpg` | 需要，已入库 |
| CSS / JS | 由 Astro 构建生成 | 构建时打包进 `dist/_astro/`，无需手工处理 |
| `node_modules/`、`dist/`、`.astro/` | — | **不上传**，见 `.gitignore` |

展示墙图片的映射关系写在 `src/data/showcase.ts`，新增/替换图片时同步修改该文件即可。

---

## 三、部署说明（给上游 owner）

### 方式 A：源码构建（推荐，仓库内只保留源码）

```bash
cd IoT
npm install
npm run build      # 产物输出到 IoT/dist/
npm run preview    # 本地预览 http://localhost:4321
```

构建完成后，把 `IoT/dist/` 作为静态站点根目录部署即可（Nginx / GitHub Pages / Vercel 静态托管均可）。

```bash
# Nginx 示例
root /path/to/IoT/dist;
index index.html;
```

### 方式 B：预编译 HTML

仓库当前 **未提交** `dist/`（避免重复存放约 10 MB 图片资源）。
如需免构建直接部署，可在 `IoT/` 下执行 `npm install && npm run build`，或向维护者索取构建产物。若希望把产物一并入库，需要调整 `.gitignore` 并接受图片资源双份存储。

---

## 四、本地开发

```bash
npm install
npm run dev        # http://localhost:4321
```

## 五、维护提示

- 新增展示作品：把图片放进 `public/assets/showcase/`，并在 `src/data/showcase.ts` 中登记。
- 更新二维码：直接覆盖 `public/assets/group-qr.png.jpg`。
- 请不要提交 `node_modules/`、`dist/`、`.astro/`。
