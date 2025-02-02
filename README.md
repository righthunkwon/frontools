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

## 개발

[vite 환경에서 절대경로 설정하기](https://velog.io/@hunmok1027/vite-%EC%97%90%EC%84%9C-%EC%A0%88%EB%8C%80%EA%B2%BD%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

[시멘틱 태그](https://seo.tbwakorea.com/blog/what-is-semantic-tag/)

요소들의 배치를 나타내는 tailwind css 태그들의 경우 (ex. flex, p, m 등) 각 컴포넌트의 최상단이 아니라, 페이지나 레이아웃과 같은 곳에 하여 요소의 배치를 수정할 때 컴포넌트에 해당하는 css 속성까지 수정하는 일을 최소화하자.
<br /><br />

## 최적화

[아이콘 최적화 - svg](https://yozm.wishket.com/magazine/detail/2252/)
[프론트엔드 성능 최적화](https://east-star.tistory.com/36)

- 아이콘 적용 방법

```
1. vite-plugin-svgr 설치

2. vite.config.ts에 plugins: [..., svgr(), ...] 정의

3. tsconfig.json의 compilerOptions: {..., "types": ["vite-plugin-svgr/client"] ,...} 정의

4. ?react 를 붙여 svg 파일 import
import Close from '../assets/close-btn.svg?react';

5. svg 파일을 컴포넌트처럼 사용
<Close width={20} height={40} />
```

<br /><br />

## 트러블슈팅

[import React from 'react'와 이별하기](https://summermong.tistory.com/504)
[일렉트론 배포 경로 문제 - HashRouter](https://code-nen.tistory.com/125)
<br /><br />
