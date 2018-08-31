import {configureHttp} from '../../app/util';
import {configureHttp as httpConfigure} from 'truefit-react-utils';

describe('Configure HTTP', () => {
  beforeAll(() => {
    configureHttp();
  });

  it('should invoke configureHttp from truefit-react-utils', () => {
    expect(httpConfigure).toHaveBeenCalled();
  });

  it('should evaluate to an object that provides a baseURL', () => {
    const argFunc = httpConfigure.mock.calls[0][0];
    const config = argFunc();

    expect(config).toContainKey('baseURL');
  });
});
