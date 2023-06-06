export const userData = (initialState = {}, action:any) => {
    switch (action.type) {
      case "User":
        return {
          ...action.payload,
        };
      default:
        return initialState;
    }
  };
  