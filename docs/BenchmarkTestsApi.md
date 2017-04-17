# algorithmhub.BenchmarkTestsApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateBenchmark**](BenchmarkTestsApi.md#validateBenchmark) | **GET** /run/{mid}/benchmark/results | Validation using default parameters


<a name="validateBenchmark"></a>
# **validateBenchmark**
> InlineResponse2007 validateBenchmark(mid)

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

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

