'use strict';

var Locale = {
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthsShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    weekdays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    weekdaysShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],

    retToApp: 'return to app',
    name: 'name',
    icon: 'icon',
    title: 'title',
    password: 'password',
    user: 'user',
    website: 'website',
    tags: 'tags',
    notes: 'notes',
    noTitle: 'no title',
    or: 'or',
    notImplemented: 'Not Implemented',

    cache: 'cache',
    file: 'file',
    webdav: 'WebDAV',
    dropbox: 'Dropbox',
    gdrive: 'Google Drive',
    onedrive: 'OneDrive',

    menuAllItems: 'All Items',
    menuColors: 'Colors',
    menuTags: 'Tags',
    menuTrash: 'Trash',
    menuSetGeneral: 'General',
    menuSetShortcuts: 'Shortcuts',
    menuSetHelp: 'Help',
    menuSetAbout: 'About',
    menuAlertNoTags: 'No tags',
    menuAlertNoTagsBody: 'You can add new tags while editing fields, in tags section.',
    menuEmptyTrash: 'Empty Trash',
    menuEmptyTrashAlert: 'Empty Trash?',
    menuEmptyTrashAlertBody: 'You will not be able to put items back',
    menuItemCollapsed: 'Double-click to expand',

    alertYes: 'Yes',
    alertNo: 'No',
    alertOk: 'OK',
    alertCancel: 'Cancel',
    alertSignIn: 'Sign In',
    alertCopy: 'Copy',
    alertClose: 'Close',

    appBeta: 'WARNING: beta version, only for preview',

    footerOpen: 'Open / New',
    footerSyncError: 'Sync error',
    footerTitleHelp: 'Help',
    footerTitleSettings: 'Settings',
    footerTitleGen: 'Generate',
    footerTitleLock: 'Lock',

    genLen: 'Length',
    genNewPass: 'New password',
    genPresetDefault: 'default preset',
    genPresetDerived: 'like old password',
    genPresetPronounceable: 'pronounceable',
    genPresetMed: 'medium length',
    genPresetLong: 'long',
    genPresetPin4: '4-digit PIN',
    genPresetMac: 'MAC address',
    genPresetHash128: '128-bit hash',
    genPresetHash256: '256-bit hash',

    grpTitle: 'Group',
    grpSearch: 'Enable searching entries in this group',
    grpAutoType: 'Enable auto-type',
    grpAutoTypeSeq: 'Auto-type sequence',
    grpAutoTypeSeqDefault: 'Use default auto-type sequence',
    grpTrash: 'Delete group with all entries',

    tagTitle: 'Tag',
    tagTrash: 'Remove tag from all entries',
    tagRename: 'Rename',
    tagTrashQuestion: 'Remove tag from all entries?',
    tagTrashQuestionBody: 'This tag will be removed from all entries. There will be no easy way to put it back.',
    tagExists: 'Tag already exists',
    tagExistsBody: 'Tag with this name already exists. Please choose another name.',
    tagBadName: 'Bad name',
    tagBadNameBody: 'Tag name can not contain characters `,`, `;`, `:`. Please remove them.',

    keyChangeTitle: 'Master Key Changed',
    keyChangeMessage: 'Master key was changed for this database. Please enter a new key',

    iconFavTitle: 'Download and use website favicon',
    iconSelCustom: 'Select custom icon',

    listEmptyTitle: 'Empty',
    listEmptyAdd: 'add with {} button above',
    listGroup: 'Group',
    listNoWebsite: 'no website',
    listNoUser: 'no user',
    listNoAttachments: 'no attachments',

    searchAddNew: 'Add New',
    searchSort: 'Sort',
    searchTitle: 'Title',
    searchWebsite: 'Website',
    searchUser: 'User',
    searchCreated: 'Created',
    searchUpdated: 'Updated',
    searchAttachments: 'Attachments',
    searchAZ: 'A &rarr; Z',
    searchZA: 'Z &rarr; A',
    searchON: 'Old &rarr; New',
    searchNO: 'New &rarr; Old',
    searchShiftClickOr: 'shift-click or',
    searchAdvTitle: 'Toggle advanced search',
    searchSearchIn: 'Search in',
    searchOther: 'Other fields',
    searchProtect: 'Secure fields',
    searchOptions: 'Options',
    searchCase: 'Match case',
    searchRegex: 'RegEx',
    searchHistory: 'History',

    openOpen: 'Open',
    openNew: 'New',
    openMore: 'More',
    openDemo: 'Demo',
    openSettings: 'Settings',
    openCaps: 'Caps Lock is on',
    openClickToOpen: 'Click to open a file',
    openKeyFile: 'key file',
    openKeyFileDropbox: '(from dropbox)',
    openDropHere: 'drop files here',
    openFailedRead: 'Failed to read file',
    openNothingFound: 'Nothing found',
    openNothingFoundBody: 'No files which could be opened.',
    openNothingFoundBodyFolder: 'Files are searched inside {} folder',
    openAppFolder: 'app',
    openRootFolder: 'root',
    openSelectFile: 'Select a file',
    openSelectFileBody: 'Select a file which you would like to open',
    openPassFor: 'Password for',
    openRemoveLastQuestion: 'Delete local file?',
    openRemoveLastQuestionBody: 'The file you are deleting is stored only inside the app. Delete it permanently?',
    openRemoveLastQuestionModBody: 'The file you are deleting has local modifications. Delete it and discard these modifications?',
    openLocalFile: 'Local file',
    openLocalFileBody: 'You are going to open a file which will be stored inside the app. ' +
        'Changes you make will not be saved back to file system. ' +
        'To get the file with your data, export it from settings.',
    openLocalFileDontShow: 'Don\'t show this again',
    openWrongFile: 'Bad file',
    openWrongFileBody: 'This file format is not supported. This app works with KeePass database format files (KDBX).',
    openKdbFileBody: 'You are opening an old version format file (KDB). This app supports only new format (KDBX), ' +
        'please use KeePass v2 to convert between them.',
    openConfigHeader: '{} Settings',
    openUrl: 'URL',
    openUrlDesc: 'https://server/path/file.kdbx, or just file.kdbx',
    openUser: 'Username',
    openUserDesc: 'WebDAV server username (if required)',
    openUserPlaceholder: 'no username',
    openPass: 'Password',
    openPassDesc: 'WebDAV server password (this is not your file password)',
    openPassPlaceholder: 'no password',
    openConfigError: 'Error: {}',
    openConfigErrorNotFound: 'File not found',
    openError: 'Error',
    openErrorDescription: 'There was an error opening file',

    detAttDownload: 'Shift-click attachment button to download or ',
    detAttDelToRemove: 'Delete to remove',
    detEmpty: 'Your passwords will be displayed here',
    detGroupRestore: 'To restore this group, please drag it to any group outside trash',
    detHistoryClickPoint: 'Click entry history timeline point to view state',
    detHistoryReturn: 'return to entry',
    detHistoryRevert: 'Revert to state',
    detHistoryDel: 'Delete state',
    detHistoryDiscard: 'Discard changes',
    detHistoryEmpty: 'empty',
    detHistoryModified: 'modified',
    detHistoryRec: 'record',
    detHistoryRecs: 'records',
    detHistoryVersion: 'Version',
    detHistorySaved: 'Saved',
    detHistoryTitle: 'Title',
    detHistoryNoTitle: 'no title',
    detHistoryCurState: 'current state',
    detHistoryCurUnsavedState: 'current unsaved state',
    detBackToList: 'back to list',
    detSetIconColor: 'Change color',
    detSetIcon: 'Change icon',
    detDropAttachments: 'drop attachments here',
    detDelEntry: 'Delete',
    detDelEntryPerm: 'Delete permanently',
    detUser: 'User',
    detPassword: 'Password',
    detWebsite: 'Website',
    detNotes: 'Notes',
    detTags: 'Tags',
    detExpires: 'Expires',
    detExpired: 'expired',
    detFile: 'File',
    detCreated: 'Created',
    detUpdated: 'Updated',
    detHistory: 'History',
    detNetField: 'New Field',
    detAttachments: 'Attachments',
    detDelFromTrash: 'Delete from trash?',
    detDelFromTrashBody: 'You will not be able to put it back.',
    detDelFromTrashBodyHint: 'To quickly remove all items from trash, click empty icon in Trash menu.',
    detFieldCopied: 'Copied',
    detFieldCopiedTime: 'Copied for {} seconds',
    detCopyHint: 'You can copy field value with click on its title',
    detMore: 'more',
    detClickToAddField: 'click to add a new field',
    detMenuAddNewField: 'Add new field',
    detMenuShowEmpty: 'Show empty fields',
    detMenuHideEmpty: 'Hide empty fields',
    detMenuAddField: 'Add {}',
    detSetupOtp: 'One-time passwords',
    detAutoType: 'Auto-type',
    detAutoTypeEnabled: 'Enable auto-type for this entry',
    detAutoTypeSequence: 'Keystrokes',
    detAutoTypeInput: 'Input',
    detAutoTypeShortcuts: 'Shortcuts',
    detAutoTypeShortcutsDesc: '{} or {} while the app is inactive',
    detAutoTypeObfuscation: 'Mix real keystrokes with random',
    detAutoTypeWindow: 'Window',
    detAutoTypeInputWindow: 'Window title',
    detSetupOtpAlert: 'Scan the QR code',
    detSetupOtpAlertBody: 'Please copy the QR code which is displayed on the authorization page.',
    detSetupOtpAlertBody1: '1. go to the authorization page',
    detSetupOtpAlertBody2: '2. make a screenshot of the QR code {}',
    detSetupOtpAlertBody3: '3. paste it here {}',
    detSetupOtpAlertBody3Mobile: '3. select it or scan with your camera using Select/Scan button below',
    detSetupOtpAlertBody4: 'If you can\'t scan the code, click Enter code manually',
    detSetupOtpManualButton: 'Enter code manually',
    detSetupOtpScanButton: 'Select/Scan',
    detSetupOtpAlertBodyWith: 'with {}',
    detOtpImageError: 'Error reading image',
    detOtpImageErrorBody: 'Sorry, we could not read the image format, please contact the app authors with error details.',
    detOtpImageReading: 'Reading QR code...',
    detOtpQrError: 'QR code scan error',
    detOtpQrErrorBody: 'Sorry, we could not read the QR code, please try once again or contact the app authors with error details.',
    detOtpQrWrong: 'Wrong QR code',
    detOtpQrWrongBody: 'Your QR code was successfully scanned but it doesn\'t contain one-time password data.',

    autoTypeEntryFields: 'Entry fields',
    autoTypeModifiers: 'Modifier keys',
    autoTypeKeys: 'Keys',
    autoTypeLink: 'more...',

    appSecWarn: 'Not Secure!',
    appSecWarnBody1: 'You have loaded this app with insecure connection. ' +
        'Someone may be watching you and stealing your passwords. ' +
        'We strongly advise you to stop, unless you clearly understand what you\'re doing.',
    appSecWarnBody2: 'Yes, your database is encrypted but no one can guarantee that the app has not been modified on the way to you.',
    appSecWarnBtn: 'I understand the risks, continue',
    appUnsavedWarn: 'Unsaved changes!',
    appUnsavedWarnBody: 'You have unsaved files, if you close the app, changes will be lost.',
    appExitBtn: 'Discard changes',
    appExitSaveBtn: 'Save changes',
    appDontExitBtn: 'Don\'t exit',
    appCannotLockAutoInit: 'The app cannot be locked because auto save is disabled.',
    appCannotLock: 'You have unsaved changes that will be lost. Continue?',
    appSaveChangesBtn: 'Save changes',
    appDiscardChangesBtn: 'Discard changes',
    appAutoSave: 'Save changes automatically',
    appSaveError: 'Save Error',
    appSaveErrorBody: 'Failed to auto-save file',
    appSaveErrorBodyMul: 'Failed to auto-save files:',

    setGenTitle: 'General Settings',
    setGenUpdate: 'Update',
    setGenNewVersion: 'New app version was released and downloaded',
    setGenReleaseNotes: 'View release notes',
    setGenReloadToUpdate: 'Reload to update',
    setGenUpdateManual: 'New version has been released. It will check for updates and install them automatically ' +
        'but auto-upgrading from your version is impossible.',
    setGenDownloadUpdate: 'Download update',
    setGenUpdateAuto: 'Download and install automatically',
    setGenUpdateCheck: 'Check but don\'t install',
    setGenNoUpdate: 'Never check for updates',
    setGenUpdateChecking: 'Checking for updates',
    setGenCheckUpdate: 'Check for updates',
    setGenErrorChecking: 'Error checking for updates',
    setGenLastCheckSuccess: 'Last successful check was at {}',
    setGenLastCheckVer: 'the latest version was {}',
    setGenCheckedAt: 'Checked at',
    setGenLatestVer: 'you are using the latest version',
    setGenNewVer: 'new version {} available, released',
    setGenDownloadingUpdate: 'Downloading update...',
    setGenExtractingUpdate: 'Extracting update...',
    setGenCheckErr: 'There was an error downloading new version',
    setGenNeverChecked: 'Never checked for updates',
    setGenRestartToUpdate: 'Restart to update',
    setGenDownloadAndRestart: 'Download update and restart',
    setGenAppearance: 'Appearance',
    setGenTheme: 'Theme',
    setGenThemeFb: 'Flat blue',
    setGenThemeDb: 'Dark brown',
    setGenThemeWh: 'White',
    setGenThemeHc: 'High contrast',
    setGenFontSize: 'Font size',
    setGenFontSizeNormal: 'Normal',
    setGenFontSizeLarge: 'Large',
    setGenFontSizeLargest: 'Largest',
    setGenShowSubgroups: 'Show entries from all subgroups',
    setGenTableView: 'Entries list table view',
    setGenColorfulIcons: 'Colorful custom icons in list',
    setGenFunction: 'Function',
    setGenAutoSync: 'Automatically save and sync',
    setGenRememberKeyFiles: 'Remember key files',
    setGenLockInactive: 'Auto-lock if the app is inactive',
    setGenNoAutoLock: 'Don\'t auto-lock',
    setGenLockMinutes: 'In {} minutes',
    setGenLockHour: 'In an hour',
    setGenClearClip: 'Clear clipboard after copy',
    setGenNoClear: 'Don\'t clear',
    setGenClearSeconds: 'In {} seconds',
    setGenClearMinute: 'In a minute',
    setGenMinInstead: 'Minimize app instead of close',
    setGenLockMinimize: 'Auto-lock on minimize',
    setGenLockCopy: 'Auto-lock on password copy',
    setGenStorage: 'Storage',
    setGenAdvanced: 'Advanced',
    setGenShowAdvanced: 'Show advanced settings (these settings may be dangerous)',
    setGenDevTools: 'Show dev tools',
    setGenTryBeta: 'Try beta version for one time',
    setGenTryBetaWarning: 'Unsaved files',
    setGenTryBetaWarningBody: 'Please save all files and click this button again',
    setGenShowAppLogs: 'Show app logs',

    setFilePath: 'File path',
    setFileStorage: 'This file is opened from {}.',
    setFileIntl: 'This file is stored in the internal app storage',
    setFileLocalHint: 'Want to work seamlessly with local files?',
    setFileDownloadApp: 'Download a desktop app',
    setFileSave: 'Save',
    setFileSaveTo: 'Save to ...',
    setFileClose: 'Close',
    setFileSync: 'Sync',
    setFileSaveToFile: 'File',
    setFileSaveToXml: 'XML',
    setFileLastSync: 'Last sync',
    setFileLastSyncUnknown: 'unknown',
    setFileSyncInProgress: 'sync in progress',
    setFileSyncError: 'Sync error',
    setFileSettings: 'Settings',
    setFilePass: 'Master password',
    setFilePassChanged: 'password was changed; leave the field blank to use old password',
    setFileKeyFile: 'Key file',
    setFileSelKeyFile: 'Select a key file',
    setFileNames: 'Names',
    setFileName: 'Name',
    setFileDefUser: 'Default username',
    setFileHistory: 'History',
    setFileEnableTrash: 'Enable trash',
    setFileHistLen: 'History length, keep last records per entry',
    setFileHistSize: 'History size, total MB per file',
    setFileAdvanced: 'Advanced',
    setFileRounds: 'Key encryption rounds',
    setFileUseKeyFile: 'Use key file',
    setFileUseGenKeyFile: 'Use generated key file',
    setFileUseOldKeyFile: 'Use old key file',
    setFileGenKeyFile: 'Generate new key file',
    setFileDontUseKeyFile: 'Don\'t use key file',
    setFileEmptyPass: 'Empty password',
    setFileEmptyPassBody: 'Saving database with empty password makes it completely unprotected. Do you really want to do it?',
    setFileSaveError: 'Save error',
    setFileSaveErrorBody: 'Error saving to file',
    setFileAlreadyExists: 'Already exists',
    setFileAlreadyExistsBody: 'File {} already exists. Overwrite it?',
    setFileUnsaved: 'Unsaved changes',
    setFileUnsavedBody: 'There are unsaved changes in this file',
    setFileCloseNoSave: 'Close and lose changes',
    setFileDontClose: 'Don\'t close',
    setFileNoWebDavUpload: 'Cannot save to WebDAV',
    setFileNoWebDavUploadBody: 'Adding new files to WebDAV is currently not supported. Please upload your file manually and open in the app.',

    setShTitle: 'Shortcuts',
    setShShowAll: 'show all items',
    setShColors: 'show items with colors',
    setShTrash: 'go to trash',
    setShFind: 'search, or just start typing',
    setShClearSearch: 'clear search',
    setShEntry: 'go to entry',
    setShCopyPass: 'copy password or selected field',
    setShCopyUser: 'copy username',
    setShCopyUrl: 'copy website',
    setShAutoType: 'auto-type selected entry',
    setShPrev: 'go to previous item',
    setShNext: 'go to next item',
    setShCreateEntry: 'create entry',
    setShOpen: 'open / new',
    setShSave: 'save all files',
    setShGen: 'generate password',
    setShSet: 'app settings',
    setShCopyPassGlobal: 'copy password (when app is in background)',
    setShCopyUserGlobal: 'copy username (when app is in background)',
    setShCopyUrlGlobal: 'copy website (when app is in background)',
    setShAutoTypeGlobal: 'auto-type (when app is in background)',
    setShLock: 'lock database',

    setAboutTitle: 'About',
    setAboutBuilt: 'This app is built with these awesome tools',
    setAboutLic: 'License',
    setAboutLicComment: 'The app itself and all included components which are not in public domain are licensed under MIT license',
    setAboutFirst: 'This is an open-source app created by {}',
    setAboutSecond: ' and licensed under {}.',
    setAboutSource: 'The source code and issues are on {}.',

    setHelpTitle: 'Help',
    setHelpFormat: 'File Format',
    setHelpFormatBody: 'This is a port of {} app built with web technologies. ' +
        'It understands files in KeePass format (kdbx). You can create such files (password databases) either in KeePass, ' +
        'or in this app. The file format is 100% compatible and should be understood by both apps.',
    setHelpProblems: 'Problems?',
    setHelpProblems1: 'If something goes wrong, please {} ',
    setHelpProblems2: 'or {}',
    setHelpOpenIssue: 'open an issue on GitHub',
    setHelpContactLink: 'contact a developer directly',
    setHelpAppInfo: 'App information',
    setHelpOtherPlatforms: 'Other platforms',
    setHelpDesktopApps: 'Desktop apps',
    setHelpWebApp: 'Web app',
    setHelpUpdates: 'Updates',
    setHelpTwitter: 'App twitter',

    dropboxLogin: 'Dropbox Login',
    dropboxLoginBody: 'To continue, you have to sign in to Dropbox.',
    dropboxSyncError: 'Dropbox Sync Error',
    dropboxNotFoundBody: 'The file was not found. Has it been removed from another computer?',
    dropboxFull: 'Dropbox Full',
    dropboxFullBody: 'Your Dropbox is full, there\'s no space left anymore.',
    dropboxRateLimitedBody: 'Too many requests to Dropbox have been made by this app. Please, try again later.',
    dropboxNetError: 'Dropbox Sync Network Error',
    dropboxNetErrorBody: 'Network error occurred during Dropbox sync. Please, check your connection and try again.',
    dropboxErrorBody: 'Something went wrong during Dropbox sync. Please, try again later. Error code: ',
    dropboxErrorRepeatBody: 'Something went wrong during Dropbox sync. Please, try again later. Error: ',
    dropboxSetupDesc: 'Some configuration is required to use Dropbox in self-hosted app. Please create your own Dropbox app and fill in its key below.',
    dropboxAppKey: 'Dropbox app key',
    dropboxAppKeyDesc: 'Copy the key from your Dropbox app (Developer settings)',
    dropboxFolder: 'App folder',
    dropboxFolderDesc: 'If your app is linked to entire Dropbox (not app folder), set the folder with your Kdbx files here',
    dropboxFolderSettingsDesc: 'Select any folder in your Dropbox where files will be stored (root folder by default)',
    dropboxFolderPlaceholder: 'default folder',
    dropboxLink: 'Link the app to',
    dropboxLinkApp: 'App folder (Apps/KeeWeb)',
    dropboxLinkFull: 'Full Dropbox or any folder',
    dropboxLinkCustom: 'Own Dropbox app',

    launcherSave: 'Save Passwords Database',
    launcherFileFilter: 'KeePass files',

    authPopupRequired: 'Pop-ups are blocked',
    authPopupRequiredBody: 'Please allow pop-ups for this app in your browser.'
};

module.exports = Locale;
