# 🖥️ 프론툴즈

> 프론트엔드 개발자를 위한 데스크톱 어플리케이션

<br />

## 프로젝트 개발 문서

준비 중
<br /><br />

## 프로젝트 개발 시 참고한 글

- 폴더구조     📂 [Toss frontedn-fundamentals - 함께 수정되는 파일은 같은 디렉토리에 두기](https://frontend-fundamentals.com/code/examples/code-directory.html)
- 컨벤션       📌 [vite 환경에서 절대경로 설정하기](https://velog.io/@hunmok1027/vite-%EC%97%90%EC%84%9C-%EC%A0%88%EB%8C%80%EA%B2%BD%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- 컨벤션       📌 [시멘틱 태그 사용하기](https://seo.tbwakorea.com/blog/what-is-semantic-tag/)
- 개발         💻 [Eslist, Prettier, Extensions](https://monamigoon.tistory.com/entry/Project-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B0%80%EC%9D%B4%EB%93%9C-%EC%9E%91%EC%84%B1)
- 개발         💻 [타입스크립트에서 useRef를 사용할 때 DOM 타입 지정 방법](https://zindex.tistory.com/241)
- 최적화       ✨ [아이콘 최적화 - svg](https://yozm.wishket.com/magazine/detail/2252/)
- 최적화       ✨ [번들 최적화와 Lighthouse](https://east-star.tistory.com/36)
- 최적화       ✨ [Zustand 사용 시 상태변경에 따른 리렌더링 최소화 - 컴포넌트에 스토어 훅 호출하지 않기](https://www.heropy.dev/p/n74Tgc)
- 트러블슈팅   💣 [import React from 'react'와 이별하기](https://summermong.tistory.com/504)
- 트러블슈팅   💣 [react-router-dom과 Electron - HashRouter 사용하기](https://code-nen.tistory.com/125)


<br /><br />

- (참고) SVG 적용 방법
```
1. vite-plugin-svgr 설치

2. vite.config.ts에 plugins: [..., svgr(), ...] 정의

3. tsconfig.json의 compilerOptions: {..., "types": ["vite-plugin-svgr/client"] ,...} 정의

4. ?react 를 붙여 svg 파일 import
import Close from '../assets/close-btn.svg?react';

5. svg 파일을 컴포넌트처럼 사용
<Close width={20} height={40} />
```

- (참고) Tailwind css와 레이아웃 태그
```
요소들의 배치를 나타내는 tailwind css 태그들의 경우(ex. flex, p, m 등)
각 컴포넌트의 최상단이 아니라, 레이아웃이나 적어도 페이지 같은 요소들의 구조가 보이는 곳에 작성하여
요소의 배치를 수정할 때 컴포넌트에 해당하는 css 속성까지 파고들어가서 하나하나 수정하는 일을 최소화하자.
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
