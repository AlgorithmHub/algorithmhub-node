# algorithmhub.ClusterApi

All URIs are relative to *http://localhost:10010/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCluster**](ClusterApi.md#createCluster) | **POST** /cluster | Creates new cluster
[**deleteCluster**](ClusterApi.md#deleteCluster) | **DELETE** /cluster/{cid} | Delete an existing cluster
[**detailCluster**](ClusterApi.md#detailCluster) | **GET** /cluster/{cid} | Gets cluster metadata
[**listClusters**](ClusterApi.md#listClusters) | **GET** /cluster | Returns list of cluster resources


<a name="createCluster"></a>
# **createCluster**
> InlineResponse20015 createCluster(body)

Creates new cluster

Creates a new cluster

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ClusterApi();

var body = new algorithmhub.Body4(); // Body4 | The cluster parameters

apiInstance.createCluster(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body4**](Body4.md)| The cluster parameters | 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteCluster"></a>
# **deleteCluster**
> InlineResponse20015 deleteCluster(cid)

Delete an existing cluster

Delete an existing cluster

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ClusterApi();

var cid = "cid_example"; // String | The cluster id

apiInstance.deleteCluster(cid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **String**| The cluster id | 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="detailCluster"></a>
# **detailCluster**
> InlineResponse20015 detailCluster(cid)

Gets cluster metadata

Gets cluster metadata

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ClusterApi();

var cid = "cid_example"; // String | The cluster id

apiInstance.detailCluster(cid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **String**| The cluster id | 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="listClusters"></a>
# **listClusters**
> [InlineResponse20015] listClusters()

Returns list of cluster resources

Returns a list of cluster resources

### Example
```javascript
var algorithmhub = require('algorithmhub');

var apiInstance = new algorithmhub.ClusterApi();
apiInstance.listClusters().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse20015]**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

