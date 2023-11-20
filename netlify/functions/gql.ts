import { stringifyVariables } from "@urql/core";

export default function handler() {
  return Response.json({
    body: stringifyVariables({ b: 2, a: 1 }),
  });
}

export const config = {
    path: '/api/gql',
};  