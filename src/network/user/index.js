import firebase from "../../firebase/config";
import {firestore} from '../../firebase/config';

export const AddUser = async (firstname, lastname, id, photo, phoneno,gender) => {
  try {
    return await firebase
      .database()
      .ref("users/" + id).push({
        firstname: firstname,
        lastname: lastname,
        id: id,
        photo: photo,
        phoneno: phoneno,
        gender:gender
      })
      // .set({
      //   firstname: firstname,
      //   lastname: lastname,
      //   id: id,
      //   photo: photo,
      //   phoneno: phoneno,
      //   gender:gender
      // });
  } catch (error) {
    return error;
  }
};

export const UpdateUser = async (id, user) => {
  try {
    return await firebase
      .database()
      .ref("users/" + id)
      .update({
        firstname: user.firstname,
        lastname: user.lastname,
        photo: user.photo,
        phoneno: user.phoneno,
        gender:user.gender
      });
  } catch (error) {
    return error;
  }
};

export const UpdateUserStore = async (id, user) => {
  try {
    return await firebase.firestore().collection('users').doc().update({
        firstname: user.firstname,
        lastname: user.lastname,
        photo: user.photo,
        id:id,
        phoneno: user.phoneno,
        gender:user.gender
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
};



export const AddUserStore = async (firstname, lastname, id, photo, phoneno,gender) =>{
  try {
    return await firestore.collection('users')
      .add({
        firstname: firstname,
        lastname: lastname,
        id: id,
        photo: photo,
        phoneno: phoneno,
        gender:gender
      })

      // .database()
      // .ref("users/" + id).push({
      //   firstname: firstname,
      //   lastname: lastname,
      //   id: id,
      //   photo: photo,
      //   phoneno: phoneno,
      //   gender:gender
      // })
      // .set({
      //   firstname: firstname,
      //   lastname: lastname,
      //   id: id,
      //   photo: photo,
      //   phoneno: phoneno,
      //   gender:gender
      // });
  } catch (error) {
    return error;
  }
}