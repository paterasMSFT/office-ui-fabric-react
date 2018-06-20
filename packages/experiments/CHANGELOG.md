# Change Log - @uifabric/experiments

This log was last generated on Tue, 19 Jun 2018 10:26:26 GMT and should not be manually modified.

## 6.6.0
Tue, 19 Jun 2018 10:26:26 GMT

### Minor changes

- Added Fluent Styles Page
- Update Fluent colors
- Update Fluent colors and theme

## 6.5.0
Mon, 18 Jun 2018 16:57:14 GMT

### Minor changes

- Dashboard Card Component for Admin Portals Dashboard which will be hosted inside react-grid-layout. 
- Add GridList component into the existing Dashboard Card Component

### Patches

- Add alias to CommandBar to final version
- Fix import mistakes

## 6.4.0
Fri, 08 Jun 2018 18:34:17 GMT

### Minor changes

- add style arg to customizable

## 6.3.0
Thu, 07 Jun 2018 16:35:34 GMT

### Minor changes

- Create CollapsibleSection component and createComponent utility.
- Tweaked the lint rules.

### Patches

- Code format changes

## 6.2.0
Tue, 05 Jun 2018 10:23:03 GMT

### Minor changes

- Experiment/Nav component: hide nav group header if the links under it are hidden
- ShimmerTile: Moves ShimmerTile to Tile component as it's only purpose is create a mock for a tile and itself alone never renders a Shimmer animation.

## 6.1.2
Tue, 05 Jun 2018 00:44:30 GMT

### Patches

- Added Prettier

## 6.1.1
Mon, 04 Jun 2018 10:16:13 GMT

### Patches

- Updating react typings.
- Fixed tests to be compatible with jest 23

## 6.1.0
Fri, 01 Jun 2018 10:18:43 GMT

### Minor changes

- Experiments/Nav component: display "show more" link only if there is atleast one hidden link
- Shimmer: Shimmer refactor to use new props and deprecate others. Build more examples of Shimmer use.

## 6.0.0
Wed, 30 May 2018 20:28:33 GMT

### Breaking changes

- Command Bar: Promoted to main office-ui-fabric-react package.
- Minimum React version is now 16.3.2.

## 5.44.0
Mon, 28 May 2018 10:23:24 GMT

### Minor changes

- Shimmer: Refactors and enhances Shimmer with more features.

## 5.43.0
Fri, 25 May 2018 21:30:43 GMT

### Minor changes

- Experiments/Nav component: Enable auto expand until the next manual expand disables the auto expand

## 5.42.0
Fri, 25 May 2018 16:53:46 GMT

### Minor changes

- Experiments/Nav component: Auto select/expand based on the selectedKey prop
- Keyboard support for the slim version of experiments/Nav component and added aria attributes

## 5.41.0
Tue, 22 May 2018 10:29:12 GMT

### Minor changes

- Implementation of the Chiclet component

## 5.40.0
Mon, 21 May 2018 10:29:16 GMT

### Minor changes

- Screen reader support for the toggle nav menu and made the toggle nav menu customizable through props

## 5.39.0
Wed, 16 May 2018 00:05:17 GMT

### Minor changes

- Experiments/Nav: accessibility changes

### Patches

- use better icon for MalwareDetectedSignal

## 5.38.2
Fri, 11 May 2018 04:21:29 GMT

### Patches

- Fix Fluent palette color names

## 5.38.1
Thu, 10 May 2018 10:27:25 GMT

### Patches

- Update Fluent theme to use relative imports

## 5.38.0
Tue, 08 May 2018 10:17:01 GMT

### Minor changes

- Adds a Fluent theme experiment

## 5.37.0
Fri, 04 May 2018 15:58:38 GMT

### Minor changes

- Edit link to customize experiments/Nav component and show more/less link to toggle hidden nav links

### Patches

- Updating React build version.

## 5.36.0
Wed, 02 May 2018 23:55:40 GMT

### Minor changes

- Remove Keytips from experiments package

## 5.35.0
Tue, 01 May 2018 10:23:32 GMT

### Minor changes

- remove extendedPicker, floatingPicker, and selectedItemsList from experiments
- Command bar accessibility: one tab stop with aria label

## 5.34.0
Mon, 30 Apr 2018 10:16:44 GMT

### Minor changes

- Nav: Refactored out a NavLink component.

## 5.33.1
Wed, 25 Apr 2018 05:32:09 GMT

### Patches

- Fix bad aria-label prop in Tile

## 5.33.0
Mon, 23 Apr 2018 10:24:54 GMT

### Minor changes

