import { signOut, getSession } from "next-auth/react";

import { buildFetchOptions, buildAuthOptions } from "./request";
const apiGet = async (url) => {
  const session = await getSession();
  const options = buildFetchOptions("GET", session, {});
  const response = await fetch(url, options);
  const body = await response.json();
  if (!response.ok) {
    await UnauthorizedHandleResponse(response, body);
  }
  return body;
};
const apiAuthPost = async (url, credentials, body) => {
  const options = buildAuthOptions(credentials, body);
  const response = await fetch(url, options);
  if (!response.ok) {
    const body = await response.json();
    throw new Error(body.message);
  }

  const data = await response.json();
  return data;
};

const UnauthorizedHandleResponse = async (response, body) => {
  if (response.status == 401 || body.error == "invalid_token") {
    await signOut({ callbackUrl: "/" });
  }

  if (response.status != 401) {
    throw new Error(body.message);
  }
};

const request = {
  apiGet,
  apiAuthPost,
};

export default request;
