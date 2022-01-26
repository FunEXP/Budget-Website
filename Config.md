HMR is Hot module replacement, which means dynamically add/delete modules without reloading the whole application
Note that gitpod has a dynamic url so need to grab the url and use port 3000
- Modify the gitpod.yml to use gp url <port>: https://www.gitpod.io/docs/config-ports
- Specify in the svelte.config.js to use the client port and the related url