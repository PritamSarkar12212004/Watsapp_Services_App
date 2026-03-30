let ACCESS_TOKEN: string | null = null;

const Set_Access_Token = ({ token }: { token: string | null }) => {
  ACCESS_TOKEN = token;
};

const getAccessToken = () => ACCESS_TOKEN;
const removeAccessToken = () => {
  ACCESS_TOKEN = null;
  return true;
};

export { Set_Access_Token, getAccessToken, removeAccessToken };
