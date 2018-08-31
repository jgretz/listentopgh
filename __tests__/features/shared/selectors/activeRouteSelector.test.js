import {activeRouteSelector} from '../../../../app/features/shared/selectors';

describe('Shared', () => {
  describe('Selectors', () => {
    describe('Active Route Selector', () => {
      const state = {
        router: {
          location: {
            pathname: '/',
          },
        },
      };

      it('should return pathname from redux router location', () => {
        const activeRoute = activeRouteSelector(state);

        expect(activeRoute).toBe(state.router.location.pathname);
      });
    });
  });
});
