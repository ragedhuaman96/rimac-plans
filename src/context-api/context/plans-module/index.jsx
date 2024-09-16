import { createContext, useContext } from "react";
import { usePlansReducer } from "../../reducer/plans-module";
import { getAllData, resetAllData, setSelectedPlan, setTypePlan } from "../../actions/plans-module";

const PlansContext = createContext();

export function PlansProvider({ children }) {
  const [state, dispatch] = usePlansReducer();

  const actions = {
    setTypePlan: (data) => dispatch(setTypePlan(data)),
    getAllData: (data) => getAllData(data, dispatch),
    setSelectedPlan: (data) => dispatch(setSelectedPlan(data)),
    resetData: ()=> dispatch(resetAllData()),
  };

  return (
    <PlansContext.Provider value={{ ...state, ...actions }}>
      {children}
    </PlansContext.Provider>
  );
}

export const usePlans = () => {
  const context = useContext(PlansContext);
  if (!context) {
    throw new Error("useExamen must be used within a ExamProvider");
  }
  return context;
};

export default PlansContext;
