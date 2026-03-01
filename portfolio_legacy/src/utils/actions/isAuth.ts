const isAuth = (headers: any, env: string | undefined) =>
  headers.get('Authorization') === `Bearer ${env}`;

export { isAuth };
