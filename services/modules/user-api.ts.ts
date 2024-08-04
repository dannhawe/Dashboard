import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import http from "../client";
import { DataResponse, LoginRequest } from "@/types/auth";

const LOGIN = "/admin/login";
const LOGOUT = "admin/logout";
const GET_ALL = "";

export const user = {
  login: (data: LoginRequest): Promise<any> => http.post(LOGIN, data),
  logout: (): Promise<any> => http.post(LOGOUT),
  getUserById: (userId: string): Promise<any> => http.get(GET_ALL, { userId }),
};

const userApi = {
  useLogin: (
    mutateOptions?: Omit<
      UseMutationOptions<DataResponse, Error, LoginRequest>,
      "useLogin"
    >,
  ) => {
    return useMutation({
      mutationFn: user.login,
      ...mutateOptions,
    });
  },

  useLogout: (
    mutateOptions?: Omit<UseMutationOptions<DataResponse, Error>, "useLogin">,
  ) => {
    return useMutation({
      mutationFn: user.logout,
      ...mutateOptions,
    });
  },
  getUserById: ({ userId }: { userId: string }) =>
    useQuery({
      queryKey: ["user", userId],
      queryFn: () => user.getUserById(userId),
    }),
};

export default userApi;
