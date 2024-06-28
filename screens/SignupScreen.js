import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const AuthCtx = useContext(AuthContext);
  const [loader, setLoader] = useState(false);

  const singUpHandler = async ({ email, password }) => {
    setLoader(true);
    try {
      const token = await createUser({ email, password });
      AuthCtx.authenticate(token);
    } catch (e) {
      Alert.alert("Auth failed", "Auth failed");
      console.log(e);
      setLoader(false);
    }
  };

  if (loader) {
    return <LoadingOverlay message="creating User..." />;
  }
  return <AuthContent onAuthenticate={singUpHandler} />;
}

export default SignupScreen;
