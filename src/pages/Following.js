import { useEffect } from "react";
import { useUser } from "../context/user-context";
import { fetchFollowingByUserID } from "../../utils/api";
import { LoadingPage } from "./LoadingPage";
import { List } from "react-native-paper";
import { Avatar } from "react-native-paper";

export function Following() {
  const { user } = useUser();
  const [following, setFollowing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchFollowingByUserID(user.user_id).then((following) => {
      setFollowing(following);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <List.Section>
       {following.map((follower) => {
        return <List.Item title={follower.username} left={() => <Avatar.Image
            size={40}
            source={{
              uri: follower.avatar_img_url,
            }}
          />}/>
       })}
    </List.Section>
  )
}
