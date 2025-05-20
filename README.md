# 📄 Cascade - 气候级联风险可视化平台

## 项目概述

Cascade 是一个以开源数据与实时分析为基础，展现全球至局地气候级联风险的可视化门户平台。本项目基于 Vue 3 + Vite + TailwindCSS 构建，提供了直观的气候风险数据展示与分析功能。

## 技术栈

- **前端框架**: Vue 3
- **构建工具**: Vite
- **CSS框架**: TailwindCSS
- **状态管理**: Pinia
- **地图可视化**: OpenLayers
- **3D效果**: Three.js

## 快速开始

### 环境要求

- Node.js 18.x 或更高版本
- npm 8.x 或更高版本

### 安装步骤

1. 克隆仓库

```bash
git clone https://github.com/lukeSuperCoder/cascade-screen.git
cd cascade-screen
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

应用将在 http://localhost:8088 运行

### 构建生产版本

```bash
npm run build
git pull origin main
```

## 主要功能模块

- **首页展示**: 动态效果展示平台概览
- **数据可视化**: 多层级地图展示与风险分析
- **用户系统**: 登录注册与个性化设置
- **数据下载**: 支持多种格式数据导出

## 开发指南

详细的开发文档请参考 `docs/` 目录下的相关文件。

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请参见 LICENSE 文件

## 2. 功能模块与任务划分

| 系统名称 | 功能模块 | 任务项 | 描述 | 技术方案 |
| :--- | :--- | :--- | :--- | :--- |
| **Cascade可视化大屏** | 顶部导航栏 | Logo 动效设计 | 实现涟漪波动式动态 Logo，突出科技感 | SVG 动画 / Lottie 动画 |
| | | 导航菜单布局与交互 | 固定浮动式导航，主入口高亮，滚动/悬停动效 | Vue + TailwindCSS，Framer Motion 动效 |
| | | 登录按钮 | 极简风格登录入口，支持跳转登录页 | SVG Icon + Vue Router 跳转 |
| | Hero Section组件 | 动态背景设计 | 夜空地球视图，粒子流动、光束特效，前期用贴图，后期 Three.js+粒子动画优化 | particles.js + Three.js |
| | | 副标题与引导按钮 | 渲染副标题文案与引导按钮（Explore Map / Discover Cascade） | Vue 动态组件 |
| | About Cascade组件 | 三栏式功能展示 | 开放数据整合、AI引擎、全球分辨率特点介绍，带图标动画 | Flex 布局 + Lottie 小动画 |
| | | 平台简介段落 | 简明阐述 Cascade 愿景、数据来源与团队背景 | Markdown 渲染 / 富文本 |
| | Footer 页脚 | 快速导航链接 | About、Services、Contact、Legal 快速跳转 | Vue Router Link组件 |
| | | 注册入口表单 | 邮箱输入+Join Cascade按钮提交注册 | 表单输入+表单校验 |
| | | 合作机构轮播 | 合作方/支持者 Logo 动态轮播展示 | Swiper.js 组件 |
| | 登录注册模块 | 登录页面设计 | 邮箱/密码登录，支持第三方登录（可选） | Vue + Element Plus 表单，OAuth 集成 |
| | | 注册页面设计 | 邮箱注册，密码设置，同意协议确认 | vee-validate + 表单校验 |
| | | 表单交互与提示 | 邮箱格式校验、密码强度提示、错误处理反馈 | 前端即时校验 + 后端接口验证 |
| | Latest Product Highlights组件 | 产品亮点轮播 | 横向滑动展示最新成果地图与工具，支持点击跳转详情 | Swiper.js 组件封装 |
| | Our Approach组件 | 流程时间轴设计 | 展示从数据获取到决策支持的流程动效 | d3.js / Timeline.js 动态可视化 |
| | | 模型架构展示 | 风险模型架构图，支持图层组合、风险路径演示 | SVG 绘制 + 交互控制 |
| | Reports & Publications组件 | 报告卡片展示 | 最新报告列表，卡片式布局，附下载按钮 | Vue 动态列表+下载功能 |
| | | 报告分类筛选 | 年度/行业/政策支持文档筛选切换 | Element Select下拉组件 |

## 3. 地图可视化平台（核心模块）

| 功能模块 | 任务项 | 描述 | 技术方案 |
| :--- | :--- | :--- | :--- |
| 多级缩放与标签切换 | 地图缩放与切换分类 | 支持全球-区域-街道多级缩放，分类标签切换展示不同风险类型 | OpenLayers 动态视图管理 |
| 实时数据与历史回溯 | 数据更新时间与回溯功能 | 最新数据更新时间指示，支持历史时点数据回放 | WebSocket 推送 + 历史请求接口 |
| 多类图层管理 | 底图切换与图层控制 | 支持多种底图源，开放自定义图层管理与切换 | OpenLayers 图层管理器开发 |
| 风险点聚类分析 | 高危区域聚类高亮 | 自动识别受影响区域，动态聚类热力图展示 | WebGL points + MarkerCluster + Heatmap |
| 数据筛选与空间分析 | 支持数据提取与筛选 | 结合筛选条件与空间算法提取特定区域数据 | Turf.js 处理空间分析 |
| 情景模拟与风险预测 | 动态情景推演与展示 | 通过多参数输入，模拟级联风险传播路径 | OpenLayers 动态流向线绘制 |
| 数据下载中心 | 多格式数据下载 | 登录后支持 CSV、GeoJSON、PNG、PDF 格式文件下载 | 多格式导出与鉴权校验 |

## 4. 设计标准及交互要求

- **页面响应式布局**：支持 PC / 平板 / 移动端适配。
- **统一动效标准**：进入、悬停、滚动时均采用渐进式动效（Framer Motion / Animate.css）。
- **统一配色风格**：深色背景 + 高饱和点缀色（科技感、未来感突出）。
- **错误处理**：前端拦截异常提示，统一交互提示标准。
- **安全认证**：登录后访问地图下载、模拟功能；敏感接口鉴权校验。
- **代码规范**：遵循 ESLint + Prettier 格式化，组件开发按模块独立封装，命名统一。

## ✅ 结语

本说明文档为开发、测试与后续部署的重要参考，确保各模块有明确职责划分，便于快速开发迭代与质量保障。
