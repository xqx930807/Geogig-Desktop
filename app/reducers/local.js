export function loadRepos(state={}, action){
  if (action.type === 'LISTAGEM'){
    let buildLayer = {
      repos:{
        repo: action.repos.repo.filter(e => !e.name.includes('.remote')),
        remote: action.repos.repo.filter(e => e.name.includes('.remote'))
      }
    };
    state.repos = buildLayer.repos;
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
  if (action.type === 'LOADING'){
    state.tansaction = action.response.Transaction;
    return state;
  };
  if (action.type === 'CURRENTDATA'){
    state.currentdata = action;
    return state;
  }
  return state;
}
