<template>
  <div class="academic-team">
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

    <div class="university-header" style="margin-top: 64px;">ADVISOR BOARD</div>
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
  </div>
</template>

<script>
const websiteSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0077b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>`;

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
          name: 'Professor Aijun Li',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u2.png',
          detail: `Prof. Aijun Li is a Professor at Shandong University, China. He is the Principal Investigator of the Center for Economic Research and leads a research team focused on large-scale modeling for energy economics, climate policy, and disaster resilience. He is a Taishan Scholar Young Expert (Shandong Province), Outstanding Mid-Career Scholar (Shandong University), and Young Cultural Talent awarded by the Central Propaganda Department of China.

He graduated with a PhD in Economics at Xiamen University and completed postdoctoral research at Shandong University, with a visiting scholarship at the University of Pittsburgh. His work develops methodologies to quantify carbon emissions, economic resilience, and climate policy impacts, pioneering open-source DEA models for global sustainability research.

He has published over 40 peer-reviewed papers in top-tier journals, including Economic Research, European Journal of Operational Research, Energy Economics, and Journal of Cleaner Production. More than 30 of his papers rank in the top 5% of their disciplines, with 1 ESI Hot Paper, 2 ESI Highly Cited Papers, and the Elsevier Highest Cited Paper Award (2018).`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        },
        {
          id: 3,
          name: 'Dr Jinlei Zhang',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u3.png',
          detail: `Dr. Jinlei Zhang is an Associate Professor at the School of Systems Science, Beijing Jiaotong University, where he leads research in intelligent transportation systems and spatiotemporal data mining. He serves as Lead Guest Editor for Transportmetrica A and Sustainability special issues, and was Guest Editor for Journal of Geo-Information Science, Special Issue. 

He earned his PhD in Traffic Engineering from Beijing Jiaotong University, with visiting research at the University of Washington and Hong Kong Polytechnic University. His research focuses on traffic engineering,deep learning, spatiotemporal data mining, and traffic prediction. 

He has published over 30 SCI papers in top journals including IEEE Transactions on Intelligent Transportation Systems, Transportation Research Part C, and Information Fusion. His key publications includes:
Yue Mo, Jinlei Zhang* , Chengcheng Wang, Xiaopei Hao, Lixing Yang, Ziyou Gao. A Semi-Conv-Transformer model for inflow prediction of newly expanding subway lines. IEEE Transactions on Intelligent Transportation Systems, 2025: 1-17.

