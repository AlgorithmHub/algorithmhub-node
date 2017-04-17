# algorithmhub.WorkspaceApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloneWorkspace**](WorkspaceApi.md#cloneWorkspace) | **POST** /workspace/{wsid}/clone | Clone the workspace
[**createWorkspace**](WorkspaceApi.md#createWorkspace) | **POST** /workspace | Creates new workspace
[**deleteWorkspace**](WorkspaceApi.md#deleteWorkspace) | **DELETE** /workspace/{wsid} | Delete an existing workspace
[**detailWorkspace**](WorkspaceApi.md#detailWorkspace) | **GET** /workspace/{wsid} | Gets workspace metadata
[**listServices**](WorkspaceApi.md#listServices) | **GET** /workspace/{wsid}/model | Get models associated
[**listServices_0**](WorkspaceApi.md#listServices_0) | **GET** /workspace/{wsid}/service | Get models associated
[**listWorkspaces**](WorkspaceApi.md#listWorkspaces) | **GET** /workspace | Returns list of workspaces
[**publishWorkspace**](WorkspaceApi.md#publishWorkspace) | **POST** /workspace/{wsid}/publish | Publish workspace to repo
[**shareWorkspace**](WorkspaceApi.md#shareWorkspace) | **POST** /workspace/{wsid}/share | Share workspace with another user
[**turnOffWorkspace**](WorkspaceApi.md#turnOffWorkspace) | **POST** /workspace/{wsid}/off | Turn off the workspace
[**turnOnWorkspace**](WorkspaceApi.md#turnOnWorkspace) | **POST** /workspace/{wsid}/on | Turn on the workspace


<a name="cloneWorkspace"></a>
# **cloneWorkspace**
> &#39;String&#39; cloneWorkspace(wsid)

Clone the workspace

Clone the given workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wsid = "wsid_example"; // String | The workspace base type.

apiInstance.cloneWorkspace(wsid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wsid** | **String**| The workspace base type. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createWorkspace"></a>
# **createWorkspace**
> &#39;String&#39; createWorkspace(body)

Creates new workspace

Creates a new workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var body = new algorithmhub.Body4(); // Body4 | The workspace type

apiInstance.createWorkspace(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body4**](Body4.md)| The workspace type | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteWorkspace"></a>
# **deleteWorkspace**
> &#39;String&#39; deleteWorkspace(wsid)

Delete an existing workspace

Delete an existing workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wsid = "wsid_example"; // String | The workspace id

apiInstance.deleteWorkspace(wsid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wsid** | **String**| The workspace id | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="detailWorkspace"></a>
# **detailWorkspace**
> InlineResponse2003 detailWorkspace(wsid)

Gets workspace metadata

Gets workspace metadata

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wsid = "wsid_example"; // String | The workspace id

apiInstance.detailWorkspace(wsid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wsid** | **String**| The workspace id | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listServices"></a>
# **listServices**
> [InlineResponse2004] listServices(wsid)

Get models associated

Get models associated with an exsisting workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wsid = "wsid_example"; // String | The workspace base type.

apiInstance.listServices(wsid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wsid** | **String**| The workspace base type. | 

### Return type

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listServices_0"></a>
# **listServices_0**
> [InlineResponse2004] listServices_0(wsid)

Get models associated

Get models associated with an exsisting workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wsid = "wsid_example"; // String | The workspace base type.

apiInstance.listServices_0(wsid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wsid** | **String**| The workspace base type. | 

### Return type

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listWorkspaces"></a>
# **listWorkspaces**
> [InlineResponse2003] listWorkspaces()

Returns list of workspaces

Returns a list of workspaces

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();
apiInstance.listWorkspaces().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse2003]**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="publishWorkspace"></a>
# **publishWorkspace**
> &#39;String&#39; publishWorkspace(wsid)

Publish workspace to repo

Publish current workspace to repo

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wsid = "wsid_example"; // String | The workspace base type.

apiInstance.publishWorkspace(wsid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wsid** | **String**| The workspace base type. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="shareWorkspace"></a>
# **shareWorkspace**
> &#39;String&#39; shareWorkspace(wsid)

Share workspace with another user

Share workspace with another user

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wsid = "wsid_example"; // String | The workspace base type.

apiInstance.shareWorkspace(wsid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wsid** | **String**| The workspace base type. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="turnOffWorkspace"></a>
# **turnOffWorkspace**
> &#39;String&#39; turnOffWorkspace(wsid)

Turn off the workspace

Turn off the workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wsid = "wsid_example"; // String | The workspace base type.

apiInstance.turnOffWorkspace(wsid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wsid** | **String**| The workspace base type. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="turnOnWorkspace"></a>
# **turnOnWorkspace**
> &#39;String&#39; turnOnWorkspace(wsid)

Turn on the workspace

Turn on the workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wsid = "wsid_example"; // String | The workspace base type.

apiInstance.turnOnWorkspace(wsid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wsid** | **String**| The workspace base type. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

