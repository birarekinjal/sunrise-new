import { ActionType } from "../action-types/index"

interface FetchAction {
    type: ActionType.FETCH_USERS,
    payload: any
}

export type Action = FetchAction ;