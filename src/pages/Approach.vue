<template>
  <div class="academic-team">
    <div class="team-intro-section rounded-2xl p-8 mb-2">
      <div class="university-header">OUR TEAM</div>
      <div class="flex flex-col lg:flex-row items-center justify-between gap-20">
        <!-- 左侧照片墙 -->
        <div class="team-photos-container w-full lg:w-1/2 flex items-center justify-end">
          <div class="team-photos grid grid-cols-5 grid-rows-3 gap-3 w-full max-w-md">
            <div v-for="n in 15" :key="n" class="team-photo-wrapper group">
              <img :src="getPhoto(n)" class="team-photo" :alt="`team member ${n}`" />
              <div class="photo-overlay"></div>
            </div>
          </div>
        </div>
        
        <!-- 右侧简介 -->
        <div class="team-intro-text w-full lg:w-1/2 space-y-6">
          <div class="intro-content">
            <p class="text-lg text-black leading-relaxed mb-4">
              Our team consists of <span class="font-semibold">multidisciplinary experts</span> in geography, climate, economics, artificial intelligence, and more, dedicated to advancing the frontier of cascading risk research. Team members have rich international backgrounds, spanning universities, research institutes, and industry, with strong theoretical and practical capabilities.
            </p>
            <p class="text-lg text-black leading-relaxed mb-4">
              We focus on leveraging <span class="font-semibold">AI and data science methods</span> to uncover the complex transmission mechanisms of risks in areas such as extreme events, infrastructure, and supply chains. With open collaboration and innovation as our core values, we serve governments, enterprises, and society in risk management and decision support.
            </p>
            <p class="text-lg text-black leading-relaxed">
              Through <span class="font-semibold">interdisciplinary cooperation</span> and international exchange, we continuously expand the boundaries of risk science, contributing to global sustainable development and enhanced societal resilience.
            </p>
          </div>
          
          <!-- 团队统计 -->
          <div class="team-stats grid grid-cols-3 gap-4 pt-4 border-t border-gray-300">
            <div class="stat-item text-center">
              <div class="text-2xl font-bold text-black">15+</div>
              <div class="text-sm text-gray-600">Experts</div>
            </div>
            <div class="stat-item text-center">
              <div class="text-2xl font-bold text-black">5+</div>
              <div class="text-sm text-gray-600">Countries</div>
            </div>
            <div class="stat-item text-center">
              <div class="text-2xl font-bold text-black">10+</div>
              <div class="text-sm text-gray-600">Years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="university-header">CORE MEMBERS</div>
    <div class="team-grid">
      <div v-for="(contributor) in coreMembers" :key="contributor.id" class="member-card">
        <div class="card-inner">
          <div class="card-front">
            <img :src="contributor.avatar" :alt="contributor.name" class="avatar">
            <div class="member-info">
              <h3 class="member-name">{{ contributor.name }}</h3>
              <p class="member-title">{{ contributor.title }}</p>
            </div>
          </div>
          <div class="card-back">
            <div class="member-detail">
              <h3 class="detail-name">{{ contributor.name }}</h3>
              <p class="detail-title">{{ contributor.title }}</p>
              <div class="detail-bio">{{ contributor.detail }}</div>
              <div class="detail-links">
                <a v-for="link in contributor.socialLinks" 
                   :key="link.platform" 
                   :href="link.url" 
                   target="_blank" 
                   class="icon-link" 
                   v-html="link.icon"
                   :title="link.platform">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="university-header" style="margin-top: 48px;">ADVISOR BOARD</div>
    <div class="team-grid">
      <div v-for="(contributor) in advisorBoard" :key="contributor.id" class="member-card">
        <div class="card-inner">
          <div class="card-front">
            <img :src="contributor.avatar" :alt="contributor.name" class="avatar">
            <div class="member-info">
              <h3 class="member-name">{{ contributor.name }}</h3>
              <p class="member-title">{{ contributor.title }}</p>
            </div>
          </div>
          <div class="card-back">
            <div class="member-detail">
              <h3 class="detail-name">{{ contributor.name }}</h3>
              <p class="detail-title">{{ contributor.title }}</p>
              <div class="detail-bio">{{ contributor.detail }}</div>
              <div class="detail-links" v-show="false">
                <a v-for="link in contributor.socialLinks" 
                   :key="link.platform" 
                   :href="link.url" 
                   target="_blank" 
                   class="icon-link" 
                   v-html="link.icon"
                   :title="link.platform">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const websiteSVG = `<svg width="25" height="25" t="1750214648696" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10025" width="64" height="64" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M81.822476 674.133333c18.578286 0 33.938286 13.750857 36.376381 31.695238l0.341333 4.973715v165.302857c0 14.531048 10.727619 26.672762 24.624762 28.964571l4.729905 0.390096h165.302857a36.668952 36.668952 0 0 1 4.973715 73.142857l-4.973715 0.292571h-165.302857A102.985143 102.985143 0 0 1 45.348571 883.419429l-0.243809-7.314286v-165.302857c0-20.284952 16.384-36.668952 36.717714-36.668953z m860.355048-1.072762c18.627048 0 33.938286 13.799619 36.376381 31.744l0.341333 4.973715v165.302857a102.985143 102.985143 0 0 1-95.475809 102.546286l-7.314286 0.243809h-165.302857a36.668952 36.668952 0 0 1-4.973715-73.094095l4.973715-0.341333h165.302857c14.531048 0 26.672762-10.727619 28.964571-24.624762l0.390096-4.778667v-165.254095c0-20.284952 16.432762-36.717714 36.717714-36.717715zM296.667429 46.128762a36.668952 36.668952 0 0 1 4.973714 73.094095l-4.973714 0.341333h-148.72381a29.500952 29.500952 0 0 0-29.013333 24.624762l-0.390096 4.778667v165.254095a36.668952 36.668952 0 0 1-73.142857 4.973715l-0.292571-4.973715v-165.302857c0-54.125714 42.22781-98.742857 95.475809-102.546286l7.314286-0.243809h148.72381zM876.105143 45.104762c54.174476 0 98.742857 42.22781 102.546286 95.475809l0.243809 7.314286v165.302857a36.668952 36.668952 0 0 1-73.094095 4.973715l-0.341333-4.973715v-165.302857a29.500952 29.500952 0 0 0-24.624762-28.964571l-4.729905-0.390096h-165.302857a36.668952 36.668952 0 0 1-4.973715-73.142857l4.973715-0.292571h165.302857zM477.866667 283.111619c19.017143-9.020952 41.155048-9.99619 61.244952-2.82819l7.460571 3.072 224.304762 115.809523c15.262476 6.826667 25.453714 21.211429 26.136381 38.668191a42.76419 42.76419 0 0 1-20.138666 34.962286l-4.681143 2.535619-57.100191 29.257142v150.77181a64.170667 64.170667 0 0 1-15.11619 36.278857l-4.583619 4.876191-5.071238 4.486095c-13.750857 11.215238-29.598476 19.992381-46.811429 25.892571a392.630857 392.630857 0 0 1-131.120762 20.626286 393.020952 393.020952 0 0 1-131.657143-20.626286c-17.115429-5.851429-33.01181-14.628571-46.567619-25.746285a66.169905 66.169905 0 0 1-24.819809-44.032l-0.097524-3.120762v-149.406477L253.074286 475.623619a43.544381 43.544381 0 0 1-24.380953-27.648l-1.267809-5.461333-0.585143-5.753905a42.959238 42.959238 0 0 1 21.26019-35.108571L477.866667 283.111619z m-102.497524 255.609905v113.761524c0-1.170286 1.26781 0.487619 5.607619 3.510857 7.070476 4.681143 14.726095 8.484571 22.479238 11.264 34.620952 11.50781 71.289905 17.066667 108.739048 16.384a323.779048 323.779048 0 0 0 107.958857-16.432762 106.788571 106.788571 0 0 0 22.576762-11.215238l5.12-3.754667c0.292571-0.146286 0.487619-0.195048 0.585143-0.146286l0.146285 0.487619v-113.712761l-102.351238 52.809142c-19.017143 8.97219-41.155048 9.99619-61.293714 2.828191l-7.41181-3.120762-102.15619-52.662857z m138.776381-199.192381l-1.804191-0.195048-3.315809 0.195048-189.391238 97.816381 188.367238 97.231238c0.682667 0.292571 1.462857 0.487619 2.535619 0.585143h3.023238l1.267809-0.097524 189.391239-97.767619-188.318477-97.28a8.192 8.192 0 0 0-1.755428-0.487619z" fill="#000000" p-id="10026"></path><path d="M755.273143 512.78019a31.841524 31.841524 0 0 0-15.847619 23.649524l-0.146286 126.439619c-1.462857 10.48381 4.87619 22.625524 15.993905 29.062096a34.474667 34.474667 0 0 0 34.328381 0 31.548952 31.548952 0 0 0 15.847619-31.207619l0.146286-118.832762c1.462857-10.532571-4.87619-22.674286-15.993905-29.110858a34.523429 34.523429 0 0 0-29.647238-2.243047l-4.681143 2.243047z" fill="#000000" p-id="10027"></path></svg>`;

