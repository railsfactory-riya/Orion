const SignInReducer = (state = {
    email: "",
    password: ""
}, action) => {
    switch (action.type) {
      case "CHANGE_EMAIL":
          state = {
              ...state,
              changeEmail: action.payload
          };
          break;
      case "CHANGE_PASSWORD":
          state = {
              ...state,
              changePassword: action.payload
          };
          break;
    }
    return state;
};

export default SignInReducer;


// const postLogin = (values) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
//         reject({
//           '': 'Login failed!',
//           username: 'User does not exist',
//         });
//       } else if (values.password !== 'beatles') {
//         reject({
//           '': 'Login failed!',
//           password: 'Wrong password',
//         });
//       } else {
//         resolve(true);
//         alert('Successfully submitted!');
//         console.log(values);
//       }
//     });
//   });
// }
