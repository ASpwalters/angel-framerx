import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://chosen-hydra.vidangel.com/graphql",
	cache: new InMemoryCache(),
});

export default client;
