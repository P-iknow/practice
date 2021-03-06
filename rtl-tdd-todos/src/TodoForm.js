import React, {useState, useCallback} from 'react';

function TodoForm(){
	const [value, setValue] = useState('');
	const onChange = useCallback(e => {
		setValue(e.target.value);
	}, []);
	return (
		<form >
			<input placeholder="할 일을 입력하세요." onChange={onChange} value={value} type="text"/>
			<button type="submit">등록</button>
		</form>
	);
}

export default TodoForm;
