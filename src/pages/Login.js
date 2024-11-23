import { useEffect, useState } from "react";
import BaseLayout from "../components/BaseLayout";
import StandardButton from "../components/StandardButton";
import { useUser } from "../context/user-context";
import { useXp } from "../context/Xp-context";
import { fetchUserByID } from "../../utils/api";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { Loader } from "../components/Loader";

export function LoginPage() {
  const { user, setUser } = useUser();
  const { setXp } = useXp();
  const navigation = useNavigation();

  function handleLogin() {
    fetchUserByID(1)
      .then((fetchedUser) => {
        setUser(fetchedUser);
        setXp(fetchedUser.xp);
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
  }, [user]);

  return (
    <BaseLayout>
      <Button onPress={handleLogin}>Login</Button>
    </BaseLayout>
  );
}
