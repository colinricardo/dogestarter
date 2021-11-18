import fetcher from "@/utils/fetcher";
import env from "@/config/environment";
import useSWR from "swr";

const { API } = env;

const MessageBlock = () => {
  const { data, error } = useSWR(`${API}/doge`, fetcher);
  if (error) return <div>Could not load message.</div>;
  if (!data) return <div>Loading message,,,</div>;
  return <div>Message from API: {data.message}</div>;
};

export default MessageBlock;
