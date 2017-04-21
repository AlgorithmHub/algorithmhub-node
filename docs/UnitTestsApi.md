# algorithmhub.UnitTestsApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTest**](UnitTestsApi.md#createTest) | **POST** /model/{mid}/test | Create new spec test
[**deleteTest**](UnitTestsApi.md#deleteTest) | **DELETE** /model/{mid}/test/{tid} | Delete a spec test
[**listTest**](UnitTestsApi.md#listTest) | **GET** /model/{mid}/test | List spec tests
[**runKeyboardInterrupt**](UnitTestsApi.md#runKeyboardInterrupt) | **GET** /run/{rid}/test/keyboardInterrupt | Check for keyboard interrupt
[**runRuntimeError**](UnitTestsApi.md#runRuntimeError) | **GET** /run/{rid}/test/runtimeError | Check for runtime error
[**runTest**](UnitTestsApi.md#runTest) | **POST** /model/{mid}/test/{tid} | Run the tests
[**updateTest**](UnitTestsApi.md#updateTest) | **PUT** /model/{mid}/test/{tid} | Update a spec test
[**validateData**](UnitTestsApi.md#validateData) | **GET** /data/{did}/test/validate | Checks valid data set
[**validateModel**](UnitTestsApi.md#validateModel) | **GET** /model/{mid}/test/validate | Runs the unit test cases
[**validateRun**](UnitTestsApi.md#validateRun) | **GET** /run/{rid}/test/validate | Runs the unit test cases


<a name="createTest"></a>
# **createTest**
> InlineResponse20016 createTest(mid)

Create new spec test

Create new spec test

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.UnitTestsApi();

var mid = "mid_example"; // String | The model id

apiInstance.createTest(mid).then(function(data) {
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

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteTest"></a>
# **deleteTest**
> InlineResponse20016 deleteTest(mid, tid)

Delete a spec test

Delete a spec test

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.UnitTestsApi();

var mid = "mid_example"; // String | The model id

var tid = "tid_example"; // String | The test id

apiInstance.deleteTest(mid, tid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id | 
 **tid** | **String**| The test id | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listTest"></a>
# **listTest**
> InlineResponse20016 listTest(mid)

List spec tests

List spec tests

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.UnitTestsApi();

var mid = "mid_example"; // String | The model id

apiInstance.listTest(mid).then(function(data) {
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

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="runKeyboardInterrupt"></a>
# **runKeyboardInterrupt**
> InlineResponse20016 runKeyboardInterrupt(rid)

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

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="runRuntimeError"></a>
# **runRuntimeError**
> InlineResponse20016 runRuntimeError(rid)

Check for runtime error

Check for any error that occurs during run

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

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="runTest"></a>
# **runTest**
> InlineResponse20016 runTest(mid, tid)

Run the tests

Run the tests

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.UnitTestsApi();

var mid = "mid_example"; // String | The model id

var tid = "tid_example"; // String | The test id

apiInstance.runTest(mid, tid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id | 
 **tid** | **String**| The test id | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateTest"></a>
# **updateTest**
> InlineResponse20016 updateTest(mid, tid)

Update a spec test

Update a spec test

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.UnitTestsApi();

var mid = "mid_example"; // String | The model id

var tid = "tid_example"; // String | The test id

apiInstance.updateTest(mid, tid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id | 
 **tid** | **String**| The test id | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="validateData"></a>
# **validateData**
> InlineResponse20015 validateData(did)

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

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="validateModel"></a>
# **validateModel**
> InlineResponse20016 validateModel(mid)

Runs the unit test cases

Runs the unit test cases specified for model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.UnitTestsApi();

var mid = "mid_example"; // String | The model id

apiInstance.validateModel(mid).then(function(data) {
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

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="validateRun"></a>
# **validateRun**
> InlineResponse20016 validateRun(rid)

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

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

