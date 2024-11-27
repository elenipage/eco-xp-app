import { useEffect, useState } from "react";
import BaseLayout from "../components/BaseLayout";
import { useUser } from "../context/user-context";
import { useXp } from "../context/Xp-context";
import { fetchUserByID } from "../../utils/api";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { Loader } from "../components/Loader";
import { LoginForm } from "../components/LoginForm";

export function LoginPage() {
  const { user, setUser } = useUser();
  const { setXp } = useXp();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin() {
    setIsLoading(true);
    fetchUserByID(2)
      .then((fetchedUser) => {
        setUser(fetchedUser);
        setXp(fetchedUser.xp);
        setIsLoading(false);
        return fetchedUser;
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }

  useEffect(() => {
    if (user) {
      navigation.navigate("Main");
    }
  }, [isLoading]);

  if (isLoading) return <Loader />;

  return (
    <BaseLayout>
      <LoginForm handleLogin={handleLogin} />
    </BaseLayout>
  );
}
