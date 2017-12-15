# algorithmhub.ModelApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createModel**](ModelApi.md#createModel) | **POST** /model | Create a new model
[**createModel_0**](ModelApi.md#createModel_0) | **POST** /service | Create a new model
[**deleteModel**](ModelApi.md#deleteModel) | **DELETE** /model/{mid} | Delete details of model
[**deleteModelTrain**](ModelApi.md#deleteModelTrain) | **DELETE** /model/{mid}/train/{trid} | Delete trained model
[**deleteModel_0**](ModelApi.md#deleteModel_0) | **DELETE** /service/{mid} | Delete details of model
[**detailModel**](ModelApi.md#detailModel) | **GET** /model/{mid} | Get details of model
[**detailModel_0**](ModelApi.md#detailModel_0) | **GET** /service/{mid} | Get details of model
[**editModel**](ModelApi.md#editModel) | **PUT** /model/{mid} | Edit a model
[**editModelTrain**](ModelApi.md#editModelTrain) | **PUT** /model/{mid}/train/{trid} | Edit a trained model
[**editModel_0**](ModelApi.md#editModel_0) | **PUT** /service/{mid} | Edit a model
[**fitModelTrain**](ModelApi.md#fitModelTrain) | **POST** /model/{mid}/train | Fit the model
[**listModelTrain**](ModelApi.md#listModelTrain) | **GET** /model/{mid}/train | List out trained models
[**listModels**](ModelApi.md#listModels) | **GET** /model | Return models owned
[**listModels_0**](ModelApi.md#listModels_0) | **GET** /service | Return models owned
[**runModel**](ModelApi.md#runModel) | **POST** /model/{mid} | Run a model
[**runModelTrain**](ModelApi.md#runModelTrain) | **POST** /model/{mid}/train/{trid} | Run a training
[**runModel_0**](ModelApi.md#runModel_0) | **POST** /service/{mid} | Run a model


<a name="createModel"></a>
# **createModel**
> InlineResponse2001 createModel(modelName)

Create a new model

Create a new model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var modelName = new algorithmhub.ModelName(); // ModelName | The model configuration

apiInstance.createModel(modelName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelName** | [**ModelName**](ModelName.md)| The model configuration | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createModel_0"></a>
# **createModel_0**
> InlineResponse2001 createModel_0(modelName)

Create a new model

Create a new model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var modelName = new algorithmhub.ModelName1(); // ModelName1 | The model configuration

apiInstance.createModel_0(modelName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelName** | [**ModelName1**](ModelName1.md)| The model configuration | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteModel"></a>
# **deleteModel**
> InlineResponse2003 deleteModel(mid)

Delete details of model

Deletes a single model based on the ID supplied

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | Deletes the model based on the model id provided

apiInstance.deleteModel(mid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| Deletes the model based on the model id provided | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteModelTrain"></a>
# **deleteModelTrain**
> &#39;String&#39; deleteModelTrain(mid, trid)

Delete trained model

Deletes a single trained model based on the ID supplied

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | Deletes the trained model based on the model id provided

var trid = "trid_example"; // String | Deletes the trained model based on the model id provided

apiInstance.deleteModelTrain(mid, trid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| Deletes the trained model based on the model id provided | 
 **trid** | **String**| Deletes the trained model based on the model id provided | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteModel_0"></a>
# **deleteModel_0**
> InlineResponse2003 deleteModel_0(mid)

Delete details of model

Deletes a single model based on the ID supplied

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | Deletes the model based on the model id provided

apiInstance.deleteModel_0(mid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| Deletes the model based on the model id provided | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="detailModel"></a>
# **detailModel**
> InlineResponse2002 detailModel(mid)

Get details of model

Get details for an existing model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | The model id

apiInstance.detailModel(mid).then(function(data) {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="detailModel_0"></a>
# **detailModel_0**
> InlineResponse2002 detailModel_0(mid)

Get details of model

Get details for an existing model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | The model id

apiInstance.detailModel_0(mid).then(function(data) {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="editModel"></a>
# **editModel**
> &#39;String&#39; editModel(mid, body)

Edit a model

Edit an existing model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | The model id that needs to be edited

var body = new algorithmhub.Body(); // Body | The model configuration

apiInstance.editModel(mid, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id that needs to be edited | 
 **body** | [**Body**](Body.md)| The model configuration | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="editModelTrain"></a>
# **editModelTrain**
> &#39;String&#39; editModelTrain(mid, trid)

Edit a trained model

Edit or update an existing training

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | The model id

var trid = "trid_example"; // String | The train id that needs to be edited

apiInstance.editModelTrain(mid, trid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id | 
 **trid** | **String**| The train id that needs to be edited | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="editModel_0"></a>
# **editModel_0**
> &#39;String&#39; editModel_0(mid, body)

Edit a model

Edit an existing model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | The model id that needs to be edited

var body = new algorithmhub.Body1(); // Body1 | The model configuration

apiInstance.editModel_0(mid, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id that needs to be edited | 
 **body** | [**Body1**](Body1.md)| The model configuration | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="fitModelTrain"></a>
# **fitModelTrain**
> Object fitModelTrain(mid)

Fit the model

Fit the model with the data

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | The model id

apiInstance.fitModelTrain(mid).then(function(data) {
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

<a name="listModelTrain"></a>
# **listModelTrain**
> Object listModelTrain(mid)

List out trained models

List out all the trained models

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | The model id

apiInstance.listModelTrain(mid).then(function(data) {
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

<a name="listModels"></a>
# **listModels**
> InlineResponse200 listModels()

Return models owned

Return list of models owned by user

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();
apiInstance.listModels().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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
apiInstance.listModels_0().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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
> Object runModel(mid, input)

Run a model

Run an existing model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | The model id to run

var input = [new algorithmhub.[ERRORUNKNOWN]()]; // [ERRORUNKNOWN] | Input into the model

apiInstance.runModel(mid, input).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id to run | 
 **input** | [**[ERRORUNKNOWN]**](.md)| Input into the model | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="runModelTrain"></a>
# **runModelTrain**
> Object runModelTrain(mid, trid)

Run a training

Run an specific training

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | The model id to train

var trid = "trid_example"; // String | The training id

apiInstance.runModelTrain(mid, trid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id to train | 
 **trid** | **String**| The training id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="runModel_0"></a>
# **runModel_0**
> Object runModel_0(mid, input)

Run a model

Run an existing model

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ModelApi();

var mid = "mid_example"; // String | The model id to run

var input = [new algorithmhub.[ERRORUNKNOWN]()]; // [ERRORUNKNOWN] | Input into the model

apiInstance.runModel_0(mid, input).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| The model id to run | 
 **input** | [**[ERRORUNKNOWN]**](.md)| Input into the model | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

