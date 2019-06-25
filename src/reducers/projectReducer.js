const initState = {
  projects: [
    { id: 1, title: 'Eat the mushrooms', content: 'blah blah blah' },
    { id: 2, title: 'Collect all gold coins', content: 'blah blah blah' },
    { id: 3, title: 'Ninja Party!!!', content: 'blah blah blah' }
  ]
};

const projectReducer = (state = initState, action) => {
  if (action.type === 'CREATE') {
    console.log('created project: ', action.payload);
  }
  return state;
};

export default projectReducer;
