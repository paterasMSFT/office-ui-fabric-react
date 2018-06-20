// tslint:disable:no-any
import * as React from 'react';
import { App as AppBase, IAppDefinition, IAppProps } from '@uifabric/example-app-base';

export const AppDefinition: IAppDefinition = {
  appTitle: 'Fabric - React',

  testPages: [],
  examplePages: [
    {
      links: [
        {
          component: require<any>('../components/CollapsibleSection/CollapsibleSectionPage').CollapsibleSectionPage,
          key: 'CollapsibleSection',
          name: 'CollapsibleSection',
          url: '#/examples/collapsiblesection'
        },
        {
          component: require<any>('../components/Chiclet/ChicletPage').ChicletPage,
          key: 'Chiclet',
          name: 'Chiclet',
          url: '#/examples/chiclet'
        },
        {
          component: require<any>('../components/Card/CardPage').CardPage,
          key: 'DashboardCard',
          name: 'DashboardCard',
          url: '#/examples/Card'
        },
        {
          component: require<any>('../components/FolderCover/FolderCoverPage').FolderCoverPage,
          key: 'FolderCover',
          name: 'FolderCover',
          url: '#/examples/foldercover'
        },
        {
          component: require<any>('../components/Form/FormPage').FormPage,
          key: 'Form',
          name: 'Form',
          url: '#/examples/form'
        },
        {
          component: require<any>('../components/FileTypeIcon/FileTypeIconPage').FileTypeIconPage,
          key: 'FileTypeIcon',
          name: 'FileTypeIcon',
          url: '#/examples/filetypeicon'
        },
        {
          component: require<any>('../components/LayoutGroup/LayoutGroupPage').LayoutGroupPage,
          key: 'LayoutGroup',
          name: 'LayoutGroup',
          url: '#/examples/layoutgroup'
        },
        {
          component: require<any>('../components/signals/SignalsPage').SignalsPage,
          key: 'Signals',
          name: 'Signals',
          url: '#/examples/signals'
        },
        {
          component: require<any>('../components/Tile/TilePage').TilePage,
          key: 'Tile',
          name: 'Tile',
          url: '#/examples/tile'
        },
        {
          component: require<any>('../components/TilesList/TilesListPage').TilesListPage,
          key: 'TilesList',
          name: 'TilesList',
          url: '#/examples/tileslist'
        },
        {
          component: require<any>('../components/Shimmer/ShimmerPage').ShimmerPage,
          key: 'Shimmer',
          name: 'Shimmer',
          url: '#/examples/shimmer'
        },
        {
          component: require<any>('../components/VirtualizedList/VirtualizedListPage').VirtualizedListPage,
          key: 'VirtualizedList',
          name: 'VirtualizedList',
          url: '#/examples/virtualizedlist'
        },
        {
          component: require<any>('../components/StaticList/StaticListPage').StaticListPage,
          key: 'StaticList',
          name: 'StaticList',
          url: '#/examples/staticlist'
        },
        {
          component: require<any>('../components/Nav/NavPage').NavPage,
          key: 'Nav',
          name: 'Nav',
          url: '#/examples/nav'
        },
        {
          component: require<any>('../components/fluent/theme/FluentThemePage').FluentThemePage,
          key: 'FluentColorTheme',
          name: 'Fluent Color Theme',
          url: '#/examples/fluent-color-theme'
        },
        {
          component: require<any>('../components/fluent/styles/FluentStylesPage').FluentStylesPage,
          key: 'FluentStyles',
          name: 'Fluent Component Styles',
          url: '#/examples/fluent-styles'
        }
      ]
    }
  ],
  headerLinks: [
    {
      name: 'Getting started',
      url: '#/'
    },
    {
      name: 'Fabric',
      url: 'http://dev.office.com/fabric'
    },
    {
      name: 'Github',
      url: 'http://www.github.com/officedev'
    }
  ]
};

export const App = (props: IAppProps) => <AppBase appDefinition={AppDefinition} {...props} />;
