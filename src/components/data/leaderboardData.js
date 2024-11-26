import {
  fetchFollowingByUserID,
  fetchUsersByPostcode,
  fetchUsersByPostcodePrefix,
} from "../../../utils/api";

function followingData(user) {
  const userID = user.user_id;
  return fetchFollowingByUserID(userID).then((following) => {
    return following.map((followee) => {
      return {
        id: followee.follower_user_id,
        username: followee.username,
        avatarUrl: followee.avatar_img_url,
        xp: followee.xp,
      };
    });
  });
}

function postcodeData(user) {
  const postcode = user.postcode;
  return fetchUsersByPostcode(postcode).then((postcodeUsers) => {
    return postcodeUsers.map((user) => {
      return {
        id: user.user_id,
        username: user.username,
        avatarUrl: user.avatar_img_url,
        xp: user.xp,
      };
    });
  });
}

function areaData(user) {
  const postcode = user.postcode;
  const splitPostcode = postcode.split(" ");
  const prefix = splitPostcode[0].match(/[a-zA-Z]+/g);
  return fetchUsersByPostcodePrefix(prefix).then((prefixUsers) => {
    return prefixUsers.map((user) => {
      return {
        id: user.user_id,
        username: user.username,
        avatarUrl: user.avatar_img_url,
        xp: user.xp,
      };
    });
  });
}

export { followingData, postcodeData, areaData };
