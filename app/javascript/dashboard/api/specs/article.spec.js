import articlesAPI from '../helpCenter/articles';
import ApiClient from 'dashboard/api/helpCenter/portals';
import describeWithAPIMock from './apiSpecHelper';

describe('#PortalAPI', () => {
  it('creates correct instance', () => {
    expect(articlesAPI).toBeInstanceOf(ApiClient);
    expect(articlesAPI).toHaveProperty('get');
    expect(articlesAPI).toHaveProperty('show');
    expect(articlesAPI).toHaveProperty('create');
    expect(articlesAPI).toHaveProperty('update');
    expect(articlesAPI).toHaveProperty('delete');
    expect(articlesAPI).toHaveProperty('getArticles');
  });
  describeWithAPIMock('API calls', context => {
    it('#getArticles', () => {
      articlesAPI.getArticles({
        pageNumber: 1,
        portalSlug: 'room-rental',
        locale: 'en-US',
        status: 'published',
        author_id: '1',
      });
      expect(context.axiosMock.get).toHaveBeenCalledWith(
        '/api/v1/portals/room-rental/articles?page=1&locale=en-US&status=published&author_id=1'
      );
    });
  });
});
