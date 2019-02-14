# notepad-team-3

This extension adds a notepad to the sidebar. You can make notes about the current web page, which will be saved on [synchronized storage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync), so that any notes will be saved for the next time you open the page. Since notes are saved in synchronized storage, they will be available in any instance of Firefox that a user is logged into (across devices!).

## How to install
1. Clone the repository
2. Go to `about:debugging` in Firefox
3. Click `Load Temporary Add-on...`
4. Select the `manifest.json` file for this extension
5. Notepad will appear in your sidebar!