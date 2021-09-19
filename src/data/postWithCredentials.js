import firebase from 'firebase/app';

export const postWithCredentials = async (url, bodyData) => {
  const user = firebase.auth().currentUser;

  if (!user) {
    console.log("Error!");
    return;
  }
  
  const response = await fetch(url, {
    method: 'post',
    headers: {
      AuthToken: await user.getIdToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });

  return response;
}
