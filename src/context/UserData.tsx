import { createContext, useContext } from "react";
import { useAsyncData } from "../hooks/useAsyncData";
import { React$Node } from "../utils";

interface UserInfo {
  first: string;
  last: string;
  email: string;
}

interface UserDataState {
  userInfo?: UserInfo;
  loading: boolean;
}

const UserData = createContext<null | UserDataState>(null);
const UserDataRefresh = createContext<null | (() => Promise<void>)>(null);

const initialUserDataState: UserDataState = {
  userInfo: undefined,
  loading: true,
};

export const UserDataProvider = ({
  children,
}: {
  children: React$Node;
}): React$Node => {
  const { data, loading, refetch } = useAsyncData(async () => {
    // return await fakeAsyncFetchDataFunction();
    return {
      first: "josh",
      last: "lane",
      email: "joshdlane22@gmail.com",
    };
  }, []);
  return (
    <UserData.Provider value={{ userInfo: data, loading }}>
      <UserDataRefresh.Provider value={refetch}>
        {children}
      </UserDataRefresh.Provider>
    </UserData.Provider>
  );
};

export const useUserData = (): UserDataState => {
  const content = useContext(UserData);

  if (content === null) {
    console.warn(
      "[useUserData]: `useUserData` was not used with `UserDataProvider`. " +
        "`useUserData` should only be in components are a descendent of `UserDataProvider`"
    );
    return initialUserDataState;
  }
  return content;
};
export const useUserDataRefresh = (): (() => Promise<void>) => {
  const refresh = useContext(UserDataRefresh);
  if (refresh !== null) return refresh;

  console.warn(
    "[useUserDataRefresh]",
    "WARNING: useUserDataRefresh is not being used with UserDataProvider"
  );
  return async () => {};
};
