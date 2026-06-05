# Batch Connect - OSC Ansys Workbench

![GitHub Release](https://img.shields.io/github/release/osc/bc_osc_ansys_workbench.svg)
[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Overview

OSC Ansys Workbench is an [Open OnDemand](https://openondemand.org/) Batch Connect app that launches an Ansys Workbench as an interactive VNC desktop session on OSC HPC clusters. Ansys Workbench is an integrated simulation platform that includes CFX and Fluent solvers for computational fluid dynamics, structural analysis, and multiphysics simulations.

- **Upstream project:** [Ansys](https://www.ansys.com/products/ansys-workbench)
- **Batch Connect template:** `vnc`
- **Scheduler:** Slurm

## Screenshots

![Ansys running in browser](docs/bc_osc_ansys.png)

## Features

- Launches interactive Ansys Workbench via VNC desktop on compute nodes (launches `runwb2`)
- Includes CFX and Fluent solvers with multi-node parallel support
- GPU-accelerated 3D visualization on vis nodes using VirtualGL
- Mesa software rendering fallback on non-GPU nodes (`CUE_GRAPHICS="mesa"`)
- External license server support (configurable license server and file)
- Optional parallel license reservation with automatic license calculation
- Group-based access control (requires `ansysflu` group membership or external license)
- Multi-node jobs with CFX parallel distributed start method
- Xfce desktop environment with window manager
- Configurable cores, wall time, Ansys version and node type via the launch form

## Requirements

### Compute Node Software

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the OnDemand node):

- [Ansys Workbench] 15.0.7+
  - [CFX]
  - [Fluent]
- [Xfce Desktop] 4+

For VNC server support:

- [TurboVNC] 2.1+
- [websockify] 0.8.0+

For hardware rendering support:

- [X server]
- [VirtualGL] 2.3+

### Open OnDemand
- Open OnDemand 1.5+ <!-- TODO: verify this -->
- Scheduler: Slurm

### Optional

- [Lmod] 6.0.1+ or any other `module purge` and `module load <modules>` based CLI used to load appropriate environments within the batch job

[Ansys Workbench]: https://www.ansys.com/
[CFX]: https://www.ansys.com/Products/Fluids/Ansys-CFX
[Fluent]: https://www.ansys.com/Products/Fluids/Ansys-FLUENT
[Xfce Desktop]: https://xfce.org/
[TurboVNC]: http://www.turbovnc.org/
[websockify]: https://github.com/novnc/websockify
[X server]: https://www.x.org/
[VirtualGL]: http://www.virtualgl.org/
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod

## App Installation

### 1. Clone the repository

```sh
cd /var/www/ood/apps/sys
git clone https://github.com/OSC/bc_osc_ansys_workbench.git
cd bc_osc_ansys_workbench

# Pin to a release (recommended)
git checkout v0.24.1
```

No restart is needed -- Batch Connect apps are not Passenger apps and are detected automatically.

## 2. Configure for your site

Edit `form.yml` and update these values for your cluster:

| Attribute | Default | Change to |
|-----------|---------|-----------|
| `cluster` | `"cardinal"` | Your cluster name |
| `version` | `"ansys/2024 R1"` | Version(s) of Ansys available on your system |
| `node_type` | OSC-specific node types | Node types available on your cluster |
| `num_cores.max` | `96` | Max cores on your compute nodes |
| `user_license_provider` | `osc` or `external` | Your license configuration|

In `script.sh.erb`, the app loads modules with:
```
module load ansys/<version>
```
On vis nodes, it additionally loads `virtualgl`
Ensure equivalent modules are available on your system.

The `submit.yml.erb` manages ANSYS license tokens (`ansys@osc`, `ansyspar@osc`) and checks group membership (`ansysflu`). Update these references for your site's license server and group configuration.

### To Update the App

```sh
cd /var/www/ood/apps/sys/bc_osc_ansys_workbench
git fetch
git checkout <tag>
```

No OOD restart is needed. 

## Configuration

### form.yml attributes

| Attribute | Widget |Description | Default |
|-----------|--------|-------------|---------|
| `cluster` | select | Target cluster ID | `"cardinal"` |
| `version` | select | Version of Ansys to load on compute node | `"ansys/2024R1"` |
| `bc_num_hours` | number | Maximum wall time (hours) | `4` |
| `bc_num_slots` | number | Number of nodes (Fluent/CFX multi-node support) | `1` |
| `num_cores` | number_field | Number of cores per node (1--96, 4 GB per core) | `1` |
| `reserve_parallel_licenses` | checkbox | If selected, reserves Ansys parallel licenses for the duration of the job | unchecked |
| `node_type` | select | Compute node type (any, vis, hugemem) | `any` |
| `bc_vnc_resolution` | text | Resolution of VNC desktop session | 1228 x 691 |
| `user_license_provider` | select | License source: OSC license or external | `osc` |
| `extern_license_server` | text | External license server (port@ip)| -- |
| `extern_license_file` | text | External license file (port@ip)| -- |

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANSYSLMD_LICENSE_FILE` | Yes | Path to Ansys license source |

## Troubleshooting

### Job starts but app doesn't appear (Batch Connect)

1. Check the job's `output.log` in `~/ondemand/data/sys/bc_osc_ansys_workbench/`
2. Verify the module loads correctly: `module load ansys/<version>`
3. For VNC apps, verify the window manager is installed: `which xfwm4`

### Connection timeout

The app may need more time to start. Increase the connection timeout or check that the compute node can open the required port.

## Testing

| Site | OOD Version | Scheduler | Status |
|------|-------------|-----------|--------|
| Ohio Supercomputer Center | 4.2.2 | Slurm     | Production |

To verify your installation:

1. Launch the app from the OOD dashboard with default settings
2. Confirm the application loads in the browser

## Known Limitations

- Parallel licenses are shared across users; if licenses are not requested with the job, they are checked out at runtime, which can cause requested cores to differ from actual usage and reduce availability for other jobs. 
 
## Contributing

Contributions are welcome. To contribute:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/my-improvement`)
3. Submit a pull request with a description of your changes

For bugs or feature requests, [open an issue](https://github.com/OSC/bc_osc_ansys_workbench/issues).

This app is part of the [OOD Appverse](https://ondemand.connectci.org/affinity-groups/ood-appverse). Join the [Appverse Affinity Group](https://ondemand.connectci.org/affinity-groups/ood-appverse) to connect with other contributors.

## References

- [Ansys Workbench](https://ansys.com/products/ansys-workbench)
- [Open OnDemand](https://openondemand.org/) — the HPC portal framework

## License

* Documentation, website content, and logo is licensed under
  [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)
* Code is licensed under MIT (see LICENSE.txt)
* Ansys, Ansys Workbench, Ansoft, AUTODYN, CFX, FLUENT, HFSS and any and all Ansys, Inc. brand, product, service and feature names, logos and slogans are trademarks or registered trademarks of Ansys, Inc. or its subsidiaries located in the United States or other countries.

## Acknowledgments

This app is built on [Open OnDemand](https://openondemand.org/), developed and
maintained by the [Ohio Supercomputer Center (OSC)](https://www.osc.edu/).

Open OnDemand is supported by the National Science Foundation under awards
[NSF SI2-SSE-1534949](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1534949)
and [NSF CSSI-Frameworks-1835725](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1835725).
