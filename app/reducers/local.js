export function loadRepos(state={}, action){
  if (action.type === 'LISTAGEM'){
    state.repos = action.repos;
    return state;
  };
  if (action.type === 'DETAILREPO'){
    state.details = action.details;
    return state;
  };
  if (action.type === 'LOADING'){
    state.loading = action.value;
    return state;
  };
  return state;
}
