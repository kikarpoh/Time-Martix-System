import React, { createContext, useReducer } from "react";

//! AppContext Type
type AppContext = {
  IsSidebarEnable: boolean;
  SidebarHeight: string;
  IsDarkModeEnable: boolean;
};

//! Reducer Action Type
type Action =
  | { type: "Toggle_Sidebar_Open" }
  | { type: "Toggle_Sidebar_Close" }
  | { type: "Toggle_DarkMode" };

//! AppContext Provider Function Props Type

type AppContextProviderPropsType = {
  children: React.ReactNode | JSX.Element | JSX.Element[];
};
//! AppContext Preload State
const preloadState: AppContext = {
  IsSidebarEnable: false,
  SidebarHeight: "250px",
  IsDarkModeEnable: false,
};

//! AppContext create!
const AppContext = createContext<{
  state: AppContext;
  dispatch: React.Dispatch<Action>;
}>({
  state: preloadState,
  dispatch: () => null,
});

//! Reducer Function
const AppReducer = (state: AppContext, action: Action) => {
  switch (action.type) {
    case "Toggle_Sidebar_Open":
      return {
        ...state,
        IsSidebarEnable: true,
        SidebarHeight: "250px",
      };
    case "Toggle_Sidebar_Close":
      return {
        ...state,
        IsSidebarEnable: false,
        SidebarHeight: "88px",
      };
    case "Toggle_DarkMode":
      return {
        ...state,
        IsDarkModeEnable: !state.IsDarkModeEnable,
      };
    default:
      return state;
  }
};

//! App Context Provider
export const AppContextProvider: React.FC<AppContextProviderPropsType> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AppReducer, preloadState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
