/src
├── assets/                # 静态资源（图片、图标、粒子贴图等）
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/            # 复用型基础组件（按钮、卡片、列表、输入框）
│   ├── Button/
│   ├── Card/
│   ├── Input/
│   ├── SectionTitle/
│   └── Logo/
├── layouts/               # 页面整体布局（Navbar + Footer + Main内容）
│   └── DefaultLayout.vue
├── modules/               # 页面模块组件（按区块划分，结构清晰）
│   ├── HeroSection/
│   │   └── HeroSection.vue
│   ├── AboutSection/
│   │   ├── AboutSection.vue
│   │   └── FeatureCard.vue
│   ├── ApproachSection/
│   │   ├── ApproachSection.vue
│   │   └── TimelineItem.vue
│   ├── LatestProductSection/
│   │   ├── LatestProductSection.vue
│   │   └── ProductCard.vue
│   ├── ServicesSection/
│   │   └── ServicesSection.vue
│   └── FooterSection/
│       ├── FooterSection.vue
│       ├── QuickLinks.vue
│       ├── SubscribeForm.vue
│       └── PartnerCarousel.vue
├── pages/                 # 页面级组件
│   ├── Home.vue           # 首页
│   ├── About.vue          # About Cascade 页面
│   ├── Approach.vue       # Our Approach 页面
│   ├── LatestProduct.vue  # 最新产品页面
│   ├── Services.vue       # 服务页面
│   ├── Reports.vue        # 报告页面
│   ├── Login.vue          # 登录页面
│   └── Register.vue       # 注册页面
├── router/                # 路由管理
│   └── index.ts
├── stores/                # 全局状态管理（Pinia 推荐）
│   └── user.ts            # 登录态、用户信息管理
├── composables/           # 组合式函数（如 useAuth、useModal 等）
│   ├── useAuth.ts
│   ├── useScroll.ts
│   └── useParticles.ts
├── utils/                 # 工具函数
│   ├── formatDate.ts
│   ├── downloadFile.ts
│   └── apiClient.ts       # 封装 axios 请求实例
├── styles/                # 全局样式
│   ├── base.css
│   └── tailwind.css       # TailwindCSS 入口
├── plugins/               # 插件（如引入 Three.js、Swiper 等）
│   ├── threejs.ts
│   ├── swiper.ts
│   └── particleEngine.ts
├── App.vue                # 根组件
├── main.ts                # 程序入口
└── env.d.ts               # TypeScript 环境声明
