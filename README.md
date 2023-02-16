## 저는

- 청주에서 독학합니다.(greyhairchooselife@gmail.com)
- 짧은 코스지만 이런 기회는 거의 처음이라.. 무사히 완주할 수 있겠죠? 같이 힘 내요!!

## 이 프로젝트는

- 원티드 프리온보딩 챌린지 프론트앤드, 3차과제 
- 설계된 모델링을 따라 구현 해 보기
- 모델링 피드백

## 해설

#### 1.
왜?: 타입이 정의되지 않았다.
어떻게?: 안내 된 것 처럼 interface를 정의하면 된다. 아래의 users 변수의 속성을 보고 똑같이 만들어 준다.

#### 2.
왜?: User 인터페이스에 속하는 요소와 Admin 인터페이스에 속하는 요소 중 어느 것이든 허용하는 타입이 필요하다.
어떻게? persons의 요소를 보면 서로 다른 모양의 객체가 들어있다. 그 객체들은 코드 상단에 정의 된 2가지 인터페이스와 걸맞기 때문에, 그 둘을 가지고 union 타입을 정의 해 준다.

#### 3.
왜?: 공통되지 않은 속성에 접근했다.(유니언 타입 변수를 사용할 땐 멤버들의 공통된 속성에만 접근 가능하다.)
어떻게? 인터페이스를 구분하기 좋은 (props) in (object) 문법을 사용 해 narrowing.

#### 4.
왜? 사용자 정의 타입가드를 만들면서 type predicate를 빼먹었다.
어떻게? 타입가드를 직접 만들어 쓰려면 type predicate라는 리턴 타입을 반드시 정의 해 줘야한다. [parameter] is [type]와 같은 형태다. 구문 안에서는 boolean을 리턴 해 주면 된다.(참이면 해당 타입이 맞고, 아니면 아니다.)

#### 5.
왜? 함수를 호출하는데, 그 함수의 파라미터가 속한 인터페이스의 속성 중 일부분만 가진 인자를 쓰고싶어한다. 
어떻게? 유틸리티 타입의 개념을 아는지 묻는 문제. Required<>, Partial<> 두 가지는 상당히 자주 쓰일 듯 하다.

#### 6.
질문: `type` field is not allowed in the `criteria` field. 안내사항에 이 문장 도대체 무슨 뜻인가요?
>> 타입 추론을 활용해서 풀라는 말이었다. 유니온 타입으로 Partial<type> 두개 합쳐주면 간단하고, 컴파일해서 실행 해봐도 잘 동작하는데 정답 아닌게 이상했다. 그리고 암만 봐도 overload 없는데 에러 메시지가 이상하다 싶었는데. 답안 살짝 켰더니 바로 오버로드 작성해서 푼 것 보고 안내사항 마지막 문장의 의미를 알게 됐다.
왜? 왜라기 보다는 특정 파라미터에 관하여 타입 선언 말고 overload 활용해서 타입가드 해 보라는 문제.
어떻게? overload를 규칙에 맞게 만들어준다. 

#### 7. (FAIL)
왜? 스왑 함수 구현하는데 필요한 적절한 타입 넣어주기.
어떻게? 

#### 8.
왜? 유틸리티 타입 구현 문제
어떻게? Omit 유틸리티 타입 활용해서 쓸데없는거 빼고, 필요한거 추가해서 & 로 함쳐줌. 

#### 9. (FAIL)
왜? 두개로 나뉜 타입 하나로 합쳐봐라
어떻게? 

#### 10. (FAIL)
왜? 
어떻게? 
