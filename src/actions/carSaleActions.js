
  export const removeFeature = item => {
    // dispatch an action here to remove an item
    return { type: "DEL_FEATURE", payload: item };
  };

  export const buyItem = item => {
    // dipsatch an action here to add an item
    console.log("buyItem",item);
    return { type: "ADD_FEATURE", payload: item };
  };