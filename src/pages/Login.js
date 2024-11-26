import { useEffect, useState } from "react";
import BaseLayout from "../components/BaseLayout";
import StandardButton from "../components/StandardButton";
import { useUser } from "../context/user-context";
import { useXp } from "../context/Xp-context";
import { fetchLoggedItemsById, fetchUserByID } from "../../utils/api";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { Loader } from "../components/Loader";
import { streakData } from "../components/data/streakData";
import { LoginForm } from "../components/LoginForm";

export function LoginPage() {
  const { user, setUser } = useUser();
  const { setXp } = useXp();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true)

  function handleLogin() {
    setIsLoading(true)
    fetchUserByID(2)
      .then((fetchedUser) => {
        setUser(fetchedUser);
        setXp(fetchedUser.xp);
        return fetchedUser;
      })
      .then(()=> {
        navigation.navigate("Main")
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }

  useEffect(() => {
    setIsLoading(true)
    if (user) {
      navigation.navigate("Main");
    }
    setIsLoading(false)
  }, []);

  return (
    <BaseLayout>
      <LoginForm handleLogin={handleLogin} />
    </BaseLayout>
  );
}