export default {
  name: 'Approach',
  data() {
    return {
      coreMembers: [
        {
          id: 1,
          name: 'Dr Daoping Wang',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u1.png',
          detail: `Dr. Daoping Wang is a Lecturer in Risk, Environment and Society at the Department of Geography, King's College London, UK. He serves as Lead of the King's Geocomputation and Data Science Research Hub and is an External Fellow of the World Economic Forum, driving interdisciplinary research on Risk and Resilience, Extreme Weather Events, Infrastructures, and Supply Chains.

He holds a PhD in Economics from Shanghai University of Finance and Economics, an MSc in Economics from Shandong University, and a BSc in Engineering from Xi'an Jiaotong University. Prior to King's, he was a Research Fellow at the University of Cambridge and continues as Hoffmann Fellow at the World Economic Forum, shaping global risk governance frameworks.

He has published over 50 papers in high-impact journals, including Nature, Nature Human Behaviour/Sustainability/Climate change/ Communications, and Science Bulletin. His Google Scholar citations exceed 3,200, with an h-index of 24.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        },
        {
          id: 2,
          name: 'Pengfei Yuan',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u13.png',
          detail: `Pengfei Yuan is a postgraduate researcher at the Department of Geography, King's College London and a Ph.D candidate in Shandong university. His research focuses on Climate-induced disruption modeling in critical infrastructure systems based on AI techniques and Cascading risk analysis in global supply and value chains. His key publication includes:
 
Yuan, P. et al. (2024). 'Assessing the supply risks of critical metals in China's low-carbon energy transition', Global Environmental Change, 86, 102825. `,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://scholar.google.com/citations?hl=zh-CN&view_op=list_works&gmla=AH8HC4w8l1MN3Dpk86LnT2klac_URAoruVhFuUX1sif2CPVer_0Eqx4lbbkFt928VFgrgJIWOemcqTgQ7lxik79pFW-DV1tg5ZFX-19nyfKO00GYDDOWYPaK44yVBeKLEaA&user=fPUyCCgAAAAJ' }
          ]
        },

        {
          id: 3,
          name: 'Jia Zheng',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u9.png',
          detail: `Jia Zheng is a PhD student in the Department of Geography at King's College London. She graduated with a MSc in Risk and Disaster Science (Distinction) from University College London. 

Her research examines how hydropower fluctuations in Southwestern China—amplified by climate change—cascade through supply chains, with implications for energy policy and business continuity.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        },
        {
          id: 4,
          name: 'Jiaming Yu',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u10.png',
          detail: `Jiaming Yu is a PhD student in the Department of Geography at King's College London. She holds a Bachelor's degree in Energy Economics from China University of Petroleum, Beijing, and a Master's degree in Energy Economics from Shanghai University of Finance and Economics. 

Her research focuses on analyzing cascading socioeconomic risks triggered by extreme climate events (e.g., floods, heatwaves), using complex risk modeling to inform climate adaptation policies.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        },
        {
          id: 5,
          name: 'Lijuan Zhou',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u11.png',
          detail: `Lijuan Zhou is a PhD student in Population, Resource, Environmental Economics at the Center for Economic Research, Shandong University. She holds a Master degree from the Centre for Economic Research. Her research interest is disaster cascading risk economics. `,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        },
        {
          id: 6,
          name: 'Liqi Hu',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u12.png',
          detail: `Liqi Hu is a research student at the Center for Economic Research, Shandong University. Her work specialises in disaster economics, and her latest published paper is 
Hu, L. et al. (2025). 'Understanding the heterogeneous roles of China's sectors under the shock of second Trump administration's new tariffs: A novel method of shock-based input-output data envelopment analysis', Energy, 324, 135687.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        },
        {
          id: 7,
          name: 'Congcong Du',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u8.png',
          detail: `Congcong Du is a PhD candidate in the Department of Aeronautical and Aviation Engineering at The Hong Kong Polytechnic University. He holds an M.S. and a B.S. in Industrial Engineering from the China University of Mining and Technology.

His research focuses on climate risks in aviation and aviation emission reduction. 
He has published 5 papers in high-impact journals, with selected key publications including: 

Pan, Y., Dong, F., & Du, C*. (2023). Is China approaching the inflection point of the ecological Kuznets curve? Analysis based on ecosystem service value at the county level. Journal of Environmental Management, 326, 116629 (8/Q1).

Du, C., Cao, Y., Ling, Y., Jin, Z., Wang, S., & Wang, D. (2024). Does manufacturing agglomeration promote green productivity growth in China? Fresh evidence from partially linear functional-coefficient models. Energy Economics, 131, 107352 (13.6/Q1).`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://come.tju.edu.cn/info/1552/5864.htm' }
          ]
        },
        {
          id: 8,
          name: 'Wen He',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u14.png',
          detail: `Wen He is a Postgraduate Researcher (PhD Candidate) in the Department of Geography at King's College London, specialising in urban cascading climate risks.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        },
        {
          id: 9,
          name: 'Yaotian Sun',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u15.png',
          detail: `Yaotian Sun is a research student in Economics of Population, Resources and Environment at the Center for Economic Research, Shandong University. Her key publication includes:

Sun, Y., Zhang, R. and Li, A. (2024). 'A new concept of education-innovation-economy-environment sustainability system: a new framework of strategy-based network data envelopment analysis', Environment Development and Sustainability.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        },
        {
          id: 10,
          name: 'Can Wang',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u7.png',
          detail: `Can Wang is a PhD Candidate in Business Management at the Department of Management, Beijing Institute of Technology (BIT), China. She also holds B.E. in Information Management and Information System and M.S. in Management Science and Engineering from BIT. 

Her research focuses on cascading risks in energy transitions, examining how disruptions in energy systems, technology deployment, and economic structures influence productivity, employment patterns, and labor markets during the shift to a low-carbon economy. Her study also explores how the price changes during the energy transition are transmitted to energy-consuming sectors, potentially creating risks in these sectors. Additionally, her research investigates how extreme weather events, such as heatwaves and floods, affect the resilience of the low-carbon transition, analyzing how both energy systems and labor markets adapt to such risks. By employing Integrated Assessment Models (IAMs) and machine learning, her research captures interdependencies across various sectors, aiming to identify policy interventions that can reduce cascading vulnerabilities and enhance the overall resilience of low-carbon systems. Key publication includes:

Song Y, Wang C, Wang Z. Climate risk, institutional quality, and total factor productivity[J]. Technological Forecasting and Social Change, 2023, 189: 122365.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        },
      ],
      advisorBoard: [
                {
          id: 1,
          name: 'Professor Aijun Li',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u2.png',
          detail: `Prof. Aijun Li is a Professor at Shandong University, China. He is the Principal Investigator of the Center for Economic Research and leads a research team focused on large-scale modeling for energy economics, climate policy, and disaster resilience. He is a Taishan Scholar Young Expert (Shandong Province), Outstanding Mid-Career Scholar (Shandong University), and Young Cultural Talent awarded by the Central Propaganda Department of China.

He graduated with a PhD in Economics at Xiamen University and completed postdoctoral research at Shandong University, with a visiting scholarship at the University of Pittsburgh. His work develops methodologies to quantify carbon emissions, economic resilience, and climate policy impacts, pioneering open-source DEA models for global sustainability research.

He has published over 40 peer-reviewed papers in top-tier journals, including Economic Research, European Journal of Operational Research, Energy Economics, and Journal of Cleaner Production. More than 30 of his papers rank in the top 5% of their disciplines, with 1 ESI Hot Paper, 2 ESI Highly Cited Papers, and the Elsevier Highest Cited Paper Award (2018).`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://faculty.sdu.edu.cn/liaijun/zh_CN/index.htm' }
          ]
        },
        {
          id: 2,
          name: 'Dr Jinlei Zhang',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u3.png',
          detail: `Dr. Jinlei Zhang is an Associate Professor at the School of Systems Science, Beijing Jiaotong University, where he leads research in intelligent transportation systems and spatiotemporal data mining. He serves as Lead Guest Editor for Transportmetrica A and Sustainability special issues, and was Guest Editor for Journal of Geo-Information Science, Special Issue. 

He earned his PhD in Traffic Engineering from Beijing Jiaotong University, with visiting research at the University of Washington and Hong Kong Polytechnic University. His research focuses on traffic engineering,deep learning, spatiotemporal data mining, and traffic prediction. 

He has published over 30 SCI papers in top journals including IEEE Transactions on Intelligent Transportation Systems, Transportation Research Part C, and Information Fusion. His key publications includes:
Yue Mo, Jinlei Zhang* , Chengcheng Wang, Xiaopei Hao, Lixing Yang, Ziyou Gao. A Semi-Conv-Transformer model for inflow prediction of newly expanding subway lines. IEEE Transactions on Intelligent Transportation Systems, 2025: 1-17.

Jinlei Zhang , Shuai Mao, Shuxin Zhang, Jiateng Yin, Lixing Yang*, Ziyou Gao*. EF-former for short-term passenger Flow Prediction during large-scale events in Urban Rail Transit systems[J]. Information Fusion, 2025, 117: 102916.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://faculty.bjtu.edu.cn/9684/' }
          ]
        },
        {
          id: 3,
          name: 'Dr Jin Rui',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u4.png',
          detail: `Dr. Jin Rui is a Postdoctoral Research Associate in Spatial Analytics and Machine Learning at the Department of Geography, King's College London, UK. He leads AI-driven projects on building typology recognition, flood prediction, and semantic risk perception at King's College London, following postdoctoral work on smart mobility modeling at Heidelberg University. He serves as Guest Editor for Land's Special Issue on spatial data science.

He graduated with a Dr.-Ing. in Spatial Planning (magna cum laude) from Technical University Dortmund, Germany, and an MSc in Architecture and Urban Planning from Leibniz University Hannover, Germany.

His research focuses on geospatial artificial intelligence for multi-scale modeling and intelligent intervention in urban environments, aiming to enhance cities' resilience to climate risks and social inequalities. By integrating multi-source data—such as street view imagery, social media, remote sensing, and mobile signaling—with advanced methods including deep learning, graph neural networks, and causal inference, he develop interpretable spatiotemporal models for urban risk prediction, behavioral simulation, and policy evaluation. Grounded in a human-centered perspective, his work promotes data-driven urban governance, infrastructure optimization, and spatial justice transformation. Key publications include:

Rui, J. (2025). Green disparities, happiness elusive: Decoding the spatial mismatch between green equity and the happiness from vulnerable perspectives. Cities, 163, 106063.

Rui, J., & Cai, C. (2025). Plausible or misleading? Evaluating the adaption of the place pulse 2.0 dataset for predicting subjective perception in Chinese urban landscapes. Habitat International, 157, 103333.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://come.tju.edu.cn/info/1552/5864.htm' }
          ]
        },
        {
          id: 4,
          name: 'Dr Jin Rui',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u5.png',
          detail: `Dr. Yuan Liu is an Associate Research Fellow at the National Climate Center, China Meteorological Administration. He holds a PhD in Natural Disaster Science from Beijing Normal University, an MSc in Environmental Engineering from North China Electric Power University, and a BSc in Applied Meteorology from Nanjing University of Information Science and Technology. 

He Engaged in research on meteorological disaster risk and climate change impact assessment, with a focus on risk evaluation grounded in the hazard–exposure–vulnerability framework, disaster loss estimation based on input-output theory, and interdisciplinary climate-economic assessments integrating climate science, physical systems, and economic modeling. His current research centers on the impacts of extreme weather and climate events on infrastructure and agricultural systems under global warming, with an emphasis on cross-sectoral cascading effects. Key publications in high-impact journals include:

Liu, Y., Li, N., Zhang, Z., Huang, C., Chen, X., & Wang, F. (2020). The central trend in crop yields under climate change in China: A systematic review. Science of the Total Environment.

Huang, C., Guo, J., Zhang, Z., Li, N., Zhu, A., Liu, Y., Chen, X., Sun, B. (2025). Indirect economic benefits of energy consumption changes under China's carbon neutrality goal. Energy.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        },
        {
          id: 5,
          name: 'Dr Zhao Zeng',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u6.png',
          detail: `Dr. Zhao Zeng is an Associate Research Fellow at the College of Management and Economics, Tianjin University, China. Her research focuses on cascading risk analysis of sudden-onset disasters (including natural disasters) and post-disaster management. 

She holds a PhD degree in Climate Change Economics from the University of East Anglia, UK, a Master and a Bachelor degree from Beijing Forestry University, China. Before joining Tianjin University, she was a research associate at Imperial College London, UK. 

During past several years, she improved the methodology of disaster footprint analysis based on Input-Output framework, which can be applied to quantify the disaster-induced economic costs cascading throughout production supply chains at both industrial and regional level, and assess the economic impacts of various post-disaster recovery schemes. Key publication in high-impact journals includes:

Zhao Zeng, Nan Wang, Zengkai Zhang, Huimin Wang, Huibin Du*. Flood footprint assessment: Assessing external assistance' impact on post-disaster recovery. Risk Analysis, 2025, 1–12. https://doi.org/10.1111/risa.70013.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://come.tju.edu.cn/info/1552/5864.htm' }
          ]
        }

      ]
    }
  },
  methods: {
    getPhoto(n: number) {
      // 可根据实际头像路径替换，默认用 u1~u6 循环
      const idx = (n-1) + 1;
      return `/src/assets/images/u${idx}.png`;
    }
  }
}
</script>

