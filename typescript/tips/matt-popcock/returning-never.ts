const raise = (err: string): never => {
  throw new Error(err);
}

const redirect = (url: string): never => {
  return {} as never;
}

const Page = (props: {
  params: Record<string, string | undefined>
}) => {
  // const id = props.params.id ?? raise("id is required");
  const id = props.params.id ?? redirect("/");
}