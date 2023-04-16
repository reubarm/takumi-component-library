import { FollowerData } from './FollowerData';

const black40 = '#A7A9AC';

export default {
  title: 'Example/FollowerData',
  component: FollowerData,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
    tooltip: {
      control: 'text',
    },
  },
};

export const Instagram = {
  args: {
    account: {followers: 123456789},
    tooltip: 'Instagram',
    color: black40,
    icon: 'mdi:instagram'
  },
};

export const TikTok = {
  args: {
    account: {followers: 30000},
    tooltip: 'TikTok',
    color: black40,
    icon: 'ic:baseline-tiktok',
  },
};

export const Engagement = {
  args: {
    engagement: '3.4%',
    tooltip: 'Engagement Rate',
    color: black40,
    icon: 'material-symbols:chart-data',
  },
};