<style scoped>
.academic-team {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  background: #fff;
  color: #222;
  min-height: 100vh;
  padding: 32px 0;
}

/* 团队介绍区域样式 */
.team-intro-section {
  position: relative;
  overflow: hidden;
}

.team-intro-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.team-photos-container {
  position: relative;
  z-index: 1;
}

.team-photos {
  position: relative;
}

.team-photo-wrapper {
  position: relative;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.team-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-photo-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.team-photo-wrapper:hover .team-photo {
  transform: scale(1.05);
}

.team-photo-wrapper:hover .photo-overlay {
  opacity: 1;
}

.team-intro-text {
  position: relative;
  z-index: 1;
}

.intro-content p {
  position: relative;
}

.intro-content p::before {
  content: '';
  position: absolute;
  left: -12px;
  top: 0.5em;
  width: 3px;
  height: 1em;
  background: linear-gradient(to bottom, #6b7280, #9ca3af);
  border-radius: 2px;
  opacity: 0.7;
}

.team-stats {
  position: relative;
}

.stat-item {
  padding: 12px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .team-intro-section {
    padding: 6rem 2rem;
  }
  
  .team-photos {
    gap: 2px;
  }
  
  .team-photo-wrapper {
    border-radius: 8px;
  }
}

@media (max-width: 768px) {
  .team-intro-section {
    padding: 4rem 1.5rem;
  }
  
  .team-photos {
    max-width: 280px;
    gap: 1px;
  }
  
  .team-photo-wrapper {
    border-radius: 6px;
  }
  
  .intro-content p::before {
    left: -8px;
    width: 2px;
  }
  
  .team-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }
  
  .stat-item {
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .team-intro-section {
    padding: 3rem 1rem;
  }
  
  .team-photos {
    max-width: 200px;
  }
  
  .team-photo-wrapper {
    border-radius: 4px;
  }
}

.university-header {
  font-size: 1.4rem;
  letter-spacing: 0.06em;
  font-weight: 600;
  margin-bottom: 32px;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 8px;
  text-align: left;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.member-card {
  perspective: 1000px;
  height: 280px;
  width: 200px;
  margin: 0 auto;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  transform-style: preserve-3d;
}

.member-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  background: #fff;
  transition: box-shadow 0.3s ease;
}

.member-card:hover .card-front {
  box-shadow: 0 4px 20px rgba(0,0,0,0.12);
}

.card-back {
  position: absolute;
  width: 320px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%) rotateY(180deg);
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.12);
  background: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.avatar {
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 12px 12px 0 0;
}

.member-info {
  padding: 10px;
  text-align: center;
}

.member-name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 3px 0;
  color: #111;
  line-height: 1.3;
}

