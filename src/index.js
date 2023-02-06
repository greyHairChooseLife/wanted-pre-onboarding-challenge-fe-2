/**
 * 생성 된 todo객체들을 저장한다.
 *
 * interface {
 * 	doing: object[]
 * 	done: object[]
 * 	deleted: object[]
 * }
 *
 * @todo 수량 제한이 있어야 할 것 같다.
 * @todo 시간 제한도 두면 재밌을 것 같다.
 */
const todoBasket = {};

/**
 * 할 일과 관련 정보가 들어있는 주요 객체(class).
 * desc가 빈 문자열이면 저장하지 않고 alertRule함수를 실행한다.
 *
 * interface {
 * 	id: number
 * 	desc: string
 * 	isDone: boolean
 * 	category: string
 * 	tags?: string[]
 * }
 *
 * @todo tags처럼 배열 타입인 경우 개인적으로 옵셔널로 지정하기보단  빈 배열이라도 두는 것을 선호한다. 넣었다 뺏다 헷갈리는 것 보다 낫지 않나 해서. 질문 해 볼까어쩌까
 * @todo category는 그냥 문자열이 아니라 타입을  만들어서 사용하자.
 * @todo 고유한 id를 위해서 마지막 todo.index를 따로 저장하고 있으면 좋을 것 같다.
 * @todo todo 삭제 기능이 1.불가역적이거나, 2.보관하는 양이 너무 많지 않다면 읽을 수 있는 마지막(sorting) id의 뒤에 붙여주자.
 *
 * @see {@link isEmptyTodo}
 * @see {@link alertRule}
 */
class todo {}


/**
 * todo 생성자 함수로 클래스를 생성한다.
 * 
 * @param {todo} tags (required)
 *
 * @returns {void}
 *
 * @see {@link todoBasket}
 */
function createTodo() {}

/**
 * todoBasket에서 특정 id로 조회하거나, 모두 조회한다.
 * 
 * @param {number} todoId (optional) 값이 없는 경우 모두 조회
 *
 * @returns {todo[]}
 *
 * @see {@link todoBasket}
 * @see {@link isEmptyTodo}
 */
function readTodo() {}

/**
 * ID를 제외한 모든 속성을 수정 할 수 있다.
 * 특정 할 일의 특정 태그를 수정 할 수 있다.
 * 특정 할 일의 특정 태그를 삭제 할 수 있다.
 * 특정 할 일의 모든 태그를 삭제 할 수 있다.
 * todo.desc가 빈 문자열이면 저장하지 않고 alertRule함수를 실행한다.
 * 
 * @param {number} todoId (required)
 *
 * @returns {todo} 업데이트 된 내용(필요시 확인 용도)
 *
 * @see {@link todoBasket}
 * @see {@link isEmptyTodo}
 * @see {@link alertRule}
 */
function updateTodo() {}

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 
 * @param {number} todoId (optional) 주어지지 않는다면 모두 삭제한다.
 *
 * @returns {void}
 *
 */
function deleteTodo() {}


/**
 * 매개변수가 빈 값인지 확인
 *
 * @param {string} desc (required)
 *
 * @returns {boolean}
 *
 * @see {@link createTodo}
 * @see {@link updateTodo}
 */
function isEmptyTodo() {}

/**
 * 사용 방법이 틀린 경우 호출하여 사용 방법을 알려준다.
 *
 * @returns {void}
 */
function alertRule() {}
