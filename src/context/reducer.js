export const TOGGLE_THEME = 'TOGGLE_THEME'
export const UPDATE_STATS = 'UPDATE_STATS'

export const reducer = (state, action) => {
	switch (action.type)
	{
		case UPDATE_STATS:
			return {...state, stats: action.payload}

		case TOGGLE_THEME:
			return {...state, theme: state.theme === "light" ? "dark" : "light"}

		default:
			return state
	}
};
