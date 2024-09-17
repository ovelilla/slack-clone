// Vendors
import { useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";

const UserButtonHook = () => {
  const data = useQuery(api.users.current);
  const isLoading = data === undefined;

  return { data, isLoading };
};

export { UserButtonHook };
