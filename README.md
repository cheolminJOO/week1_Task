# TodoAndDoneBtn

## 경로
src/components/Button.jsx

## 이유
Done과 Working List는 개별로 둘 다 반드시 존재해야 한다고 생각해서, Working List 따로 Done 따로 jsx를 작성했습니다
그러다보니 두 개가 상당히 겹치는 부분이 많아 이 부분을 TodoAndDoneBtn이라는 컴포넌트로 빼서 
코드를 간결화 시키고, 가독성을 높이려고 노력했습니다.

## 설명

isDone이 false면 완료하기 버튼이 나오며, true면 취소 버튼이 나오게끔 구현했습니다.

