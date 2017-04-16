# algorithmhub.DataApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteData**](DataApi.md#deleteData) | **DELETE** /data/{did} | Deletes the data object
[**downloadData**](DataApi.md#downloadData) | **GET** /data/{did} | Get the data object
[**getData**](DataApi.md#getData) | **GET** /data/{did}/info | Get information on the data
[**listData**](DataApi.md#listData) | **GET** /data | Return a list of data
[**uploadData**](DataApi.md#uploadData) | **POST** /data | Upload data


<a name="deleteData"></a>
# **deleteData**
> deleteData(did)

Deletes the data object

Deletes the data object

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.DataApi();

var did = "did_example"; // String | The data id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteData(did, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **String**| The data id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="downloadData"></a>
# **downloadData**
> File downloadData(did)

Get the data object

Get the data object as a file

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.DataApi();

var did = "did_example"; // String | The data id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.downloadData(did, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **String**| The data id | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getData"></a>
# **getData**
> InlineResponse2005 getData(did)

Get information on the data

Get information on the data object

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.DataApi();

var did = "did_example"; // String | The workspace base type.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getData(did, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **String**| The workspace base type. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listData"></a>
# **listData**
> [InlineResponse2005] listData()

Return a list of data

Return a list data objects owned by user

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.DataApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listData(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse2005]**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="uploadData"></a>
# **uploadData**
> InlineResponse2006 uploadData(file)

Upload data

Upload a data file and get data id

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.DataApi();

var file = "/path/to/file.txt"; // File | The file to upload.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadData(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The file to upload. | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

