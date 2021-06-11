// modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:17008 Uncaught Error: Objects are not valid as a React child (found: object with keys {title, url}). If you meant to render a collection of children, use an array instead.
//     in li (created by Task)
//     in Task (created by Info)
//     in ul (created by Info)
//     in div (created by Info)
//     in Info (created by App)
//     in div (created by App)
//     in App
//     at throwOnInvalidObjectType (modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:17008)
//     at createChild (modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:17246)
//     at reconcileChildrenArray (modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:17495)
//     at reconcileChildFibers (modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:17900)
//     at reconcileChildren (modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:20357)
//     at updateHostComponent (modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:20897)
//     at beginWork (modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:22222)
//     at HTMLUnknownElement.callCallback (modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:3783)
//     at Object.invokeGuardedCallbackDev (modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:3832)
//     at invokeGuardedCallback (modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:3887)
// throwOnInvalidObjectType @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:17008
// createChild @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:17246
// reconcileChildrenArray @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:17495
// reconcileChildFibers @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:17900
// reconcileChildren @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:20357
// updateHostComponent @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:20897
// beginWork @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:22222
// callCallback @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:3783
// invokeGuardedCallbackDev @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:3832
// invokeGuardedCallback @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:3887
// beginWork$1 @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:26798
// performUnitOfWork @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:25749
// workLoopSync @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:25725
// performSyncWorkOnRoot @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:25351
// (anonymous) @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:14684
// unstable_runWithPriority @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:29337
// runWithPriority$1 @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:14634
// flushSyncCallbackQueueImpl @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:14679
// flushSyncCallbackQueue @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:14667
// scheduleUpdateOnFiber @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:24794
// dispatchAction @ modules.js?hash=7274f2fab27ca6dd1243876db6df82b8b23ca03f:19255
// (anonymous) @ useTracker.ts:73
// _compute @ tracker.js:308
// _recompute @ tracker.js:324
// Tracker._runFlush @ tracker.js:495
// onGlobalMessage @ meteor.js?hash=857dafb4b9dff17e29ed8498a22ea5b1a3d6b41d:515
// postMessage (async)
// setImmediate @ meteor.js?hash=857dafb4b9dff17e29ed8498a22ea5b1a3d6b41d:535
// requireFlush @ tracker.js:129
// invalidate @ tracker.js:264
// changed @ tracker.js:422
// (anonymous) @ cursor.js:293
// SQp.runTask @ meteor.js?hash=857dafb4b9dff17e29ed8498a22ea5b1a3d6b41d:849
// SQp.flush @ meteor.js?hash=857dafb4b9dff17e29ed8498a22ea5b1a3d6b41d:878
// SQp.drain @ meteor.js?hash=857dafb4b9dff17e29ed8498a22ea5b1a3d6b41d:887
// resumeObservers @ local_collection.js:306
// endUpdate @ collection.js:239
// store.<computed> @ livedata_connection.js:312
// (anonymous) @ livedata_connection.js:1206
// _performWrites @ livedata_connection.js:1205
// _flushBufferedWrites @ livedata_connection.js:1162
// (anonymous) @ meteor.js?hash=857dafb4b9dff17e29ed8498a22ea5b1a3d6b41d:1234
// setTimeout (async)
// _livedata_data @ livedata_connection.js:1143
// onMessage @ livedata_connection.js:1655
// (anonymous) @ browser.js:186
// forEachCallback @ common.js:30
// socket.onmessage @ browser.js:185
// REventTarget.dispatchEvent @ sockjs-0.3.4.js:87
// SockJS._dispatchMessage @ sockjs-0.3.4.js:1078
// SockJS._didMessage @ sockjs-0.3.4.js:1138
// that.ws.onmessage @ sockjs-0.3.4.js:1285
// 5react_devtools_backend.js:2560 The above error occurred in the <li> component:
//     in li (created by Task)
//     in Task (created by Info)
//     in ul (created by Info)
//     in div (created by Info)
//     in Info (created by App)
//     in div (created by App)
//     in App

// Consider adding an error boundary to your tree to customize error handling behavior.
// Visit https://fb.me/react-error-boundaries to learn more about error boundaries.