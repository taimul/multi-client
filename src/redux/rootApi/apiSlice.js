import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const BASE_URL_IMAGE = import.meta.env.VITE_IMAGE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders(headers) {
    const token = Cookies.get("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
  credentials: "include",
});

// Function to generate access token
const generateAccessToken = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user/generate-access-token`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    const data = await response.json();
    Cookies.set("accessToken", data.accessToken); // Save new token in cookies
    return data.accessToken;
  } catch (error) {
    console.error("Token refresh failed:", error);
    Cookies.remove("accessToken"); // Remove invalid token
    return null;
  }
};

const customBaseQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Token expired, try to refresh
    const newToken = await generateAccessToken();
    if (newToken) {
      // Retry the original request with the new token
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: customBaseQuery,
  tagTypes: ["User", "Address", "Product", "Order", "Category", "Ticket"],
  endpoints: () => ({}),
});
