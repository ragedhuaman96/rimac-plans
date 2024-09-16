import { getPlansService, getUserInfoService } from "@/src/server/user";
import { DATA_ERROR, DATA_REQUEST, DATA_SUCCESS, PLANS_SUCCESS, RESET_DATA, SET_SELECTED_PLAN, SET_TYPE_PLAN, USER_SUCCESS } from "../../type/plans-module";
import { calculateAgeFromBirth } from "../../utils";

export const setTypePlan = (data) => ({ type: SET_TYPE_PLAN , data });

export const setSelectedPlan = (data) => ({ type: SET_SELECTED_PLAN , data });

export const getAllData = async (data, dispatch) => {
    dispatch({ type: RESET_DATA });
    dispatch({ type: DATA_REQUEST });

    try {
      const user = await getUserInfoService();
      let age = calculateAgeFromBirth(user.birthDay)
      user.age = age
      user.idNumber = data.idNumber;
      user.phone = data.phone
      dispatch({ type: USER_SUCCESS, data: user });
      const plans = await getPlansService()
      dispatch({ type: PLANS_SUCCESS, data: plans.list });
      dispatch({ type: DATA_SUCCESS })
      return true
    } catch (error) {
        dispatch({ type: DATA_ERROR, data: error });
    }
  };

  export const resetAllData = () => ({ type: RESET_DATA});
  export const returnPage = () => ({ type: RESET_DATA});
