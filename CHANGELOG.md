# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [0.13.0] - 2021-12-16
### Changed
- Use the new dynamic JS feature of OnDemand to control the core numbers in forms using the form.yml.erb - 
  [33](https://github.com/OSC/bc_osc_ansys_workbench/pull/33)

## [0.12.2] - 2021-11-01
### Fixed
- Use ssh instead of srun to allow checks to complete for parallel Fluent runs with > 7 nodes - 
  [30](https://github.com/OSC/bc_osc_ansys_workbench/pull/30)

## [0.12.1] - 2020-01-28
### Added
- Added version 2020R2 in [29](https://github.com/OSC/bc_osc_ansys_workbench/pull/29)

## [0.12.0] - 2021-01-19
### Changed
- [28](https://github.com/OSC/bc_osc_ansys_workbench/pull/28) changed the bc_account text field
  to account which is a select widget with only valid groups as options.

## [0.11.2] - 2020-12-04
### Fixed
- Fixed slurm parallel Fluent in [27](https://github.com/OSC/bc_osc_ansys_workbench/pull/27)

## [0.11.1] - 2020-11-22
### Changed
- [26](https://github.com/OSC/bc_osc_ansys_workbench/pull/26)
  - Changed the Slurm license server to just be 'osc'
  - RPMs now show the version number.

## [0.11.0] - 2020-11-19
### Added
- Added owens-slurm cluster to begin migrating Owens to Slurm in
  [24](https://github.com/OSC/bc_osc_ansys_workbench/pull/24)

## [0.10.1] - 2020-03-13
### Fixed
- CI now uses clone strategy instead of fetch for a more stable checkout performance

## [0.10.0] - 2020-03-13
### Added
- Added ANSYS 2020R1 and 19.2

## [0.9.1] - 2020-01-08
### Fixed
- Fixed bug where reserving parallel licenses could block submission [#17](https://github.com/OSC/bc_osc_ansys_workbench/issues/17)

## [0.9.0] - 2019-12-09
### Added
- Added ANSYS 2019R1 and 2019R2

### Fixed
- Fixed ANSYS Mesh/Design Modeler failing when using a vis node

## [0.8.2] - 2019-07-09
### Added
- Added xalt

## [0.8.1] - 2019-02-21
### Fixed
- Fixed front end to allow PPN control to remain blank

## [0.8.0] - 2019-01-31
### Added
- Added controls for using external license servers

## [0.7.4] - 2018-01-08
### Fixed
- Fixed bug caused by attempting to assign to an attr_reader

## [0.7.3] - 2019-01-24
### Fixed
- Fixed bug when entering a blank PPN request

## [0.7.2] - 2019-01-09
### Changed
- Requesting a hugemem node always requests the entire node

## [0.7.1] - 2019-01-08
### Fixed
- Fixed bug when entering a blank PPN request

## [0.7.0] - 2019-01-08
### Added 
- Added a control to select number of cores

### Changed
- Fixed bug where hugemem nodes did not get access to all 48 processors

## [0.6.0] - 2018-07-26
### Changed
- Fixed bug where ANSYS parallel licenses were not properly reserved at submission time.
    [#15](https://github.com/OSC/bc_osc_ansys_workbench/issues/15)

## [0.5.0] - 2018-03-27
### Changed
- Switched from using Fluxbox to Xfce for the window manager.
  [#13](https://github.com/OSC/bc_osc_ansys_workbench/issues/13)

## [0.4.0] - 2018-03-13
### Changed
- Changed from Oakley cluster to Owens cluster.
- Changed "Account" label to "Project" in the form.

### Fixed
- Fixed CFX and Fluent parallel solvers (now properly use `pbs_mom`).

## [0.3.0] - 2018-02-26
### Added
- Added ANSYS 17.2 as an option.
- Added warning for using older versions.

## [0.2.0] - 2018-01-03
### Added
- Added ANSYS 18.1 as an option.
  [#6](https://github.com/OSC/bc_osc_ansys_workbench/issues/6)

### Changed
- Modified the `CHANGELOG.md` formatting.
- Refactored to use new Dashboard ERB templating.
  [#3](https://github.com/OSC/bc_osc_ansys_workbench/issues/3)
- Updated date in `LICENSE.txt`.

## [0.1.0] - 2017-06-14
### Changed
- Refactored for the new Batch Connect app.

## [0.0.7] - 2017-05-15
### Fixed
- Future-proof Fluxbox configuration.

## [0.0.6] - 2017-05-12
### Changed
- Remove FVWM and added Fluxbox as the window manager.

## [0.0.5] - 2017-04-24
### Changed
- Version assets removing need for `bin/setup`.

## [0.0.4] - 2017-04-21
### Added
- Added `bin/setup` script for easier deployment.

## [0.0.3] - 2017-03-22
### Fixed
- Set working directory to `$HOME` for FVWM as well.
- Add quotes around paths.

## [0.0.2] - 2017-03-22
### Fixed
- Specify gpus when requesting `vis` node.
- Set working directory to `$HOME`.

## 0.0.1 - 2016-12-20
### Added
- Initial release!

[Unreleased]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.12.3...HEAD
[0.12.3]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.12.2...v0.12.3
[0.12.2]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.12.1...v0.12.2
[0.12.1]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.11.2...v0.12.0
[0.11.2]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.11.1...v0.11.2
[0.11.1]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.11.0...v0.11.1
[0.11.0]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.10.1...v0.11.0
[0.10.1]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.9.1...v0.10.0
[0.9.1]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.8.2...v0.9.0
[0.8.2]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.7.4...v0.8.0
[0.7.4]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.7.3...v0.7.4
[0.7.3]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.7.2...v0.7.3
[0.7.2]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.0.7...v0.1.0
[0.0.7]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/OSC/bc_osc_ansys_workbench/compare/v0.0.1...v0.0.2
