## Actions

Actions are similar to mutations, the differences being that:

Instead of mutating the state, actions commit mutations.
Actions can contain arbitrary asynchronous operations.

## Mutations

The only way to actually change state in a Vuex store is by committing a mutation. Vuex mutations are very similar to events: each mutation has a string type and a handler. The handler function is where we perform actual state modifications, and it will receive the state as the first argument

## Getters

Sometimes we may need to compute derived state based on store state, for example filtering through a list of items and counting them
