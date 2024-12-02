/** @type {AppTypes.Config} */

window.config = {
  routerBasename: '/v3',
  modes: [],
  extensions: [],
  disableConfirmationPrompts: true,
  disableEditing: true,
  useSharedArrayBuffer: 'AUTO',
  studyListFunctionsEnabled: true,
  showPatientInfo: 'visible',
  showStudyList: true,
  showLoadingIndicator: true,
  maxNumberOfWebWorkers: 3,
  addWindowLevelActionMenu: true,
  // below flag is for performance reasons, but it might not work for all servers
  showWarningMessageForCrossOrigin: false,
  strictZSpacingForVolumeViewport: true,
  showCPUFallbackMessage: false,
  experimentalStudyBrowserSort: false,
  investigationalUseDialog: {
    option: 'never',
  },
  autoPlayCine: true,
  maxNumRequests: {
    interaction: 300,
    thumbnail: 150,
    // Prefetch number is dependent on the http protocol. For http 2 or
    // above, the number of requests can be go a lot higher.
    prefetch: 50,
  },

  studyPrefetcher: {
    /* Enable/disable study prefetching service (default: false) */
    enabled: true,
    /* Number of displaysets to be prefetched  (default: 2)*/
    displaySetCount: 5,
    /**
     * Max number of concurrent prefetch requests (default: 10)
     * High numbers may impact on the time to load a new dropped series because
     * the browser will be busy with all prefetching requests. As soon as the
     * prefetch requests get fulfilled the new ones from the new dropped series
     * are sent to the server.
     *
     * TODO: abort all prefetch requests when a new series is loaded on a viewport.
     * (need to add support for `AbortController` on Cornerstone)
     * */
    maxNumPrefetchRequests: 10,
    /* Display sets loading order (closest (deafult), downward or upward) */
    order: 'closest',
  },

  defaultDataSourceName: 'nova',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'nova',
      configuration: {
        friendlyName: 'NOVA PACS',
        name: 'aws',
        wadoUriRoot: 'https://pacs2.novaimaging.co/dcm4chee-arc/aets/NOVAPACS/wado',
        qidoRoot: 'https://pacs2.novaimaging.co/dcm4chee-arc/aets/NOVAPACS/rs',
        wadoRoot: 'https://pacs2.novaimaging.co/dcm4chee-arc/aets/NOVAPACS/rs',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: true,
        staticWado: true,
        singlepart: 'pdf,video,bulkdata',
        // whether the data source should use retrieveBulkData to grab metadata,
        // and in case of relative path, what would it be relative to, options
        // are in the series level or study level (some servers like series some study)
        //bulkDataURI: {
        //  enabled: true,
        //  relativeResolution: 'studies',
        //},
        dicomUploadEnabled: true,
        acceptHeader: ['multipart/related; type=application/pdf; q=0.6','multipart/related; type=image/jls; q=1','multipart/related; type=application/octet-stream; q=0.5'],
        omitQuotationForMultipartRequest: false,
      },
    },
  ],
  httpErrorHandler: error => {
    // This is 429 when rejected from the public idc sandbox too often.
    console.warn(error.status);

    // Could use services manager here to bring up a dialog/modal if needed.
    console.warn('test, navigate to https://novaimaging.co');
  },
  whiteLabeling: {
    /* Optional: Should return a React component to be rendered in the "Logo" section of the application's Top Navigation bar */
    createLogoComponentFn: function (React) {
      return React.createElement(
        'a',
        {
          target: '_self',
          rel: 'noopener noreferrer',
          className: 'text-purple-600 line-through',
          href: 'https://novaimaging.co/',
        },
        React.createElement('img',
          {
            src: './nova-dark.svg',
            className: 'w-20 h-10',
          }
        ))
    },
  },
  hotkeys: [
    {
      commandName: 'incrementActiveViewport',
      label: 'Next Viewport',
      keys: ['right'],
    },
    {
      commandName: 'decrementActiveViewport',
      label: 'Previous Viewport',
      keys: ['left'],
    },
    { commandName: 'rotateViewportCW', label: 'Rotate Right', keys: ['r'] },
    { commandName: 'rotateViewportCCW', label: 'Rotate Left', keys: ['l'] },
    { commandName: 'invertViewport', label: 'Invert', keys: ['i'] },
    {
      commandName: 'flipViewportHorizontal',
      label: 'Flip Horizontally',
      keys: ['h'],
    },
    {
      commandName: 'flipViewportVertical',
      label: 'Flip Vertically',
      keys: ['v'],
    },
    { commandName: 'scaleUpViewport', label: 'Zoom In', keys: ['+'] },
    { commandName: 'scaleDownViewport', label: 'Zoom Out', keys: ['-'] },
    { commandName: 'fitViewportToWindow', label: 'Zoom to Fit', keys: ['='] },
    { commandName: 'resetViewport', label: 'Reset', keys: ['space'] },
    { commandName: 'nextImage', label: 'Next Image', keys: ['down'] },
    { commandName: 'previousImage', label: 'Previous Image', keys: ['up'] },
    // {
    //   commandName: 'previousViewportDisplaySet',
    //   label: 'Previous Series',
    //   keys: ['pagedown'],
    // },
    // {
    //   commandName: 'nextViewportDisplaySet',
    //   label: 'Next Series',
    //   keys: ['pageup'],
    // },
    { commandName: 'setZoomTool', label: 'Zoom', keys: ['z'] },
    // ~ Window level presets
    {
      commandName: 'windowLevelPreset1',
      label: 'W/L Preset 1',
      keys: ['1'],
    },
    {
      commandName: 'windowLevelPreset2',
      label: 'W/L Preset 2',
      keys: ['2'],
    },
    {
      commandName: 'windowLevelPreset3',
      label: 'W/L Preset 3',
      keys: ['3'],
    },
    {
      commandName: 'windowLevelPreset4',
      label: 'W/L Preset 4',
      keys: ['4'],
    },
    {
      commandName: 'windowLevelPreset5',
      label: 'W/L Preset 5',
      keys: ['5'],
    },
    {
      commandName: 'windowLevelPreset6',
      label: 'W/L Preset 6',
      keys: ['6'],
    },
    {
      commandName: 'windowLevelPreset7',
      label: 'W/L Preset 7',
      keys: ['7'],
    },
    {
      commandName: 'windowLevelPreset8',
      label: 'W/L Preset 8',
      keys: ['8'],
    },
    {
      commandName: 'windowLevelPreset9',
      label: 'W/L Preset 9',
      keys: ['9'],
    },
  ],
};
