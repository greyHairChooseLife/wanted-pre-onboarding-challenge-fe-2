## 저는

- 청주에서 독학합니다.(greyhairchooselife@gmail.com)
- 짧은 코스지만 이런 기회는 거의 처음이라.. 무사히 완주할 수 있겠죠? 같이 힘 내요!!

## 이 프로젝트는

- 원티드 프리온보딩 챌린지 프론트앤드, 3차과제 
- 설계된 모델링을 따라 구현 해 보기
- 모델링 피드백

## 참조한 타 수강생의 모델링

https://github.com/0131ryu/wanted-pre-onboarding-challenge-fe-ts/blob/main/src/todo/index.ts

## 피드백

- ABOUT interface와 변수
+ interface Todo의 category 속성은 필수 속성인데 optional 지정되었습니다.
+ TodoList가 let으로 선언 될 이유를 잘 모르겠습니다.
 
- ABOUT 함수
+ createTodo에 id: number 파라미터가 있으면 좋을 것 같습니다.
+ createTodo에 category, tags파라미터가 있으면 새로운 할 일을 생성하면서 category나  tags를 추가하는 것이 직관적일 것 같습니다.
+ createTodo가 void대신 생성한 todo를 리턴 해 주면 좋겠습니다. 실행 결과를 리턴하면 함수 실행 성공 여부 등 사용성이 높을 것 같습니다.
 
+ readTodo의 id파라미터 타입으로 
+ readTodo에 void대신 읽은 todo를 리턴 해 주면 좋겠습니다. 실행 결과를 리턴하면 함수 실행 성공 여부 등 사용성이 높을 것 같습니다.
 
+ updateTodo에 tags의 타입이 interface Todo의 속성과 다릅니다. 똑같이 Tags[]로 해 주면 더 직관적으로 구현할 수 있습니다.
+ updateTodo에 interface Todo 타입의 파라미터가 있으면 쉽게 id만 비교하여 쉽게 업데이트 할 수 있습니다.
+ updateTodo에 void대신 업데이트 결과인 todo를 리턴 해 주면 좋겠습니다.
 
+ deleteTodo에 void대신 결과를 알 수 있도록 boolean또는 삭제된 todo를 리턴해주면 좋을 것 같습니다.
 
+ allDeleteTag의 리턴타입을 boolean으로 주고 태그 삭제 결과를 반환하면 좋을 것 같습니다.
