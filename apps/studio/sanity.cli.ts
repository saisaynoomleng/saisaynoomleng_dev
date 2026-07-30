import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'keonpyg1',
    dataset: 'production',
  },
  deployment: {
    autoUpdates: true,
    appId: 'hp6yriq4ozqvjgorfo42mjm4',
  },
})
