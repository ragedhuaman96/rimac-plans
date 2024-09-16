import { useReducer } from "react";
import { DATA_ERROR, DATA_REQUEST, DATA_SUCCESS, PLANS_SUCCESS, RESET_DATA, SET_SELECTED_PLAN, SET_TYPE_PLAN, USER_SUCCESS } from "../../type/plans-module";

const initialState = {
    typePlan: 0,
    user: null,
    plans: [],
    plansForMe: [],
    plansForOther: [],
    status: {
        loading: false,
        success: false,
        error: null
    },
    planSelected: {}
};

const PlansReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPE_PLAN:
            return {
                ...state,
                typePlan: action.data,
            };
        case DATA_REQUEST:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: true
                }
            };
        case USER_SUCCESS:
            return {
                ...state,
                user: action.data
            };
        case PLANS_SUCCESS:
            return {
                ...state,
                plans: action.data
            };
        case DATA_ERROR:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: false,
                }
            };
        case DATA_SUCCESS:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: false,
                    success: true
                }
            };
        case SET_SELECTED_PLAN:
            return {
                ...state,
                planSelected: action.data
            };
        case RESET_DATA:
            return initialState;
        default:
            return state;
    }
};
export const usePlansReducer = () => {
    return useReducer(PlansReducer, initialState);
};
