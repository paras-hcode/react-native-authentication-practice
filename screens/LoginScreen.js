import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from "../util/auth";
import { Alert, StyleSheet, View } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [loader, setLoader] = useState(false);
  const AuthCtx = useContext(AuthContext);

  const singUpHandler = async ({ email, password }) => {
    setLoader(true);
    try {
      const token = await loginUser({ email, password });
      AuthCtx.authenticate(token);
    } catch (e) {
      Alert.alert("Auth failed", "Auth failed");
      setLoader(false);
    }
  };

  if (loader) {
    return <LoadingOverlay message="creating User..." />;
  }
  return <AuthContent isLogin onAuthenticate={singUpHandler} />;
}

export default LoginScreen;
