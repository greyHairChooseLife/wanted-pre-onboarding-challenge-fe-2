//interface Tag {
//    id: number;
//    content: string;
//}
//
//interface Todo {
//    id: number;
//    content: string;
//    isDone: boolean;
//    category?: string[];
//    tags?: Tag[];
//}
//
//let TodoList: Todo[];
//
////할 일 추가(내용 필수)
//const createTodo = (content: string): void => {};
////모든 할 일 조회(id 기반으로 특정 할 일 조회)
//const readTodo = (id: number): void => {}
////update(id 제외한 모든 속성 수정, 특정 할 일의 특정 태그 수정 가능)
//const updateTodo = (id: number, tags: [number, string]): void => {};
////delete(id기반 특정 할 일 삭제 가능, 모든 할 일, 특정 할 일의 특정 태그나 모든 태그 제거 가능)
//const deleteTodo = (id: number,tags: [number, string]): void => {};
//const allDeleteTag = (id: number) => {};
//const allDeleteContent = (id: number) => {};
