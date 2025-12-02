# Tei Youth 명함 QR 랜딩페이지

> "動かなければ、アイデアはただの言葉だ。"
> (움직이지 않으면 아이디어는 단지 말일 뿐이다)

일본 비즈니스 네트워킹 및 명함 교환 행사에서 사용할 명함 QR코드와 연결되는 개인 브랜딩 웹사이트

## 🎯 프로젝트 목적

- **타겟**: 일본 비즈니스 파트너, 잠재 클라이언트, 네트워킹 참석자, 투자자
- **핵심 가치**: "나는 누구이며, 무엇을 만들어왔고, 어떤 가치를 제공할 수 있는가"를 한 페이지에 직관적으로 전달
- **브랜드 메시지**: 실행력 / 행동 / 변혁
- **커리어 목표**: できるスタートアップを日本で再び設立することがキャリア的目標です。

## 📋 수정 요청 사항

### 1. About Section 수정
- [ ] 커리어 목표 텍스트 추가: "できるスタートアップを日本で再び設立することがキャリア的目標です。"

### 2. Core Values 섹션 대대적 수정
#### 메인 카드 (3개 - 강조 디자인)
- [ ] **AI 활용**
  - 시장에 있는 거의 모든 AI 툴 및 Agent를 활용하여 업무공간을 최적화합니다.
  - 이미지 포함

- [ ] **開発 (개발)**
  - 빠른 학습과 효율적인 라이브러리 활용으로, 웹/앱/SaaS/게임까지 모든 소프트웨어의 개발이 가능합니다.
  - 이미지 포함

- [ ] **マーケティング (마케팅)**
  - スタートアップの마케팅 담당으로 시작하여, 법인 마케팅 운영사를 직접 운영하였습니다.
  - 이미지 포함

#### 보조 카드 (3개 - 작은 디자인)
- [ ] **教育 (교육)**
  - 부동산, AI 등 다양한 분야의 교육 경험

- [ ] **チームリーダーシップ**
  - 학회장, 대표이사 등 리더십 경험

- [ ] **グローバル**
  - 한일 비즈니스 브릿지 역할

### 3. Connect Section 수정
#### CTA 버튼
- [ ] "コーヒーチャットを予約する" → "Line 친구추가하기"
- [ ] URL: https://line.me/ti/p/De3-6cw7W7

#### SNS 링크 (LinkedIn, GitHub 제거)
- [ ] **Instagram**: https://www.instagram.com/tei.youth/
- [ ] **Email**: jys13230@gmail.com

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
- **URL**: https://youthintroduce-1anf8d7il-comdbstns-projects.vercel.app
- **GitHub**: https://github.com/comdbstn/youth_introduce

## 📁 현재 페이지 구조

```
Hero Section
  ↓
About Section (스토리 + 커리어 목표)
  ↓
Core Values (메인 3개 + 보조 3개)
  ↓
Works Section (경력 타임라인 2020-2025)
  ↓
Portfolio Section (개발 프로젝트 10개)
  ↓
Connect Section (LINE 친구추가, Instagram, Email)
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

## 📊 현재 성능

- **First Load JS**: 192 kB
- **Page Size**: 90.5 kB
- **빌드 시간**: ~5초
- **모바일 최적화**: 완료
- **애니메이션 최적화**: 완료

## 📝 개발 규칙

1. **모든 내용은 일본어로 작성**
2. 불필요한 코드 제거 (클린 코드)
3. 컴포넌트 재사용성 고려
4. 접근성 준수 (WCAG AA)
5. 시맨틱 HTML 사용
6. TypeScript 타입 안정성 유지

## 📞 연락처

- **Developer**: Tei Youth
- **Email**: jys13230@gmail.com
- **Instagram**: https://www.instagram.com/tei.youth/
- **LINE**: https://line.me/ti/p/De3-6cw7W7

---

**Last Updated**: 2025-12-03
