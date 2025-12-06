# Tei Youth 명함 QR 랜딩페이지

> "動かなければ、アイデアはただの言葉だ。"
> (움직이지 않으면 아이디어는 단지 말일 뿐이다)

일본 비즈니스 네트워킹 및 명함 교환 행사에서 사용할 명함 QR코드와 연결되는 개인 브랜딩 웹사이트

## 🎯 프로젝트 목적

- **타겟**: 일본 비즈니스 파트너, 잠재 클라이언트, 네트워킹 참석자, 투자자
- **핵심 가치**: "나는 누구이며, 무엇을 만들어왔고, 어떤 가치를 제공할 수 있는가"를 한 페이지에 직관적으로 전달
- **브랜드 메시지**: 실행력 / 행동 / 변혁
- **커리어 목표**: できるスタートアップを日本で再び設立することがキャリア的目標です。

## ✅ 완료된 수정 사항

### 2025-12-06 업데이트

#### 1. Hero Section
- [x] 메인 타이틀: "Tei Youth" → "鄭允琇" (한자 이름)
- [x] 서브 타이틀: "蒼狐 | AOKITSUNE" → "Tei Youth | テイ・ユース"

#### 2. LoadingScreen
- [x] "鄭允琇"로 변경
- [x] "蒼狐 | AOKITSUNE" 삭제
- [x] % 표시 삭제
- [x] 로딩 이미지 추가 (loading.png, 회전 애니메이션)

#### 3. About Section
- [x] 커리어 목표 추가: "できるスタートアップを日本で再び設立することがキャリア的目標です。"
- [x] DreamBox 경력 추가: "ウェブ開発及びSaaS、AiAgentを開発するDreamBox株式会社の代表取締役として3年間在職しました。"
- [x] BridgeMarketing 경력 추가: "マーケティング代理店Bridge Marketingの代表取締役として2年間在職しました。"
- [x] Korvus Inc 추가: "日本事業に備えてKorvus Inc法人を設立して2ヶ月目運営中です。"
- [x] 애니메이션 오류 수정 (once: true로 변경)

#### 4. Core Values Section
- [x] 메인 카드 3개 (큰 디자인):
  - AI活用 🤖
  - 開発 💻
  - マーケティング 📊
- [x] 보조 카드 3개 (작은 디자인):
  - 教育 📚
  - チームリーダーシップ 👥
  - グローバル 🌏

#### 5. Works & Journey Section
- [x] 모든 활동에서 기간 표시 삭제
- [x] Major Projects 섹션 완전 삭제

#### 6. Portfolio Section
- [x] 카테고리 변경: すべて / 創業 / 開発外注 / マーケティング外注
- [x] 창업 프로젝트: 15개
- [x] 개발외주 프로젝트: 9개
- [x] 마케팅외주 프로젝트: 13개
- [x] **총 37개 프로젝트**
- [x] 페이지네이션 추가 (최대 6개 표시, "もっと見る" 버튼)
- [x] 애니메이션 최적화
- [x] 프로젝트 순서 재정렬:
  - 창업: Korvus → AboutMeeting → BridgeMarketing → 기타
  - 개발: Eden → Muko → BlueClub → 기타
  - 마케팅: DJ축제 → GrandMasterClass → MUSINSA → 기타

#### 7. Connect Section
- [x] LINE 버튼: "LINE友達追加"
- [x] LINE URL: https://line.me/ti/p/De3-6cw7W7
- [x] Instagram: https://www.instagram.com/tei.youth/
- [x] Email: jys13230@gmail.com
- [x] LinkedIn, GitHub 삭제

#### 8. 전역 기능
- [x] Floating Contact 버튼 추가 (우측 하단 고정)
- [x] 모바일 최적화 완료

#### 9. 기술 업데이트
- [x] Next.js 16.0.7로 업데이트 (보안 취약점 해결)
- [x] Turbopack 활성화

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 16.0.7 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animation**:
  - Framer Motion (페이지 전환, 기본 애니메이션)

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
Portfolio Section (총 37개 프로젝트 - 창업 15개, 개발 9개, 마케팅 13개)
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

**Last Updated**: 2025-12-06
