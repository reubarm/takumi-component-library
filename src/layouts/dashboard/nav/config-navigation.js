import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: icon('ic_user'),
  file: icon('ic_file'),
  folder: icon('ic_folder'),
  external: icon('ic_external'),
};

const root = '';

const navConfig = [
  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'takumi',
    items: [
      // USER
      {
        title: 'Takumi Components',
        path: root,
        icon: ICONS.user,
        children: [
          { title: 'Follower Data', path: '/takumi/followers' },
          { title: 'Finance Buttons', path: '/takumi/finance-buttons' },
          { title: 'User List Item', path: '/takumi/user-item' },
        ],
      },
    ],
  },
  {
    subheader: 'theming',
    items: [
      // USER
      {
        title: 'Brand Guidelines',
        path: root,
        icon: ICONS.user,
        children: [
          { title: 'colors', path: '/foundation/colors' },
          { title: 'typography', path: '/foundation/typography' },
          { title: 'shadows', path: '/foundation/shadows' },
          { title: 'grid', path: '/foundation/grid' },
          { title: 'icons', path: '/foundation/icons' },
        ],
      },
    ],
  },
  {
    subheader: 'Material UI',
    items: [
      // E-COMMERCE
      {
        title: 'MUI Components',
        path: root,
        icon: ICONS.file,
        children: [
          { title: 'accordion', path: '/mui/accordion' },
          { title: 'alert', path: '/mui/alert' },
          { title: 'autocomplete', path: '/mui/autocomplete' },
          { title: 'avatar', path: '/mui/avatar' },
          { title: 'badge', path: '/mui/badge' },
          { title: 'breadcrumbs', path: '/mui/breadcrumbs' },
          { title: 'buttons', path: '/mui/buttons' },
          { title: 'checkbox', path: '/mui/checkbox' },
          { title: 'chip', path: '/mui/chip' },
          { title: 'data-grid', path: '/mui/data-grid' },
          { title: 'dialog', path: '/mui/dialog' },
          { title: 'list', path: '/mui/list' },
          { title: 'menu', path: '/mui/menu' },
          { title: 'pagination', path: '/mui/pagination' },
          { title: 'pickers', path: '/mui/pickers' },
          { title: 'popover', path: '/mui/popover' },
          { title: 'progress', path: '/mui/progress' },
          { title: 'radio-button', path: '/mui/radio-button' },
          { title: 'rating', path: '/mui/rating' },
          { title: 'slider', path: '/mui/slider' },
          { title: 'stepper', path: '/mui/stepper' },
          { title: 'switch', path: '/mui/switch' },
          { title: 'table', path: '/mui/table' },
          { title: 'tabs', path: '/mui/tabs' },
          { title: 'textfield', path: '/mui/textfield' },
          { title: 'timeline', path: '/mui/timeline' },
          { title: 'tooltip', path: '/mui/tooltip' },
          { title: 'transfer-list', path: '/mui/transfer-list' },
          { title: 'tree-view', path: '/mui/tree-view' },
        ],
      },

      // INVOICE
      {
        title: 'Extra Components',
        path: root,
        icon: ICONS.folder,
        children: [
          { title: 'chart', path: '/extra/chart' },
          { title: 'map', path: '/extra/map' },
          { title: 'editor', path: '/extra/editor' },
          { title: 'copy to clipboard', path: '/extra/copy-to-clipboard' },
          { title: 'upload', path: '/extra/upload' },
          { title: 'carousel', path: '/extra/carousel' },
          { title: 'multi language', path: '/extra/multi-language' },
          { title: 'animate', path: '/extra/animate' },
          { title: 'mega menu', path: '/extra/mega-menu' },
          { title: 'form validation', path: '/extra/form-validation' },
          { title: 'lightbox', path: '/extra/lightbox' },
          { title: 'image', path: '/extra/image' },
          { title: 'label', path: '/extra/label' },
          { title: 'scroll', path: '/extra/scroll' },
          { title: 'snackbar', path: '/extra/snackbar' },
          { title: 'text max line', path: '/extra/text-max-line' },
          { title: 'navigation bar', path: '/extra/navigation-bar' },
          { title: 'organization chart', path: '/extra/organization-chart' },
          { title: 'markdown', path: '/extra/markdown' },
        ],
      },
    ],
  },
  {
    subheader: 'Storybook',
    items: [
      {
        title: 'Storybook',
        path: 'http://localhost:6006/?path=/docs/example-introduction--docs',
        icon: ICONS.external,
      },
    ],
  },
];

export default navConfig;
