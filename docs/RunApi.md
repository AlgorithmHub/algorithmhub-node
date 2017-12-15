# algorithmhub.RunApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFileRun**](RunApi.md#addFileRun) | **POST** /run/{rid}/file | PRIVATE
[**detailRun**](RunApi.md#detailRun) | **GET** /run/{rid} | Get info about run
[**getInput**](RunApi.md#getInput) | **GET** /run/{rid}/input | Input parameters
[**getOutput**](RunApi.md#getOutput) | **GET** /run/{rid}/output | Get the output
[**getOutputFigure**](RunApi.md#getOutputFigure) | **GET** /run/{rid}/figure/{fid}/* | Get figure as app
[**getOutputFile**](RunApi.md#getOutputFile) | **GET** /run/{rid}/file/{filename} | Get a file
[**getStatus**](RunApi.md#getStatus) | **GET** /run/{rid}/status | Get status of the run
[**listOutputFigures**](RunApi.md#listOutputFigures) | **GET** /run/{rid}/figures | Get list of figures
[**listOutputFiles**](RunApi.md#listOutputFiles) | **GET** /run/{rid}/files | Get list of output files
[**listRuns**](RunApi.md#listRuns) | **GET** /run | Get list of runs
[**postError**](RunApi.md#postError) | **POST** /run/{rid}/error | PRIVATE
[**postFigure**](RunApi.md#postFigure) | **POST** /run/{rid}/figure | PRIVATE
[**postStatus**](RunApi.md#postStatus) | **POST** /run/{rid}/status | PRIVATE
[**setSuccess**](RunApi.md#setSuccess) | **POST** /run/{rid} | PRIVATE


<a name="addFileRun"></a>
# **addFileRun**
> &#39;String&#39; addFileRun(rid)

PRIVATE

Add a file to the run results

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id

apiInstance.addFileRun(rid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="detailRun"></a>
# **detailRun**
> InlineResponse2005 detailRun(rid)

Get info about run

Get info about the run

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id

apiInstance.detailRun(rid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getInput"></a>
# **getInput**
> InlineResponse2006 getInput(rid)

Input parameters

Input parameters

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id

apiInstance.getInput(rid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getOutput"></a>
# **getOutput**
> Object getOutput(rid)

Get the output

Get the output

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id

apiInstance.getOutput(rid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getOutputFigure"></a>
# **getOutputFigure**
> File getOutputFigure(rid, fid)

Get figure as app

Get figure as app

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id

var fid = "fid_example"; // String | The file id

apiInstance.getOutputFigure(rid, fid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 
 **fid** | **String**| The file id | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getOutputFile"></a>
# **getOutputFile**
> InlineResponse2008 getOutputFile(rid, filename)

Get a file

Get a file

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id

var filename = "filename_example"; // String | The filename

apiInstance.getOutputFile(rid, filename).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 
 **filename** | **String**| The filename | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getStatus"></a>
# **getStatus**
> &#39;String&#39; getStatus(rid)

Get status of the run

Get status of the run

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id

apiInstance.getStatus(rid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listOutputFigures"></a>
# **listOutputFigures**
> InlineResponse2009 listOutputFigures(rid)

Get list of figures

Get list of figures

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id

apiInstance.listOutputFigures(rid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listOutputFiles"></a>
# **listOutputFiles**
> InlineResponse2007 listOutputFiles(rid)

Get list of output files

Get list of output files

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id

apiInstance.listOutputFiles(rid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listRuns"></a>
# **listRuns**
> InlineResponse2004 listRuns()

Get list of runs

Get list of runs

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();
apiInstance.listRuns().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postError"></a>
# **postError**
> &#39;String&#39; postError(rid)

PRIVATE

Post that an error occured and close the run.

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The workspace base type.

apiInstance.postError(rid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The workspace base type. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postFigure"></a>
# **postFigure**
> &#39;String&#39; postFigure(rid)

PRIVATE

Add a figure from the run

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The workspace base type.

apiInstance.postFigure(rid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The workspace base type. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postStatus"></a>
# **postStatus**
> &#39;String&#39; postStatus(rid)

PRIVATE

Post the status of run

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id

apiInstance.postStatus(rid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="setSuccess"></a>
# **setSuccess**
> setSuccess(rid)

PRIVATE

Send output.json and close the run as successful

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id

apiInstance.setSuccess(rid).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

