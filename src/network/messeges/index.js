import firebase from '../../firebase/config';


// export const groupSenderMsg = async (msgValue,currentUserId,groupId,img) =>{
//   try {
//     return await firebase
//       .database()
//       .ref('groupMessages/' + currentUserId)
//       .child(guestUserId)
//       .push({
//         messege: {
//           sender: currentUserId,
//           reciever: guestUserId,
//           msg: msgValue,
//           img: img,
//         },
//       });
//   } catch (error) {
//     return error;
//   }
// }

export const senderMsg = async (msgValue, currentUserId, guestUserId, img) => {
  try {
    return await firebase
      .database()
      .ref('messeges/' + currentUserId)
      .child(guestUserId)
      .push({
        messege: {
          sender: currentUserId,
          reciever: guestUserId,
          msg: msgValue,
          img: img,
        },
      });
  } catch (error) {
    return error;
  }
};

export const recieverMsg = async (
  msgValue,
  currentUserId,
  guestUserId,
  img,
) => {
  try {
    return await firebase
      .database()
      .ref('messeges/' + guestUserId)
      .child(currentUserId)
      .push({
        messege: {
          sender: currentUserId,
          reciever: guestUserId,
          msg: msgValue,
          img: img,
        },
      });
  } catch (error) {
    return error;
  }
};
