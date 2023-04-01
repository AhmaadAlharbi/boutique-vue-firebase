import { ref } from "vue";
import { projectAuth } from "../firebase/config";
import { projectFirestore } from "../firebase/config";
const error = ref("");
const isPending = ref(false);

const signup = async (email, password, displayName) => {
  error.value = null;
  isPending.value = true;
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    isPending.value = false;
    if (!res) {
      throw new Error("could not complete signup");
    }
    await res.user.updateProfile({ displayName });

    error.value = null;
    // Add the new user to the "users" collection in Firestore
    const newUser = {
      id: res.user.uid,
      name: displayName,
      email: email,
      shippingAddress: "",
    };
    await projectFirestore.collection("users").doc(res.user.uid).set(newUser);
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    isPending.value = false;
  }
};
const useSignup = () => {
  return { error, signup, isPending };
};
export default useSignup;
