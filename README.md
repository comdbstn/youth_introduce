# Tei Youth 명함 QR 랜딩페이지

> "動かなければ、アイデアはただの言葉だ。"
> (움직이지 않으면 아이디어는 단지 말일 뿐이다)

일본 비즈니스 네트워킹 및 명함 교환 행사에서 사용할 명함 QR코드와 연결되는 개인 브랜딩 웹사이트

## 🎯 프로젝트 목적

- **타겟**: 일본 비즈니스 파트너, 잠재 클라이언트, 네트워킹 참석자, 투자자
- **핵심 가치**: "나는 누구이며, 무엇을 만들어왔고, 어떤 가치를 제공할 수 있는가"를 한 페이지에 직관적으로 전달
- **브랜드 메시지**: 실행력 / 행동 / 변혁

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animation**:
  - Framer Motion (페이지 전환, 기본 애니메이션)
  - GSAP + ScrollTrigger (스크롤 애니메이션)

### Deployment
- **Hosting**: Vercel
- **Domain**: TBD
- **Analytics**: Vercel Analytics

## 📁 프로젝트 구조

```
tei-youth-landing/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 전역 스타일
├── components/            # React 컴포넌트
│   ├── sections/         # 섹션별 컴포넌트
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── WorksSection.tsx
│   │   └── ConnectSection.tsx
│   ├── ui/               # 재사용 가능한 UI 컴포넌트
│   └── animations/       # 애니메이션 컴포넌트
├── lib/                  # 유틸리티 함수
├── public/              # 정적 파일
│   ├── images/         # 이미지 파일
│   └── fonts/          # 폰트 파일
└── docs/               # 기획서 및 문서
```

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Deep Indigo `#1C2233` - 배경
- **Accent 1**: Soft Cyan `#7EC8E3` - 불빛, 강조
- **Accent 2**: Silver Gray `#C4C4C4` - 텍스트
- **Accent 3**: Gold `#D4AF37` - CTA, 중요 요소

### 타이포그래피
- **영문**: Neue Haas Grotesk (모던하고 깔끔)
- **일본어**: 游明朝体 (Yu Mincho) - 전통적이면서 읽기 편함
- **한국어**: Pretendard 또는 Noto Sans KR

### 디자인 철학
- **Kanso (簡素)**: 불필요한 요소 제거, 명확한 메시지 전달
- **Ma (間)**: 여백을 통한 호흡감과 시각적 여유
- **Wabi-Sabi**: 완벽함보다는 진정성 있는 아름다움

## 📄 페이지 섹션 구조

### 1. Hero / Light Section
- Tei Souta 로고 + 蒼狐(아오기츠네) 심볼
- 캐치프레이즈: "Developer & Entrepreneur"
- 서브텍스트: "動かなければ、アイデアはただの言葉だ。"
- 푸른 빛 파티클 애니메이션
- 스크롤 인디케이터

### 2. About / Vision Section
- 헤드라인: "From Seoul to Yokohama"
- 스토리: 한국 창업가 → 일본 진출 → 비전
- 핵심 가치 전달
- 감각적 이미지 비주얼

### 3. Works / Portfolio Section
- 세로 연혁 스크롤링 형식
- 2020년부터 2025년까지 프로젝트 타임라인
- 호버 시 프로젝트 이미지 확대 및 세부 설명
- 주요 성과 및 프로젝트 하이라이트

### 4. Connect / Contact Section
- 커피챗 예약 링크 (Calendly/Cal.com)
- SNS 링크 (LinkedIn, GitHub, Email)
- CTA 버튼: "Let's have a coffee chat"

## 🚀 개발 로드맵

### Phase 1: 기본 구조 (완료)
- [x] Next.js 프로젝트 설정
- [x] TailwindCSS 설정
- [x] 기본 디렉토리 구조 생성
- [x] Git 저장소 초기화

### Phase 2: 섹션 구현 (진행 예정)
- [ ] Hero Section 구현
  - [ ] 로고 및 타이포그래피
  - [ ] 파티클 애니메이션 (WebGL)
  - [ ] 스크롤 인디케이터
- [ ] About Section 구현
  - [ ] 스토리 텍스트
  - [ ] GSAP ScrollTrigger 애니메이션
  - [ ] 이미지 레이아웃
- [ ] Works Section 구현
  - [ ] 타임라인 컴포넌트
  - [ ] 프로젝트 카드
  - [ ] 호버 인터랙션
- [ ] Connect Section 구현
  - [ ] CTA 버튼
  - [ ] SNS 링크
  - [ ] 배경 애니메이션

### Phase 3: 애니메이션 & 인터랙션
- [ ] Framer Motion 페이드인 효과
- [ ] GSAP ScrollTrigger 스크롤 애니메이션
- [ ] Parallax 효과
- [ ] Text reveal 애니메이션
- [ ] 호버 효과 및 트랜지션

### Phase 4: 최적화 & 배포
- [ ] 이미지 최적화 (WebP, lazy loading)
- [ ] 모바일 반응형 테스트
- [ ] 성능 최적화 (Lighthouse 점수 90+)
- [ ] SEO 설정
- [ ] Vercel 배포
- [ ] 도메인 연결
- [ ] Analytics 설정

## 📱 모바일 최적화

### 우선순위
- **모바일 우선 설계**: 명함 QR 스캔 시 즉시 접속
- **로딩 속도**: 3초 이내 First Contentful Paint
- **반응형 디자인**: 모든 디바이스 최적화

### 체크리스트
- [ ] 모든 텍스트 최소 16px
- [ ] 터치 타겟 최소 44x44px
- [ ] 이미지 WebP 포맷, lazy loading
- [ ] 모바일 스크롤 애니메이션 단순화
- [ ] 3G 환경에서 5초 이내 로딩
- [ ] 가로 모드 대응 (1280x720)

## 🔧 로컬 개발 환경 설정

### 필수 요구사항
- Node.js 18.17 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버: http://localhost:3000

## 🌐 배포

### Vercel 배포 가이드
1. Vercel 계정으로 GitHub 저장소 연결
2. 프로젝트 import
3. 빌드 설정 자동 감지
4. Deploy 버튼 클릭
5. 도메인 설정 (선택사항)

### 환경 변수
현재 필요한 환경 변수 없음 (추후 Calendly API 등 추가 예정)

## 📊 성능 목표

- **First Contentful Paint**: < 3초
- **Largest Contentful Paint**: < 3.5초
- **Time to Interactive**: < 5초
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)

## 📝 개발 규칙

1. **모든 내용은 일본어로 작성**
2. 불필요한 코드 제거 (클린 코드)
3. 컴포넌트 재사용성 고려
4. 접근성 준수 (WCAG AA)
5. 시맨틱 HTML 사용
6. TypeScript 타입 안정성 유지

## 🔗 관련 링크

- [Next.js 공식 문서](https://nextjs.org/docs)
- [TailwindCSS 공식 문서](https://tailwindcss.com/docs)
- [Framer Motion 공식 문서](https://www.framer.com/motion/)
- [GSAP 공식 문서](https://greensock.com/docs/)

## 📞 문의

- **Developer**: Tei Youth
- **Email**: TBD
- **GitHub**: TBD

---

**Last Updated**: 2025-12-02
