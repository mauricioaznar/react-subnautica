import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { GlobalMessage } from "../../../types/global-message";

export const pushMessage = (message: GlobalMessage) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.PUSH_MESSAGE,
            payload: message,
        });
    };
};
