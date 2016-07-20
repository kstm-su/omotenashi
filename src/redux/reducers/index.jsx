const initialState = {
	title: '時間割'
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'timetable': {
			return { title: '時間割' };
		}
		case 'eventlist': {
			return {title: 'イベント一覧'};
		}
		case 'course': {
			return {title: '授業情報'};
		}
		default:{
			return state;
		}
	}
}
