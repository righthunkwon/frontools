# 🖥️ 프론툴즈

> 프론트엔드 개발자를 위한 데스크톱 어플리케이션

<br />

## 프로젝트 개발 문서

준비 중
<br /><br />

## 프로젝트 폴더구조

[Toss Frontend Fundamentals: 함께 수정되는 파일을 같은 디렉토리에 두자](https://frontend-fundamentals.com/code/examples/code-directory.html)
<br /><br />

## 프로젝트 생성

```
npm create electron-vite@latest
```

<br /><br />

## 커밋컨벤션

- ✨ feat: 새로운 기능을 추가하는 경우
- 🐞 fix: 버그를 고친경우
- 📚 docs: 문서를 수정한 경우
- 📝 style: 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는경우
- 🔨 refactor: 코드 리펙토링
- ☔ test: 테스트 코드. 리펙토링 테스트 코드를 추가했을 때
- 🧹 chore: 빌드 업무 수정, 패키지 매니저 수정
- 💄 design: CSS 등 사용자가 UI 디자인을 변경했을 때
- ✏️ rename: 파일명(or 폴더명) 을 수정한 경우
- 🗑️ remove: 코드(파일) 의 삭제가 있을 때
- 🌱 add: 파일 추가한 경우
- 🔀 merge: 브랜치 병합
  <br /><br />

## 최적화

[아이콘 최적화 - svg](https://yozm.wishket.com/magazine/detail/2252/)
[프론트엔드 성능 최적화](https://east-star.tistory.com/36)

- 아이콘 적용 방법

```
1. vite-plugin-svgr 설치

2. vite.config.ts에 plugins: [..., svgr(), ...] 정의

3. tsconfig.json의 compilerOptions: {..., "types": ["vite-plugin-svgr/client"] ,...} 정의

4. svg 파일 내 width와 height를 width="current", height="current"로 지정

5. ?react 를 붙여 svg 파일 import
import Close from '../assets/close-btn.svg?react';

6. svg 파일을 컴포넌트처럼 사용
<Close width='20' height='40' />
```

<br /><br />

## 트러블슈팅

[import React from 'react'와 이별하기](https://summermong.tistory.com/504)
[일렉트론 배포 경로 문제 - HashRouter](https://code-nen.tistory.com/125)
<br /><br />
