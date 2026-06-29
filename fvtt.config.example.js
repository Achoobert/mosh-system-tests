/**
 * Enter the path to the Foundry Data Folder on userDataPath
 * This can be found in the Foundry settings
 * Examples: %localappdata%/FoundryVTT
 *           ~/Library/Application Support/FoundryVTT
 *           /home/$USER/.local/share/FoundryVTT
 * Then copy this file to fvtt.config.js and set userDataPath / baseURL.
 */

const developmentOptions = {
  userDataPath: 'PATH_TO_FOUNDRY_DATA_FOLDER',
  baseURL: 'http://localhost:30000'
}

export default developmentOptions
