import { useEffect } from "react";
import { useUser } from "../context/user-context";
import { fetchFollowersByUserID } from "../../utils/api";
import { LoadingPage } from "./LoadingPage";
import { List } from "react-native-paper";
import { Avatar } from "react-native-paper";

export function Followers() {
  const { user } = useUser();
  const [followers, setFollowers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchFollowersByUserID(user.user_id).then((followers) => {
      setFollowers(followers);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <List.Section>
       {followers.map((follower) => {
        return <List.Item key={follower.follower_user_id} title={follower.username} left={() => <Avatar.Image
            size={40}
            source={{
              uri: follower.avatar_img_url,
            }}
          />}/>
       })}
    </List.Section>
  )
}
