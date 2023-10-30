# 첫 번째 분리 컴포넌트 : TodoAndDoneBtn

- 경로
  
src/components/Button.jsx

- 이유
  
Done과 Working List는 개별로 둘 다 반드시 존재해야 한다고 생각해서, Working List 따로 Done 따로 jsx를 작성했습니다
그러다보니 두 개가 상당히 겹치는 부분이 많아 이 부분을 TodoAndDoneBtn이라는 컴포넌트로 빼서 
코드를 간결화 시키고, 가독성을 높이려고 노력했습니다.

- 설명

isDone이 false면 완료하기 버튼이 나오며, true면 취소 버튼이 나오게끔 구현했습니다.


# 두 번째 분리  : style

- 경로
  
src/components/style.js

- 이유
  
style이 너무 많으면 코드가 길어지고 가독성에 안 좋다고 판단해, 모든 style을 하나의 js 파일에 몽땅 모아서, 그곳에서 import 해오는 식으로 구현했습니다.

- 설명
  
style 관리





