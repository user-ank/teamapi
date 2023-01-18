// export const initialState = {
//     basket: [],
// };

// // Selector 
// // Fancy tarika for loop wala kaam aur mapping bbhi ho rha hai
// export const getBasketTotal = (basket) => basket.reduce((amount, item) => (item.price + amount), 0);


// const reducer = (state, action) => {
//     // console.log(action); // Click karane par console me dikh raha hai
//     switch (action.type) {      // Pushing items into basket
//         case 'ADD_TO_BASKET':
//             return {
//                 ...state,
//                 basket: [...state.basket, action.item],
//             };

//         default:
//             return state;
//     }
// };

// export default reducer;