import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Browse',
      href: getBlogPermalink(),
    },
    {
      text: 'Categories',
      href: '#',
    },
    {
      text: 'Resources',
      href: '#',
    },
    {
      text: 'Contribute',
      href: '#',
    },
    {
      text: 'About',
      href: '#',
    },
  ],
  actions: [{ text: 'Contribute', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Categories',
      links: [
        { text: 'Government and ', href: '#' },
        { text: 'Science', href: '#' },
        { text: 'Politics', href: '#' },
        { text: 'Surveillance', href: '#' },
        { text: 'Medicine', href: '#' },
        { text: 'Entertainment', href: '#' },
      ],
    },
    {
      title: 'Topics',
      links: [
        { text: 'Climate change', href: '#' },
        { text: 'UFO', href: '#' },
        { text: 'Moon landing', href: '#' },
        { text: '5G health risks', href: '#' },
        { text: 'Global elite control', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Media', href: '#' },
        { text: 'Research', href: '#' },
        { text: 'Map', href: '#' },
      ],
    },
    {
      title: 'Database',
      links: [
        { text: 'About', href: '#' },
        { text: 'Resources', href: '#' },
        { text: 'Contribute', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'API', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    🖖 Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="#"> echo</a> · All rights reserved.
  `,
};
