import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Props {
	state: InitialState;
	action?: PayloadAction;
}
export interface InitialState {
	isNavOpen: boolean;
	isThemeDark: boolean;
	isInfoPanelOpen: boolean;
}

const initialState: InitialState = {
	isNavOpen: false,
	isThemeDark: false,
	isInfoPanelOpen: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleNavbar(state) {
			state.isNavOpen = !state.isNavOpen;
		},
		toggleTheme(state) {
			state.isThemeDark = !state.isThemeDark;
		},

		toggleInfoPanel(state) {
			state.isInfoPanelOpen = !state.isInfoPanelOpen;
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
