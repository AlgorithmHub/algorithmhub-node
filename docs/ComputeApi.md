# algorithmhub.ComputeApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompute**](ComputeApi.md#createCompute) | **POST** /compute | Creates new compute
[**deleteCompute**](ComputeApi.md#deleteCompute) | **DELETE** /compute/{cnid} | Delete an existing compute
[**detailCompute**](ComputeApi.md#detailCompute) | **GET** /compute/{cnid} | Gets compute metadata
[**listCompute**](ComputeApi.md#listCompute) | **GET** /compute | Returns list of compute resources


<a name="createCompute"></a>
# **createCompute**
> InlineResponse20014 createCompute(body)

Creates new compute

Creates a new compute

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ComputeApi();

var body = new algorithmhub.Body3(); // Body3 | The compute parameters

apiInstance.createCompute(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body3**](Body3.md)| The compute parameters | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteCompute"></a>
# **deleteCompute**
> InlineResponse20014 deleteCompute(cnid)

Delete an existing compute

Delete an existing compute

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ComputeApi();

var cnid = "cnid_example"; // String | The compute id

apiInstance.deleteCompute(cnid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnid** | **String**| The compute id | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="detailCompute"></a>
# **detailCompute**
> InlineResponse20014 detailCompute(cnid)

Gets compute metadata

Gets compute metadata

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ComputeApi();

var cnid = "cnid_example"; // String | The compute id

apiInstance.detailCompute(cnid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnid** | **String**| The compute id | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listCompute"></a>
# **listCompute**
> [InlineResponse20014] listCompute()

Returns list of compute resources

Returns a list of compute resources

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ComputeApi();
apiInstance.listCompute().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse20014]**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