Jinlei Zhang , Shuai Mao, Shuxin Zhang, Jiateng Yin, Lixing Yang*, Ziyou Gao*. EF-former for short-term passenger Flow Prediction during large-scale events in Urban Rail Transit systems[J]. Information Fusion, 2025, 117: 102916.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        },
        {
          id: 4,
          name: 'Dr Jin Rui',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u4.png',
          detail: `Dr. Jin Rui is a Postdoctoral Research Associate in Spatial Analytics and Machine Learning at the Department of Geography, King's College London, UK. He leads AI-driven projects on building typology recognition, flood prediction, and semantic risk perception at King's College London, following postdoctoral work on smart mobility modeling at Heidelberg University. He serves as Guest Editor for Land's Special Issue on spatial data science.

He graduated with a Dr.-Ing. in Spatial Planning (magna cum laude) from Technical University Dortmund, Germany, and an MSc in Architecture and Urban Planning from Leibniz University Hannover, Germany.

His research focuses on geospatial artificial intelligence for multi-scale modeling and intelligent intervention in urban environments, aiming to enhance cities' resilience to climate risks and social inequalities. By integrating multi-source data—such as street view imagery, social media, remote sensing, and mobile signaling—with advanced methods including deep learning, graph neural networks, and causal inference, he develop interpretable spatiotemporal models for urban risk prediction, behavioral simulation, and policy evaluation. Grounded in a human-centered perspective, his work promotes data-driven urban governance, infrastructure optimization, and spatial justice transformation. Key publications include:

Rui, J. (2025). Green disparities, happiness elusive: Decoding the spatial mismatch between green equity and the happiness from vulnerable perspectives. Cities, 163, 106063.

Rui, J., & Cai, C. (2025). Plausible or misleading? Evaluating the adaption of the place pulse 2.0 dataset for predicting subjective perception in Chinese urban landscapes. Habitat International, 157, 103333.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        },
        {
          id: 5,
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
          id: 6,
          name: 'Dr Zhao Zeng',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u6.png',
          detail: `Dr. Zhao Zeng is an Associate Research Fellow at the College of Management and Economics, Tianjin University, China. Her research focuses on cascading risk analysis of sudden-onset disasters (including natural disasters) and post-disaster management. 

She holds a PhD degree in Climate Change Economics from the University of East Anglia, UK, a Master and a Bachelor degree from Beijing Forestry University, China. Before joining Tianjin University, she was a research associate at Imperial College London, UK. 

During past several years, she improved the methodology of disaster footprint analysis based on Input-Output framework, which can be applied to quantify the disaster-induced economic costs cascading throughout production supply chains at both industrial and regional level, and assess the economic impacts of various post-disaster recovery schemes. Key publication in high-impact journals includes:

Zhao Zeng, Nan Wang, Zengkai Zhang, Huimin Wang, Huibin Du*. Flood footprint assessment: Assessing external assistance' impact on post-disaster recovery. Risk Analysis, 2025, 1–12. https://doi.org/10.1111/risa.70013.`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
          ]
        }
      ],
      advisorBoard: [
        {
          id: 1,
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
        {
          id: 2,
          name: 'Congcong Du',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u8.png',
          detail: `Congcong Du is a PhD candidate in the Department of Aeronautical and Aviation Engineering at The Hong Kong Polytechnic University. He holds an M.S. and a B.S. in Industrial Engineering from the China University of Mining and Technology.

His research focuses on climate risks in aviation and aviation emission reduction. 
He has published 5 papers in high-impact journals, with selected key publications including: 

Pan, Y., Dong, F., & Du, C*. (2023). Is China approaching the inflection point of the ecological Kuznets curve? Analysis based on ecosystem service value at the county level. Journal of Environmental Management, 326, 116629 (8/Q1).

Du, C., Cao, Y., Ling, Y., Jin, Z., Wang, S., & Wang, D. (2024). Does manufacturing agglomeration promote green productivity growth in China? Fresh evidence from partially linear functional-coefficient models. Energy Economics, 131, 107352 (13.6/Q1).`,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
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
          name: 'Pengfei Yuan',
          title: 'Lecturer in Risk, Environment and Society',
          avatar: '/src/assets/images/u13.png',
          detail: `Pengfei Yuan is a postgraduate researcher at the Department of Geography, King's College London and a Ph.D candidate in Shandong university. His research focuses on Climate-induced disruption modeling in critical infrastructure systems based on AI techniques and Cascading risk analysis in global supply and value chains. His key publication includes:
 
Yuan, P. et al. (2024). 'Assessing the supply risks of critical metals in China's low-carbon energy transition', Global Environmental Change, 86, 102825. `,
          socialLinks: [
            { platform: 'Website', icon: websiteSVG, url: 'https://www.kcl.ac.uk/people/daoping-wang' }
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
        }
      ]
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
  padding: 40px 0;
}

.university-header {
  font-size: 1.5rem;
  letter-spacing: 0.08em;
  font-weight: 600;
  margin-bottom: 48px;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 12px;
  text-align: left;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.member-card {
  perspective: 1000px;
  height: 320px;
  width: 220px;
  margin: 0 auto;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
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
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  background: #fff;
}

.card-back {
  position: absolute;
  width: 400px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%) rotateY(180deg);
  backface-visibility: hidden;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  background: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.avatar {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
}

.member-info {
  padding: 12px;
  text-align: center;
}

.member-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #111;
}

.member-title {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
}

.member-detail {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.detail-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #111;
}

.detail-title {
  font-size: 0.9rem;
  color: #0077b5;
  margin: 0 0 12px 0;
}

.detail-bio {
  font-size: 0.85rem;
  line-height: 1.5;
  color: #444;
  margin-bottom: 12px;
  flex-grow: 1;
  overflow-y: auto;
  /* 滚动条美化 */
  scrollbar-width: thin;
  scrollbar-color: #c1c7cd #f3f4f6;
}
.detail-bio::-webkit-scrollbar {
  width: 6px;
  background: #f3f4f6;
}
.detail-bio::-webkit-scrollbar-thumb {
  background: #c1c7cd;
  border-radius: 6px;
}
.detail-bio::-webkit-scrollbar-thumb:hover {
  background: #b0b6bc;
}
.detail-bio::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 6px;
}

.detail-links {
  display: flex;
  gap: 12px;
  justify-content: center;
  padding-top: 12px;
  border-top: 1px solid #eee;
}

.icon-link {
  font-size: 1.4rem;
  color: #666;
  transition: color 0.2s;
}

.icon-link:hover {
  color: #0077b5;
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
  
  .member-card {
    height: 320px;
    width: 220px;
  }
  
  .card-back {
    width: 280px;
  }
  
  .avatar {
    height: 220px;
  }
}
</style>