- Updating the focus styling to use the generalized `ms-Fabric--isFocusVisibl

### Patches

- Fix code in @uifabric/experiments such that it adheres to same tslint rules as the main office-ui-fabric-react package.
- Fix index import

## 5.32.0
Fri, 20 Apr 2018 23:06:06 GMT

### Minor changes

- Add delete callback, expose item change methods on SelectedItemsList
- Shimmer: adding two new props and deprecating another one.

## 5.31.4
Thu, 19 Apr 2018 18:25:59 GMT

### Patches

- Update createRef to match React.createRef api

## 5.31.3
Wed, 18 Apr 2018 10:15:04 GMT

### Patches

- Experiments: NavPage bad imports fixed.

## 5.31.2
Tue, 17 Apr 2018 18:47:11 GMT

### Patches

- Fix improper imports from index files

## 5.31.1
Mon, 16 Apr 2018 10:23:25 GMT

### Patches

- prefer const, instead of let, for extendedpicker, floatingpicker, and selecteditemlists
- M365Nav component as an experiment
- Removing module entry temporarily. (Will be added back in 6.0.)
- Updating build to React 16.3.1.
- Shimmer: Changes casing on enums in Shimmer.types
- Experiments: fixing imports for example pages for better user understanding.
- Shimmer: adding two more examples as per designers request.
- Shimmer: imports audited

## 5.31.0
Thu, 12 Apr 2018 10:15:54 GMT

### Minor changes

- Refactoring Shimmer and adding ShimmerTile + Implements Shimmer in TilesList.

### Patches

- Shimmerline import was not correct, fixing import.
- Shimmer: Application example modified to reflect changes in DetailsList

## 5.30.0
Tue, 10 Apr 2018 17:37:28 GMT

### Minor changes

- FloatingPicker: add show/hide picker call backs, fix double resolve when queryString is the same 

### Patches

- Tile: exporting an enum to use the values in creating a PlaceholderTile in Shimmer component.

## 5.29.1
Thu, 05 Apr 2018 10:15:39 GMT

### Patches

- fix suggestion header/footer for more flexibile rendering
- Align Tiles in last row with previous rows

## 5.29.0
Tue, 03 Apr 2018 10:16:05 GMT

### Minor changes

- Sets up an example of Shimmer used with DetailsList Component.

## 5.28.2
Sat, 31 Mar 2018 17:40:00 GMT

### Patches

- We need to temporarily remove `sideEffects: false` flag from package.json which will disable w
- Fix flex styling for SignalField
- Pass all props to Signal Icon elements

## 5.28.1
Wed, 28 Mar 2018 21:50:01 GMT

### Patches

- Remove root imports of office-ui-fabric-react

## 5.28.0
Tue, 27 Mar 2018 20:22:53 GMT

### Minor changes

- Create new pattern for suggestions for BaseFloatingPicker

### Patches

- Fix errors in Signals styles

## 5.27.0
Sun, 25 Mar 2018 03:08:03 GMT

### Minor changes

- Add missing icons to Signals and fix colors
- Updating to webpack 4 for producting bundles. Adding appropriate `module` and `sideEffects` fl

### Patches

- Update componentRef types

## 5.26.1
Thu, 22 Mar 2018 10:14:03 GMT

### Patches

- Removes @autobind for arrow functions

## 5.26.0
Tue, 20 Mar 2018 10:27:37 GMT

### Minor changes

- Changes in the props and naming.
- Adds a new Shimmer Component to experiments package.

## 5.25.1
Mon, 19 Mar 2018 10:27:55 GMT

### Patches

- Use arrow function properties instead of @autobind

## 5.25.0
Mon, 12 Mar 2018 06:29:20 GMT

### Minor changes

- Adds a new Shimmer Component to experiments package.

## 5.24.1
Thu, 08 Mar 2018 11:27:23 GMT

### Patches

- Add Keytip and KeytipLayer to experiments export

## 5.24.0
Wed, 07 Mar 2018 11:16:50 GMT

### Minor changes

- add clearInput on BaseExtendedPicker

## 5.23.1
Tue, 06 Mar 2018 02:06:59 GMT

### Patches

- Add Keytip and KeytipLayer to experiments export
- Replaced PureComponent with Component to appease website's UHF react version.

## 5.23.0
Mon, 05 Mar 2018 11:16:58 GMT

### Minor changes

- Converting Image SCSS to MergeStyles step 2 - style conversion (snapshots updated)

## 5.22.0
Fri, 02 Mar 2018 11:25:35 GMT

### Minor changes

- BaseExtendedPicker: Create component to wrap the rendered item, so users get contextual menu if certain props are present, get rid of loading state, fix autofocus on input after suggestion selection

### Patches

- Add initial set of Keytip work

## 5.21.0
Fri, 16 Feb 2018 11:23:28 GMT

### Minor changes

- Removing Coachmark

### Patches

- Hook up onPaste for BaseExtendedPicker

## 5.20.0
Wed, 14 Feb 2018 22:10:49 GMT

### Minor changes

- Use new "use current input" command in Suggestions

## 5.19.0
Wed, 07 Feb 2018 11:23:59 GMT

### Minor changes

- Added a fillHorizontal mode to TilesList

## 5.18.0
Tue, 06 Feb 2018 11:14:36 GMT

### Minor changes

- change persona pill css

### Patches

- BasePicker: Use correct autofillnow

## 5.17.0
Fri, 02 Feb 2018 11:24:16 GMT

### Minor changes

- allow editing of selected items in selected people list

### Patches

- consume BlockedSite icon for malware detected signal

## 5.16.1
Wed, 31 Jan 2018 11:11:59 GMT

### Patches

- Make Selection optional (create default seleciton fallback), change render typedef to any, to allow use in lower versions of types/react"

## 5.16.0
Mon, 29 Jan 2018 11:23:40 GMT

### Minor changes

- Add overflowMenuProps to Experiments CommandBar

## 5.15.0
Thu, 25 Jan 2018 11:23:06 GMT

### Minor changes

- add optional title element to extendedPicker, css changes to have selected items flow on the same row as input

## 5.14.0
Mon, 22 Jan 2018 11:14:27 GMT

### Minor changes

- Add callbacks for onDataReduced and onDataGrown

### Patches

- Minor visual alignment for FolderCover text

## 5.13.0
Fri, 12 Jan 2018 20:03:21 GMT

### Minor changes

- Add demo of size 64 file type icons

## 5.12.0
Wed, 10 Jan 2018 11:23:36 GMT

### Minor changes

- Add search throttle to floating picker

## 5.11.1
Tue, 19 Dec 2017 11:22:47 GMT

### Patches

- Broaden the range of allowed prop-type versions

## 5.11.0
Sat, 16 Dec 2017 05:07:22 GMT

### Minor changes

- Updated build to newest React version and typings. Updated tests and made various tweaks to the code to remove React warnings and keep Enzyme

## 5.10.1
Fri, 15 Dec 2017 11:22:38 GMT

### Patches

- Remove padding and border for suggestions and add callout width prop in floating picker

## 5.10.0
Thu, 14 Dec 2017 11:23:17 GMT

### Minor changes

- Add remeasure public method to CommandBar

## 5.9.2
Tue, 12 Dec 2017 02:08:36 GMT

### Patches

- add link ref in tile

## 5.9.1
Fri, 08 Dec 2017 18:09:44 GMT

### Patches

- Experiments: Fix build breaks in master

## 5.9.0
Mon, 04 Dec 2017 17:27:54 GMT

### Minor changes

- Add experiments page for file type icons

## 5.8.0
Fri, 01 Dec 2017 11:11:16 GMT

### Minor changes

- Revise Signals and provide example page

### Patches

- Fixes the external signal component

## 5.7.0
Wed, 29 Nov 2017 11:24:05 GMT

### Minor changes

- Updating TypeScript to 2.6.2.

## 5.6.1
Thu, 23 Nov 2017 11:10:13 GMT

### Patches

- Apply props.className in ResizeGroup. Add snapshot for ResizeGroup. Pass className from experiments CommandBarTests. Update experiments CommandBar snapshot

## 5.6.0
Fri, 17 Nov 2017 17:36:36 GMT

### Minor changes

- Add external signal

### Patches

- Make sure commands get added/removed in the correct order

## 5.5.2
Thu, 16 Nov 2017 11:20:34 GMT

### Patches

- Fix experiment imports for FloatingPicker and ExtendedPicker components

## 5.5.1
Wed, 08 Nov 2017 11:11:27 GMT

### Patches

- Fix alignment with trending icon

## 5.5.0
Wed, 08 Nov 2017 06:05:34 GMT

### Minor changes

- added ATP signal

## 5.4.0
Thu, 02 Nov 2017 18:20:18 GMT

### Minor changes

- Added SelectedItemsList, change ExtendedPicker from extending BasePicker to be new component utilizing SelectedItemsList and FloatingPicker

### Patches

- Fix import that was causing build error

## 5.3.1
Tue, 24 Oct 2017 10:21:08 GMT

### Patches

- Switch to .svg files for FolderCover images

## 5.3.0
Fri, 20 Oct 2017 18:42:08 GMT

### Minor changes

- Add modal selection behavior to TilesList

## 5.2.0
Wed, 18 Oct 2017 10:21:25 GMT

### Minor changes

- Add Form control

## 5.1.0
Tue, 17 Oct 2017 17:17:41 GMT

### Minor changes

- Create BaseExtendedPicker which extends current BasePicker to experiment with adding new functionality and create BaseFloatingPicker support @mention like scenarios, respectively

## 5.0.5
Fri, 13 Oct 2017 01:36:01 GMT

### Patches

- Fix visibility of Tile descenders

## 5.0.4
Fri, 06 Oct 2017 10:18:41 GMT

### Patches

- TSConfig: update to use preserveConstEnums so that certain builds s ystems don't break when importing const enums

## 5.0.3
Wed, 04 Oct 2017 22:40:22 GMT

*Version update only*

## 5.0.2
Sat, 30 Sep 2017 01:26:37 GMT

### Patches

- Code cleanup after move to MergeStyles

## 5.0.1
Wed, 27 Sep 2017 00:20:58 GMT

### Patches

- Updated for Fabric 5.0.

## 0.10.0
Thu, 21 Sep 2017 06:23:58 GMT

### Minor changes

- Adjust Tile and FolderCover alignments and behaviors

### Patches

- Consume Check hover behavior in Tile

## 0.9.0
Tue, 19 Sep 2017 10:08:55 GMT

### Minor changes

- LayoutGroup: Changed gap to layoutGap and updated docs

## 0.8.0
Mon, 18 Sep 2017 10:18:23 GMT

### Minor changes

- Add accessibility hooks for Tile, TilesList, and FolderCover

## 0.7.1
Fri, 15 Sep 2017 10:19:50 GMT

### Patches

- Add folder cover shadows

## 0.7.0
Thu, 14 Sep 2017 00:34:57 GMT

### Minor changes

- Add support for folder cover signals

## 0.6.0
Tue, 12 Sep 2017 17:41:25 GMT

### Minor changes

- Added LayoutGroup, FolderCover, Tile and TilesList to exports

## 0.5.1
Fri, 08 Sep 2017 10:16:28 GMT

### Patches

- Fix alignment of Tile foreground and background using flexbox
- Add breakpoint size support to Tile

## 0.5.0
Thu, 07 Sep 2017 10:09:51 GMT

### Minor changes

- Removed global fabric export
- Add presentation hooks for Tile and FolderCover
- Support auto-focus for TilesList

### Patches

- Fix minor alignment issues with SignalField

## 0.4.0
Mon, 04 Sep 2017 10:16:56 GMT

### Minor changes

- Add size pre-computation support to Tile and FolderCover

## 0.3.0
Tue, 29 Aug 2017 20:55:35 GMT

### Minor changes

- Implement FolderCover component

### Patches

- Adjusted build to produce sourcemaps with correct sourceRoot.

## 0.2.1
Tue, 29 Aug 2017 10:20:56 GMT

### Patches

- Fix Selection module reference in Tile modules

## 0.2.0
Sat, 26 Aug 2017 00:52:38 GMT

### Minor changes

- Separate Selection out from TilesList and fix minor TilesList bugs

## 0.1.7
Fri, 25 Aug 2017 20:31:51 GMT

### Patches

- Adding back sourcemap content to .map files, which should alleviate "../src/* missing" issues when using webpack.

## 0.1.6
Fri, 25 Aug 2017 19:27:18 GMT

*Version update only*

## 0.1.5
Thu, 24 Aug 2017 10:20:20 GMT

*Version update only*

## 0.1.4
Thu, 24 Aug 2017 05:38:14 GMT

### Patches

- Inserted disable jsx-ban-props lines to experiments pkg to pass tslint

## 0.1.3
Wed, 23 Aug 2017 19:04:55 GMT

### Patches

- Removed suppression of tslint max line length rule from Experiments package, and broke up large lines or inserted tslint:disable comments to pass tslint
- Removed suppression of tslint unused variables rule from Experiments package and removed unused variables to pass tslint
- Removed suppression of tslint self-close rule from Experiments package and self-closed all empty elements to pass tslint
- Added missing typedefs to call signatures in experiments, re-enable tslint rulefor typedef

## 0.1.2
Tue, 22 Aug 2017 10:09:55 GMT

*Version update only*

## 0.1.1
Mon, 21 Aug 2017 10:19:29 GMT

### Patches

- Updating project dependencies.

## 0.1.0
Fri, 18 Aug 2017 16:32:33 GMT

### Minor changes

- Added commandbar as ExperimentCommandBar

### Patches

- Fix underflow for TilesList with stack grids

## 0.0.2
Wed, 16 Aug 2017 10:11:43 GMT

*Version update only*

## 0.0.1
Tue, 15 Aug 2017 10:19:22 GMT

*Initial release*

