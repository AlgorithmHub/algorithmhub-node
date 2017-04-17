# algorithmhub.UnitTestsApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runKeyboardInterrupt**](UnitTestsApi.md#runKeyboardInterrupt) | **GET** /run/{rid}/test/keyboardInterrupt | Check for keyboard interrupt
[**runRuntimeError**](UnitTestsApi.md#runRuntimeError) | **GET** /run/{rid}/test/runtimeError | Check for keyboard interrupt
[**validatModel**](UnitTestsApi.md#validatModel) | **GET** /model/{mid}/test/validate | Runs the unit test cases
[**validateData**](UnitTestsApi.md#validateData) | **GET** /data/{did}/test/validate | Checks valid data set
[**validateRun**](UnitTestsApi.md#validateRun) | **GET** /run/{rid}/test/validate | Runs the unit test cases


<a name="runKeyboardInterrupt"></a>
# **runKeyboardInterrupt**
> InlineResponse2007 runKeyboardInterrupt(rid)

Check for keyboard interrupt

Check for keyboard interrupt during run

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.UnitTestsApi();

var rid = "rid_example"; // String | The run id

apiInstance.runKeyboardInterrupt(rid).then(function(data) {
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

<a name="runRuntimeError"></a>
# **runRuntimeError**
> InlineResponse2007 runRuntimeError(rid)

Check for keyboard interrupt

Check for keyboard interrupt during run

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.UnitTestsApi();

var rid = "rid_example"; // String | The run id

apiInstance.runRuntimeError(rid).then(function(data) {
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

<a name="validatModel"></a>
# **validatModel**
> InlineResponse2007 validatModel(mid)

Runs the unit test cases

Runs the unit test cases specified for Model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.UnitTestsApi();

var mid = "mid_example"; // String | The model id

apiInstance.validatModel(mid).then(function(data) {
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

<a name="validateData"></a>
# **validateData**
> InlineResponse2007 validateData(did)

Checks valid data set

Checking for valid data set

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.UnitTestsApi();

var did = "did_example"; // String | The dataset id

apiInstance.validateData(did).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **String**| The dataset id | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="validateRun"></a>
# **validateRun**
> InlineResponse2007 validateRun(rid)

Runs the unit test cases

Runs the unit test cases specified for Run

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.UnitTestsApi();

var rid = "rid_example"; // String | The run id

apiInstance.validateRun(rid).then(function(data) {
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

