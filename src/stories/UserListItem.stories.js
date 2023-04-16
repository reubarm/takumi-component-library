import { UserListItem } from './UserListItem';

const black40 = '#A7A9AC';

export default {
  title: 'Example/UserListItem',
  component: UserListItem,
  tags: ['autodocs'],
  argTypes: {
    fullname: {
      control: 'text',
    },
    email: {
      control: 'text',
    },
  },
};

export const TestUser = {
  args: {
    photo: '/img/john.jpeg',
    fullname: 'John Appleseed',
    engagement: '3.9%',
    instagram: 'johnny',
    tiktok: 'appleseed123',
    email: '12b3314e-c734-4a34-9696-a4be9ed3c9b5@development.takumi.com',
    region: '/assets/icons/flags/ic_flag_us.svg',
  },
};
