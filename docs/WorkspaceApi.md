# algorithmhub.WorkspaceApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloneWorkspace**](WorkspaceApi.md#cloneWorkspace) | **POST** /workspace/{wmid}/clone | Clone the workspace
[**createWorkspace**](WorkspaceApi.md#createWorkspace) | **POST** /workspace | Creates new workspace
[**deleteWorkspace**](WorkspaceApi.md#deleteWorkspace) | **DELETE** /workspace/{wmid} | Delete an existing workspace
[**detailWorkspace**](WorkspaceApi.md#detailWorkspace) | **GET** /workspace/{wmid} | Gets workspace metadata
[**listServices**](WorkspaceApi.md#listServices) | **GET** /workspace/{wmid}/model | Get models associated
[**listServices_0**](WorkspaceApi.md#listServices_0) | **GET** /workspace/{wmid}/service | Get models associated
[**listWorkspaces**](WorkspaceApi.md#listWorkspaces) | **GET** /workspace | Returns list of workspaces
[**publishWorkspace**](WorkspaceApi.md#publishWorkspace) | **POST** /workspace/{wmid}/publish | Publish workspace to repo
[**shareWorkspace**](WorkspaceApi.md#shareWorkspace) | **POST** /workspace/{wmid}/share | Share workspace with another user
[**turnOffWorkspace**](WorkspaceApi.md#turnOffWorkspace) | **POST** /workspace/{wmid}/off | Turn off the workspace
[**turnOnWorkspace**](WorkspaceApi.md#turnOnWorkspace) | **POST** /workspace/{wmid}/on | Turn on the workspace


<a name="cloneWorkspace"></a>
# **cloneWorkspace**
> &#39;String&#39; cloneWorkspace(wmid)

Clone the workspace

Clone the given workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wmid = "wmid_example"; // String | The workspace base type.

apiInstance.cloneWorkspace(wmid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wmid** | **String**| The workspace base type. | 

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

var body = new algorithmhub.Body2(); // Body2 | The workspace type

apiInstance.createWorkspace(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body2**](Body2.md)| The workspace type | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteWorkspace"></a>
# **deleteWorkspace**
> &#39;String&#39; deleteWorkspace(wmid)

Delete an existing workspace

Delete an existing workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wmid = "wmid_example"; // String | The workspace id

apiInstance.deleteWorkspace(wmid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wmid** | **String**| The workspace id | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="detailWorkspace"></a>
# **detailWorkspace**
> InlineResponse20010 detailWorkspace(wmid)

Gets workspace metadata

Gets workspace metadata

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wmid = "wmid_example"; // String | The workspace id

apiInstance.detailWorkspace(wmid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wmid** | **String**| The workspace id | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listServices"></a>
# **listServices**
> [InlineResponse20011] listServices(wmid)

Get models associated

Get models associated with an exsisting workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wmid = "wmid_example"; // String | The workspace base type.

apiInstance.listServices(wmid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wmid** | **String**| The workspace base type. | 

### Return type

[**[InlineResponse20011]**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listServices_0"></a>
# **listServices_0**
> [InlineResponse20011] listServices_0(wmid)

Get models associated

Get models associated with an exsisting workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wmid = "wmid_example"; // String | The workspace base type.

apiInstance.listServices_0(wmid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wmid** | **String**| The workspace base type. | 

### Return type

[**[InlineResponse20011]**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listWorkspaces"></a>
# **listWorkspaces**
> [InlineResponse20010] listWorkspaces()

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

[**[InlineResponse20010]**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="publishWorkspace"></a>
# **publishWorkspace**
> &#39;String&#39; publishWorkspace(wmid)

Publish workspace to repo

Publish current workspace to repo

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wmid = "wmid_example"; // String | The workspace base type.

apiInstance.publishWorkspace(wmid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wmid** | **String**| The workspace base type. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="shareWorkspace"></a>
# **shareWorkspace**
> &#39;String&#39; shareWorkspace(wmid)

Share workspace with another user

Share workspace with another user

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wmid = "wmid_example"; // String | The workspace base type.

apiInstance.shareWorkspace(wmid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wmid** | **String**| The workspace base type. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="turnOffWorkspace"></a>
# **turnOffWorkspace**
> &#39;String&#39; turnOffWorkspace(wmid)

Turn off the workspace

Turn off the workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wmid = "wmid_example"; // String | The workspace base type.

apiInstance.turnOffWorkspace(wmid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wmid** | **String**| The workspace base type. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="turnOnWorkspace"></a>
# **turnOnWorkspace**
> &#39;String&#39; turnOnWorkspace(wmid)

Turn on the workspace

Turn on the workspace

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.WorkspaceApi();

var wmid = "wmid_example"; // String | The workspace base type.

apiInstance.turnOnWorkspace(wmid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wmid** | **String**| The workspace base type. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

