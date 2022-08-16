import {
  filterCampaigns, formatCampaigns, stripTrailingSlash
} from '../campaignHelper';
import campaigns from './campaignFixtures';

global.chatwootWebChannel = {
  workingHoursEnabled: false,
};
describe('#Campaigns Helper', () => {
  describe('stripTrailingSlash', () => {
    it('should return striped trailing slash if url with trailing slash is passed', () => {
      expect(
        stripTrailingSlash({ URL: 'https://ndovucloud.com/pricing//' })
      ).toBe('https://ndovucloud.com/pricing/');
    });
  });

  describe('formatCampaigns', () => {
    it('should return formatted campaigns if campaigns are passed', () => {
      expect(formatCampaigns({ campaigns })).toStrictEqual([
        {
          id: 1,
          timeOnPage: 3,
          triggerOnlyDuringBusinessHours: false,
          url: 'https://ndovucloud.com/pricing/',
        },
        {
          id: 2,
          triggerOnlyDuringBusinessHours: false,
          timeOnPage: 6,
          url: 'https://ndovucloud.com/contact/',
        },
      ]);
    });
  });
  describe('filterCampaigns', () => {
    it('should return filtered campaigns if formatted campaigns are passed', () => {
      expect(
        filterCampaigns({
          campaigns: [
            {
              id: 1,
              timeOnPage: 3,
              url: 'https://ndovucloud.com/pricing/',
              triggerOnlyDuringBusinessHours: false,
            },
            {
              id: 2,
              timeOnPage: 6,
              url: 'https://ndovucloud.com/contact/',
              triggerOnlyDuringBusinessHours: false,
            },
          ],
          currentURL: 'https://ndovucloud.com/contact//',
        })
      ).toStrictEqual([
        {
          id: 2,
          timeOnPage: 6,
          url: 'https://ndovucloud.com/contact/',
          triggerOnlyDuringBusinessHours: false,
        },
      ]);
    });
    it('should return filtered campaigns if formatted campaigns are passed and business hours enabled', () => {
      expect(
        filterCampaigns({
          campaigns: [
            {
              id: 1,
              timeOnPage: 3,
              url: 'https://ndovucloud.com/pricing/',
              triggerOnlyDuringBusinessHours: false,
            },
            {
              id: 2,
              timeOnPage: 6,
              url: 'https://ndovucloud.com/contact/',
              triggerOnlyDuringBusinessHours: true,
            },
          ],
          currentURL: 'https://ndovucloud.com/contact//',
          isInBusinessHours: true,
        })
      ).toStrictEqual([
        {
          id: 2,
          timeOnPage: 6,
          url: 'https://ndovucloud.com/contact/',
          triggerOnlyDuringBusinessHours: true,
        },
      ]);
    });
    it('should return empty campaigns if formatted campaigns are passed and business hours disabled', () => {
      expect(
        filterCampaigns({
          campaigns: [
            {
              id: 1,
              timeOnPage: 3,
              url: 'https://ndovucloud.com/pricing/',
              triggerOnlyDuringBusinessHours: true,
            },
            {
              id: 2,
              timeOnPage: 6,
              url: 'https://ndovucloud.com/contact/',
              triggerOnlyDuringBusinessHours: true,
            },
          ],
          currentURL: 'https://ndovucloud.com/contact//',
          isInBusinessHours: false,
        })
      ).toStrictEqual([]);
    });
  });
});
