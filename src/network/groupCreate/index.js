import firebase from '../../firebase/config';

// for update id
export const UpdateGroupCreated = async (id) => {
  try {
    return await firebase
      .database()
      .ref("groupDetails/" + id)
      .update({
        id:id
      });
  } catch (error) {
    return error;
  }
};


//create groupID, 
export const groupCreate = async (params) =>{
    // const params = {
    //     adminId:"sd7asdHD",
    //     createAt:"23-11-2020",
    //     groupImage:"data:64,sadHidh",
    //     id:"LkbdGDK7bJ",
    //     lastmessage:"new created!",
    //     memebers:{
    //         0:"sdsad",
    //         1:"asd",
    //     },
    //     name:"develppers2222"
    // }
  try {
    return await firebase
      .database()
      .ref('groupDetails/')
    //   .child(guestUserId)
      .push(params).key;
  } catch (error) {
    return error;
  }
}


export const addGroupIdUser = async (grpId,userId) =>{
    try {
      return await firebase.firestore().collection('users').doc(userId)
      .update({
          groups:[
            {groupId:grpId}
          ]
      })
        // .database()
        // .ref("users/" + id)
        // .update({
        //   firstname: user.firstname,
        //   lastname: user.lastname,
        //   photo: user.photo,
        //   phoneno: user.phoneno,
        //   gender:user.gender
        // });
    } catch (error) {
      return error;
    }

  
}


export const sendGroupChatMsg = async () =>{
  const params = {
    groupId:"LkbdGDK7bJ",
    message:"hey i m new to group",
    timestamp:"15:09",
    userId:"BRxdxIEADvginra"
  }
  try {
    return await firebase
    .database()
    .ref('groupMessages/'+params.groupId)
    .push(params);
  } catch (error) {
      return error;
  }
}
// firebase.database().ref('groupMessages/')

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

// export const recieverMsg = async (
//   msgValue,
//   currentUserId,
//   guestUserId,
//   img,
// ) => {
//   try {
//     return await firebase
//       .database()
//       .ref('messeges/' + guestUserId)
//       .child(currentUserId)
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
// };
