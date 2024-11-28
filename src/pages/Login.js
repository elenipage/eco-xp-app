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
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  function handleLogin() {
    setIsLoading(true);
    setLoadingProgress(0.5);
    fetchUserByID(2)
      .then((fetchedUser) => {
        setUser(fetchedUser);
        setXp(fetchedUser.xp);
        setLoadingProgress(1);
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

  if (isLoading) return <Loader loadingProgress={loadingProgress} />;

  return <LoginForm handleLogin={handleLogin} />;
}
