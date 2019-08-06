import * as React from 'react'
import {ActionType, createReducer, createStandardAction, getType, StateType} from "typesafe-actions";
import {Word} from "../components/Container";
import {combineReducers} from "redux";

const actions = {
    setData: createStandardAction('SETALL')<Word[]>(),
    deleteAll: createStandardAction('DELETEALL')(),
    deleteOnce: createStandardAction('DELETE_ONCE')<Word>(),
    addToKeyword: createStandardAction('ADD_TO_KEYWORDS')<Word>(),
};

type Actions = ActionType<typeof actions>;

export const Reducer = createReducer<Word[], Actions>([])
    .handleAction(actions.setData, (state, action) => action.payload)
    .handleAction(actions.deleteAll, () => []);

interface Data {
    data: StateType<typeof Reducer>;
}

export const reducer = combineReducers({
    data: Reducer,
});