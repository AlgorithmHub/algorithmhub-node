# algorithmhub.BenchmarkTestsApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBenchmark**](BenchmarkTestsApi.md#createBenchmark) | **POST** /model/{mid}/benchmark | Create new benchmark
[**deleteBenchmark**](BenchmarkTestsApi.md#deleteBenchmark) | **DELETE** /model/{mid}/benchmark/{bid} | Delete a benchmark
[**listBenchmark**](BenchmarkTestsApi.md#listBenchmark) | **GET** /model/{mid}/benchmark | List benchmark tests
[**runBenchmark**](BenchmarkTestsApi.md#runBenchmark) | **GET** /model/{mid}/benchmark/{bid} | Run benchmark
[**updateBenchmark**](BenchmarkTestsApi.md#updateBenchmark) | **PUT** /model/{mid}/benchmark/{bid} | Update a benchmark
[**validateBenchmark**](BenchmarkTestsApi.md#validateBenchmark) | **GET** /run/{mid}/benchmark/results | Validation using default parameters


<a name="createBenchmark"></a>
# **createBenchmark**
> createBenchmark(mid)

Create new benchmark

Create a new benchmark

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.BenchmarkTestsApi();

var mid = "mid_example"; // String | The model id

apiInstance.createBenchmark(mid).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteBenchmark"></a>
# **deleteBenchmark**
> deleteBenchmark(mid, bid)

Delete a benchmark

Delete a benchmark

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.BenchmarkTestsApi();

var mid = "mid_example"; // String | The model id

var bid = "bid_example"; // String | The benchmark id

apiInstance.deleteBenchmark(mid, bid).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id | 
 **bid** | **String**| The benchmark id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listBenchmark"></a>
# **listBenchmark**
> InlineResponse20018 listBenchmark(mid)

List benchmark tests

List benchmark tests associated with this model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.BenchmarkTestsApi();

var mid = "mid_example"; // String | The model id

apiInstance.listBenchmark(mid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id | 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="runBenchmark"></a>
# **runBenchmark**
> InlineResponse20019 runBenchmark(mid, bid)

Run benchmark

Run benchmark

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.BenchmarkTestsApi();

var mid = "mid_example"; // String | The model id

var bid = "bid_example"; // String | The benchmark id

apiInstance.runBenchmark(mid, bid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id | 
 **bid** | **String**| The benchmark id | 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateBenchmark"></a>
# **updateBenchmark**
> updateBenchmark(mid, bid)

Update a benchmark

Update a benchmark

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.BenchmarkTestsApi();

var mid = "mid_example"; // String | The model id

var bid = "bid_example"; // String | The benchmark id

apiInstance.updateBenchmark(mid, bid).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id | 
 **bid** | **String**| The benchmark id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="validateBenchmark"></a>
# **validateBenchmark**
> Object validateBenchmark(mid)

Validation using default parameters

Does the validation part of the model and it uses the default parameters

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.BenchmarkTestsApi();

var mid = "mid_example"; // String | The model id

apiInstance.validateBenchmark(mid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

