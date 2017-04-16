# algorithmhub.ModelApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createModel**](ModelApi.md#createModel) | **POST** /model | Create a new model
[**createModel_0**](ModelApi.md#createModel_0) | **POST** /service | Create a new model
[**deleteModel**](ModelApi.md#deleteModel) | **DELETE** /model/{sid} | Delete details of model
[**deleteModel_0**](ModelApi.md#deleteModel_0) | **DELETE** /service/{sid} | Delete details of model
[**detailModel**](ModelApi.md#detailModel) | **GET** /model/{sid} | Get details of model
[**detailModel_0**](ModelApi.md#detailModel_0) | **GET** /service/{sid} | Get details of model
[**editModel**](ModelApi.md#editModel) | **PUT** /model/{sid} | Edit a model
[**editModel_0**](ModelApi.md#editModel_0) | **PUT** /service/{sid} | Edit a model
[**listModels**](ModelApi.md#listModels) | **GET** /model | Return models owned
[**listModels_0**](ModelApi.md#listModels_0) | **GET** /service | Return models owned
[**runModel**](ModelApi.md#runModel) | **POST** /model/{sid} | Run a model
[**runModel_0**](ModelApi.md#runModel_0) | **POST** /service/{sid} | Run a model


<a name="createModel"></a>
# **createModel**
> &#39;String&#39; createModel(body)

Create a new model

Create a new model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var body = new algorithmhub.Body(); // Body | The model configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModel(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)| The model configuration | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createModel_0"></a>
# **createModel_0**
> &#39;String&#39; createModel_0(body)

Create a new model

Create a new model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var body = new algorithmhub.Body2(); // Body2 | The model configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModel_0(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body2**](Body2.md)| The model configuration | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteModel"></a>
# **deleteModel**
> &#39;String&#39; deleteModel(sid)

Delete details of model

Deletes a single model based on the ID supplied

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var sid = "sid_example"; // String | Deletes the model based on the model id provided


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteModel(sid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **String**| Deletes the model based on the model id provided | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteModel_0"></a>
# **deleteModel_0**
> &#39;String&#39; deleteModel_0(sid)

Delete details of model

Deletes a single model based on the ID supplied

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var sid = "sid_example"; // String | Deletes the model based on the model id provided


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteModel_0(sid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **String**| Deletes the model based on the model id provided | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="detailModel"></a>
# **detailModel**
> InlineResponse2001 detailModel(sid)

Get details of model

Get details for an existing model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var sid = "sid_example"; // String | The model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.detailModel(sid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **String**| The model id | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="detailModel_0"></a>
# **detailModel_0**
> InlineResponse2001 detailModel_0(sid)

Get details of model

Get details for an existing model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var sid = "sid_example"; // String | The model id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.detailModel_0(sid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **String**| The model id | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="editModel"></a>
# **editModel**
> &#39;String&#39; editModel(sid, body)

Edit a model

Edit an existing model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var sid = "sid_example"; // String | The model id that needs to be edited

var body = new algorithmhub.Body1(); // Body1 | The model configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editModel(sid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **String**| The model id that needs to be edited | 
 **body** | [**Body1**](Body1.md)| The model configuration | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="editModel_0"></a>
# **editModel_0**
> &#39;String&#39; editModel_0(sid, body)

Edit a model

Edit an existing model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var sid = "sid_example"; // String | The model id that needs to be edited

var body = new algorithmhub.Body3(); // Body3 | The model configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editModel_0(sid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **String**| The model id that needs to be edited | 
 **body** | [**Body3**](Body3.md)| The model configuration | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listModels"></a>
# **listModels**
> InlineResponse200 listModels()

Return models owned

Return list of models owned by user

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listModels(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listModels_0"></a>
# **listModels_0**
> InlineResponse200 listModels_0()

Return models owned

Return list of models owned by user

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listModels_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="runModel"></a>
# **runModel**
> Object runModel(sid)

Run a model

Run an existing model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var sid = "sid_example"; // String | The model id to run


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runModel(sid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **String**| The model id to run | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="runModel_0"></a>
# **runModel_0**
> Object runModel_0(sid)

Run a model

Run an existing model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var sid = "sid_example"; // String | The model id to run


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runModel_0(sid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **String**| The model id to run | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