.member-title {
  font-size: 0.8rem;
  color: #666;
  margin: 0;
  line-height: 1.4;
}

.member-detail {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.detail-name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 3px 0;
  color: #111;
}

.detail-title {
  font-size: 0.85rem;
  color: #0077b5;
  margin: 0 0 10px 0;
}

.detail-bio {
  font-size: 0.8rem;
  line-height: 1.5;
  color: #444;
  margin-bottom: 10px;
  flex-grow: 1;
  overflow-y: auto;
  /* 滚动条美化 */
  scrollbar-width: thin;
  scrollbar-color: #c1c7cd #f3f4f6;
}
.detail-bio::-webkit-scrollbar {
  width: 4px;
  background: #f3f4f6;
}
.detail-bio::-webkit-scrollbar-thumb {
  background: #c1c7cd;
  border-radius: 4px;
}
.detail-bio::-webkit-scrollbar-thumb:hover {
  background: #b0b6bc;
}
.detail-bio::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 4px;
}

.detail-links {
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-top: 10px;
  border-top: 1px solid #eee;
}

.icon-link {
  font-size: 1.2rem;
  color: #666;
  transition: color 0.2s;
}

.icon-link:hover {
  color: #0077b5;
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  
  .member-card {
    height: 260px;
    width: 180px;
  }
  
  .card-back {
    width: 280px;
  }
  
  .avatar {
    height: 160px;
  }
  
  .university-header {
    font-size: 1.2rem;
    margin-bottom: 24px;
  }
}

@media (max-width: 480px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  .member-card {
    height: 240px;
    width: 160px;
  }
  
  .card-back {
    width: 260px;
  }
  
  .avatar {
    height: 140px;
  }
}
</style>
