import ReactDom from 'react-dom';

describe('Index', () => {
  beforeAll(() => {
    jest.spyOn(ReactDom, 'render');

    // this is a bit of a hack, but it's needed here because jest obviously doesn't load the dom
    document.getElementById = jest.fn(() => document.createElement('div'));

    require('../app/index.js');
  });

  // tests
  it('should call render', () => {
    expect(ReactDom.render).toHaveBeenCalled();
  });

  it('should use the element with id app', () => {
    expect(document.getElementById).toHaveBeenCalled();
  });
});
