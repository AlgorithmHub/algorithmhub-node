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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addFileRun(rid, callback);
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
> InlineResponse2002 detailRun(rid)

Get info about run

Get info about the run

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.detailRun(rid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getInput"></a>
# **getInput**
> Object getInput(rid)

Input parameters

Input parameters

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInput(rid, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOutput(rid, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOutputFigure(rid, fid, callback);
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
> File getOutputFile(rid, filename)

Get a file

Get a file

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id

var filename = "filename_example"; // String | The filename


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOutputFile(rid, filename, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rid** | **String**| The run id | 
 **filename** | **String**| The filename | 

### Return type

**File**

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStatus(rid, callback);
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
> &#39;String&#39; listOutputFigures(rid)

Get list of figures

Get list of figures

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOutputFigures(rid, callback);
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

<a name="listOutputFiles"></a>
# **listOutputFiles**
> &#39;String&#39; listOutputFiles(rid)

Get list of output files

Get list of output files

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var rid = "rid_example"; // String | The run id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listOutputFiles(rid, callback);
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

<a name="listRuns"></a>
# **listRuns**
> [Object] listRuns()

Get list of runs

Get list of runs

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.RunApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listRuns(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postError(rid, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postFigure(rid, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postStatus(rid, callback);
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


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setSuccess(rid, callback);
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
