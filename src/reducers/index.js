function rootReducer(state = {}, action) {
    return {
        init: ((state = true, action) => {
	    return state;
	})(state.init, action),
    }
}

/** Samma som ovan men använder combineReducers istället
 * const rootReducer = combineReducers({
 *     init: initReducer,
 * });
 */

export default rootReducer;
