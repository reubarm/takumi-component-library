import { Suspense, lazy } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------


// MAIN
export const Page500 = Loadable(lazy(() => import('../pages/Page500')));
export const Page403 = Loadable(lazy(() => import('../pages/Page403')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));

// DEMO COMPONENTS
// ----------------------------------------------------------------------

export const ComponentsOverviewPage = Loadable(
  lazy(() => import('../pages/components/ComponentsOverviewPage'))
);

// TAKUMI
export const Followers = Loadable(
  lazy(() => import('../pages/components/takumi/Followers'))
);
export const FinanceApprovalButtons = Loadable(
  lazy(() => import('../pages/components/takumi/FinanceApprovalButtons'))
);

export const UserListItem = Loadable(
  lazy(() => import('../pages/components/takumi/UserListItem'))
);

  // FOUNDATION
export const FoundationColorsPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationColorsPage'))
);
export const FoundationTypographyPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationTypographyPage'))
);
export const FoundationShadowsPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationShadowsPage'))
);
export const FoundationGridPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationGridPage'))
);
export const FoundationIconsPage = Loadable(
  lazy(() => import('../pages/components/foundation/FoundationIconsPage'))
);

// MUI COMPONENTS
export const MUIAccordionPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIAccordionPage'))
);
export const MUIAlertPage = Loadable(lazy(() => import('../pages/components/mui/MUIAlertPage')));
export const MUIAutocompletePage = Loadable(
  lazy(() => import('../pages/components/mui/MUIAutocompletePage'))
);
export const MUIAvatarPage = Loadable(lazy(() => import('../pages/components/mui/MUIAvatarPage')));
export const MUIBadgePage = Loadable(lazy(() => import('../pages/components/mui/MUIBadgePage')));
export const MUIBreadcrumbsPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIBreadcrumbsPage'))
);
export const MUIButtonsPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIButtonsPage'))
);
export const MUICheckboxPage = Loadable(
  lazy(() => import('../pages/components/mui/MUICheckboxPage'))
);
export const MUIChipPage = Loadable(lazy(() => import('../pages/components/mui/MUIChipPage')));
export const MUIDataGridPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIDataGridPage'))
);
export const MUIDialogPage = Loadable(lazy(() => import('../pages/components/mui/MUIDialogPage')));
export const MUIListPage = Loadable(lazy(() => import('../pages/components/mui/MUIListPage')));
export const MUIMenuPage = Loadable(lazy(() => import('../pages/components/mui/MUIMenuPage')));
export const MUIPaginationPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIPaginationPage'))
);
export const MUIPickersPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIPickersPage'))
);
export const MUIPopoverPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIPopoverPage'))
);
export const MUIProgressPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIProgressPage'))
);
export const MUIRadioButtonsPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIRadioButtonsPage'))
);
export const MUIRatingPage = Loadable(lazy(() => import('../pages/components/mui/MUIRatingPage')));
export const MUISliderPage = Loadable(lazy(() => import('../pages/components/mui/MUISliderPage')));
export const MUIStepperPage = Loadable(
  lazy(() => import('../pages/components/mui/MUIStepperPage'))
);
export const MUISwitchPage = Loadable(lazy(() => import('../pages/components/mui/MUISwitchPage')));
export const MUITablePage = Loadable(lazy(() => import('../pages/components/mui/MUITablePage')));
export const MUITabsPage = Loadable(lazy(() => import('../pages/components/mui/MUITabsPage')));
export const MUITextFieldPage = Loadable(
  lazy(() => import('../pages/components/mui/MUITextFieldPage'))
);
export const MUITimelinePage = Loadable(
  lazy(() => import('../pages/components/mui/MUITimelinePage'))
);
export const MUITooltipPage = Loadable(
  lazy(() => import('../pages/components/mui/MUITooltipPage'))
);
export const MUITransferListPage = Loadable(
  lazy(() => import('../pages/components/mui/MUITransferListPage'))
);
export const MUITreesViewPage = Loadable(
  lazy(() => import('../pages/components/mui/MUITreesViewPage'))
);

// EXTRA
export const DemoAnimatePage = Loadable(
  lazy(() => import('../pages/components/extra/DemoAnimatePage'))
);
export const DemoCarouselsPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoCarouselsPage'))
);
export const DemoChartsPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoChartsPage'))
);
export const DemoCopyToClipboardPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoCopyToClipboardPage'))
);
export const DemoEditorPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoEditorPage'))
);
export const DemoFormValidationPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoFormValidationPage'))
);
export const DemoImagePage = Loadable(
  lazy(() => import('../pages/components/extra/DemoImagePage'))
);
export const DemoLabelPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoLabelPage'))
);
export const DemoLightboxPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoLightboxPage'))
);
export const DemoMapPage = Loadable(lazy(() => import('../pages/components/extra/DemoMapPage')));
export const DemoMegaMenuPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoMegaMenuPage'))
);
export const DemoMultiLanguagePage = Loadable(
  lazy(() => import('../pages/components/extra/DemoMultiLanguagePage'))
);
export const DemoNavigationBarPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoNavigationBarPage'))
);
export const DemoOrganizationalChartPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoOrganizationalChartPage'))
);
export const DemoScrollbarPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoScrollbarPage'))
);
export const DemoSnackbarPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoSnackbarPage'))
);
export const DemoTextMaxLinePage = Loadable(
  lazy(() => import('../pages/components/extra/DemoTextMaxLinePage'))
);
export const DemoUploadPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoUploadPage'))
);
export const DemoMarkdownPage = Loadable(
  lazy(() => import('../pages/components/extra/DemoMarkdownPage'))
);
