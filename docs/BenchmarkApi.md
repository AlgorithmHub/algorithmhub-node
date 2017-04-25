# algorithmhub.BenchmarkApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBenchmark**](BenchmarkApi.md#createBenchmark) | **POST** /benchmark | Create Benchmark
[**getInfoBenchmark**](BenchmarkApi.md#getInfoBenchmark) | **GET** /benchmark/{bid} | Get benchmark info
[**listBenchmark**](BenchmarkApi.md#listBenchmark) | **GET** /benchmark/{bid}/models | Get benchmark list


<a name="createBenchmark"></a>
# **createBenchmark**
> createBenchmark()

Create Benchmark

Create a new Benchmark

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.BenchmarkApi();
apiInstance.createBenchmark().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getInfoBenchmark"></a>
# **getInfoBenchmark**
> getInfoBenchmark(bid)

Get benchmark info

Get benchmark info

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.BenchmarkApi();

var bid = "bid_example"; // String | The benchmark id

apiInstance.getInfoBenchmark(bid).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
> listBenchmark(bid)

Get benchmark list

Get a list of models associated with this benchmark

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.BenchmarkApi();

var bid = "bid_example"; // String | The benchmark id

apiInstance.listBenchmark(bid).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bid** | **String**| The benchmark id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

