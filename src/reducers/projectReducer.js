const initState = {
  projects: [
    { id: 1, title: 'Eat the mushrooms', content: 'blah blah blah' },
    { id: 2, title: 'Collect all gold coins', content: 'blah blah blah' },
    { id: 3, title: 'Ninja Party!!!', content: 'blah blah blah' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE':
      console.log('created project: ', action.payload);
      return state;
    case 'CREATE PROJECT ERR':
      console.log('project err: ', action.payload);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
