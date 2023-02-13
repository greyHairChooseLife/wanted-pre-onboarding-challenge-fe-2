interface Tag {
    id: number;
    content: string;
}

interface Todo {
    id: number;
    content: string;
    isDone: boolean;
    category?: string[];
    tags?: Tag[];
}

let TodoList: Todo[] = [];

//할 일 추가(내용 필수)
const createTodo = (content: string): void => {
	if(content.length === 0) throw Error('내용이 없습니다.');

	const lastId = [...TodoList].sort((a, b) => a.id - b.id).pop().id;	//	파라미터가 전달되지 않아 내부에서 구현 해 봤습니다.

	const newTodo = {
		id: (lastId + 1),
		content: content,
		isDone: false,
	}

	TodoList.push(newTodo);
};

//모든 할 일 조회(id 기반으로 특정 할 일 조회)
const readTodo = (id: number): void => {
	const selectedTodo = TodoList.find(e => e.id === id);

	if(!selectedTodo) throw Error('조건에 해당하는 todo가 없습니다.');

	//if(condition) console.log(TodoList);
	
	console.log(selectedTodo);
}

//update(id 제외한 모든 속성 수정, 특정 할 일의 특정 태그 수정 가능)
const updateTodo = (id: number, tags: [number, string]): void => {
	const selectedTodo = TodoList.find(e => e.id === id);

	if(!selectedTodo) throw Error('조건에 해당하는 todo가 없습니다.');

	const updatedTodo = {
		...selectedTodo,
		tags: [{id: tags[0], content: tags[1]}]
	};
	
	const selectedTodoIdx = TodoList.findIndex(e => e.id === id);
	TodoList.splice(selectedTodoIdx, 1, updatedTodo)
};

//delete(id기반 특정 할 일 삭제 가능, 모든 할 일, 특정 할 일의 특정 태그나 모든 태그 제거 가능)
const deleteTodo = (id: number,tags: [number, string]): void => {
	const selectedTodoIdx = TodoList.findIndex(e => e.id === id);

	if(selectedTodoIdx < 0) throw Error('조건에 해당하는 todo가 없습니다.');

	TodoList.splice(selectedTodoIdx, 1);

	//if(condition) TodoList.length = 0;
};

const allDeleteTag = (id: number) => {
	const selectedTodo = TodoList.find(e => e.id === id);

	if(!selectedTodo) throw Error('조건에 해당하는 todo가 없습니다.');

	const effectedTodo = selectedTodo;
	delete effectedTodo.tags;
};

const allDeleteContent = (id: number) => {
	// 함수명과 파라미터로 보아 컨텐츠를 모두 삭제한다는 것 같습니다만 요구사항에 없어 구현하지 않겠습니다.
};
