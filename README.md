# next-portfolio 연습

### 학습 및 적용 파트

---

- Next.js 13 환경설정
    - next Image 오류 수정 (width, height)
- tailwindCSS 환경설정
    - @apply 오류수정 (공백 및 class 설정 문제)
    - autoprefixer 오류수정
    - theme attribute 오류수정

```jsx
module.exports = {
  plugins: {
    tailwindcss: { config: "./tailwind.config.js" },
    autoprefixer: {},
  },
};
```

```jsx
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {},
  },
  plugins:  [
  
  ],
};
```

```jsx
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
.bg-primary {
    @apply bg-white dark:bg-slate-800
}

.btn-project {
    @apply inline-flex text-white dark:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg
}

.project-card {
    @apply flex flex-col m-3 rounded-xl w-full transition duration-300 transform border border-gray-300 hover:scale-105 hover:shadow-lg dark:border-gray-200/50 dark:hover:shadow-gray-400/40 hover:text-blue-600
}

h1,
h2,
h3,
h4,
h5,
h6 {
    @apply text-slate-900 dark:text-white
}

footer {
    @apply text-gray-600 dark:text-white bg-gray-100 dark:bg-slate-600/20
}

a {
    @apply text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-50
}

p {
    @apply text-slate-500 dark:text-slate-400
}
```

- next-theme를 사용한 dark모드 적용
    - provider 범위 설정 문제수정
- Lottie Animation 적용
    - *'react-lottie-player' → "@lottiefiles/react-lottie-player"; 오류수정*
    
    ```jsx
    'use client'
    import React from 'react'
    // import Lottie from 'react-lottie-player'
    import { Player } from "@lottiefiles/react-lottie-player";
    // Alternatively:
    
    // import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
    import lottieJson from '@/public/animation.json';
    
    export default function Animation() {
      return (
        <Player
          loop
          src={lottieJson}
          autoplay 
        />
      )
    }
    ```
    
- Notion api integration 적용
- Next.js 데이터 페칭
    - 외부함수 export 문제 해결
- Vercel 를 통한 배포
- postman 노션 데이터 처리 확인
- 외부 이미지 허용처리
    - next.config.js
    
    ```jsx
    /** @type {import('next').NextConfig} */
    const nextConfig = {
        reactStrictMode: true,
        images: {
            domains: [
                'www.notion.so',
                'images.unsplash.com',
                's3.us-west-2.amazonaws.com'
            ],
            format: ['image/png', 'image/webp', 'image/jpeg']
        }
      }
      
      module.exports = nextConfig
    ```

    ## [Test URL](https://next-portfolio-sage-zeta.vercel.app/)
