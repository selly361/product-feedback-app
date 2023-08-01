import { userArray } from "consts";

function findUser(username: string) {
  const selectedUser = userArray.find((user) => user.username === username);

  return selectedUser;
}

export { findUser };
