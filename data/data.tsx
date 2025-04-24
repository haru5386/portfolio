import { Project } from "@/types/index.type";

export const projects: Project[] = [
    {
      id: 5,
      title: '錢包後台系統',
      description: '建構安全登入流程與動態權限控制，打造高擴充性後台系統。',
      fullDescription: [
        '負責帳號登入與 2FA 驗證流程設計，強化系統安全性。',
        '依據使用者權限動態渲染選單，實作 route guard 防止未授權訪問。',
        '以 shadcn UI + TanStack Table 製作共用表格元件，支援排序、篩選與自定欄位。',
        '使用 Vitest 撰寫邏輯單元測試，提高程式碼可靠性與可維護性。',
        '整合 Tailwind CSS 打造一致視覺，提升介面一致性與開發效率。'
      ],
      image: '/projects/wallet-home.png',
      gallery: ['/projects/wallet-home.png','/projects/wallet-1.png', '/projects/wallet-2.png', '/projects/wallet-3.png', '/projects/wallet-4.png'],
      skills: ['Vue 3', 'shadcn', 'Tailwind CSS', 'TanStack Table', 'Playwright', 'Vitest'],
      role: '前端開發｜登入與權限模組負責人',
      tags: ['權限控管', '2FA', '表格組件', '自動化測試'],
      link: ''
    },
    {
      id: 2,
      title: 'Powbit｜鏈遊平台',
      description: '從零開發公司品牌網站，實作動態國際化、多語 SEO 與法幣/加密錢包整合。',
      fullDescription: [
        '動態國際化：整合 Google Sheet，實作即時多語更新，支援多市場營運。',
        '社群優化：開發動態產生 og:image 功能，提高社群分享點擊率約 20%。',
        '功能頁開發：設計與實作獎勵展示與節點說明頁，提升用戶參與率與留存。',
        '支援法幣 & Crypto：串接第三方 API，實作錢包充值與提幣流程。',
        '用戶中心與安全設定：打造個人資料與安全功能（更改密碼、雙重驗證等）。',
        'OAuth 登入：支援 Google、Telegram 第三方登入，加速用戶註冊流程。',
        '效能最佳化：Nuxt3 Dynamic Import 與 Nuxt Image 實作延遲載入，首頁 JS 體積減少約 40%。'
      ],
      image: '/projects/powbit-home.png',
      gallery: ['/projects/powbit-home.png','/projects/powbit-1.png', '/projects/powbit-2.png', '/projects/powbit-3.png', '/projects/powbit-4.png'],
      skills: ['Vue 3', 'Nuxt 3', 'UnoCSS'],
      role: '前端開發｜品牌官網與錢包功能整合',
      tags: ['官網開發', '國際化', '加密貨幣', '效能優化'],
      link: ''
    },
    {
      id: 3,
      title: 'Powbit 後台管理系統開發',
      description: '0→1 開發內部後台系統，設計統一元件庫與編輯器工具，提升操作效率。',
      fullDescription: [
        '管理模組開發：負責營運管理與代理管理頁面設計與開發。',
        'UI 元件庫建置：結合 UnoCSS + Ant Design Vue，打造統一後台 UI 組件庫。',
        '富文本編輯器：以 Tiptap 打造自定義編輯器，支援格式控制、圖片上傳，方便營運人員操作。',
        '多標籤頁管理：利用 KeepAlive 實現多標籤頁快取與操作（切換、關閉、刷新），提升使用效率與 UX。',
        '組件重用與開發效率：重構重複使用模組，開發效率提升 25%。'
      ],
      image: '/projects/admin-home.png',
      gallery: ['/projects/admin-home.png','/projects/admin-1.png', '/projects/admin-2.png', '/projects/admin-3.png',],
      skills: ['Vue 3', 'UnoCSS', 'Ant Design Vue', 'Tiptap'],
      role: '前端開發｜後台系統與 UI 工具建置',
      tags: ['後台系統', 'UI 元件', 'Tiptap', 'UX 優化'],
      link: ''
    },
    {
      id: 1,
      title: 'Zorix 虛擬貨幣交易所平台',
      description: '主導大型 Vue 2 專案升級至 Vue 3 + Nuxt 3，打造即時交易體驗與高效能前端架構。',
      fullDescription: [
        '主導系統升級重構：將大型舊專案從 Vue 2 升級至 Vue 3 + Nuxt 3，導入 Composition API 與 TypeScript，提升代碼可維護性與類型安全。',
        '即時交易體驗：串接 WebSocket 與 TradingView API，實作現貨即時交易與高效能 K 線圖。',
        'C2C 模組開發：打造場外交易模組，實現訂單匹配、支付流程、即時訂單狀態更新。',
        '使用者轉換提升：整合第三方 KYC 驗證系統與優化註冊流程，提高註冊轉換率 25%。',
        '建立 UI 元件庫：自建前端 UI Library，加速團隊開發流程，並統一產品視覺風格。',
        '多語系支援：建置 i18n 架構，結合 Google Sheet 達成即時多語更新，加快行銷上線效率。',
        'SEO 與數據追蹤：導入 SEO 最佳化（sitemap、JSON-LD、PWA），Lighthouse SEO 分數提升 30+，整合 GA4/GTM 追蹤使用者行為，驅動產品數據決策。'
      ],
      image: '/projects/zorix-home.png',
      gallery: ['/projects/zorix-home.png','/projects/zorix-1.jpg', '/projects/zorix-2.jpg', '/projects/zorix-3.png', '/projects/zorix-4.jpg'],
      skills: ['Vue 2 → Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Element Plus'],
      role: '前端主導開發與架構重構',
      tags: ['加密貨幣', 'WebSocket', 'KYC', 'i18n'],
      link: ''
    },
    {
      id: 4,
      title: '互動式即時下注遊戲平台',
      description: '使用 Pixi.js 打造高互動即時遊戲體驗，整合音效、動畫與自動策略模組。',
      fullDescription: [
        '遊戲引擎與動畫開發：以 Pixi.js 打造即時渲染的高效動畫與遊戲場景，支援桌機與行動裝置流暢操作。',
        '前端架構設計：使用 Vue 3 + Composition API 模組化管理遊戲邏輯，Pinia 管理下注狀態與遊戲數據。',
        '即時下注系統：支援自定義金額、快速下注、歷史紀錄、即時倍率與兌現功能。',
        '自動策略玩法：開發可設定止盈/止損、自動兌現與下注次數限制的自動下注模組，提升遊戲策略性與黏著度。',
        '使用者偏好設定：提供音效開關、主題切換、動畫樣式調整，打造個人化體驗。',
        '音效與視覺強化：整合 Howler.js 控制音效播放與靜音邏輯，搭配 UnoCSS 打造輕量化、可快速調整的 UI。',
        '公平性與安全性設計：實作可驗證隨機數生成機制、防作弊邏輯與下注額度控制，保障用戶公平體驗。',
        '即時數據分析與統計：提供即時下注紀錄、勝率統計與遊戲參與分析，強化用戶留存與互動。'
      ],
      image: '/projects/crash-home.png',
      gallery: ['/projects/crash-home.png','/projects/crash-1.jpg', '/projects/crash-2.jpg'],
      skills: ['Vue 3', 'Pixi.js', 'Pinia', 'Howler.js', 'UnoCSS'],
      role: '前端開發｜遊戲引擎與自動策略模組',
      tags: ['即時遊戲', 'Pixi.js', '策略模組', '互動動畫'],
      link: ''
    }
  ]
  
export const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/haru5386',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/liang-yi-lin/',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: '部落格',
      url: 'https://blog-omega-gilt-59.vercel.app/blog',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
    },
    {
      name: '履歷',
      url: 'https://www.cake.me/s--qQIOvJLy5jCwoQWWKeo2jA--/snsn550',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
  ];
  