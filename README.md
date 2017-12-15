# algorithmhub

algorithmhub - JavaScript client for algorithmhub
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.3.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install algorithmhub --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your algorithmhub from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('algorithmhub')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var algorithmhub = require('algorithmhub');

var api = new algorithmhub.BenchmarkApi()
api.createBenchmark().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:10010/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*algorithmhub.BenchmarkApi* | [**createBenchmark**](docs/BenchmarkApi.md#createBenchmark) | **POST** /benchmark | Create Benchmark
*algorithmhub.BenchmarkApi* | [**getInfoBenchmark**](docs/BenchmarkApi.md#getInfoBenchmark) | **GET** /benchmark/{bid} | Get benchmark info
*algorithmhub.BenchmarkApi* | [**listBenchmark**](docs/BenchmarkApi.md#listBenchmark) | **GET** /benchmark/{bid}/models | Get benchmark list
*algorithmhub.BenchmarkTestsApi* | [**createBenchmark**](docs/BenchmarkTestsApi.md#createBenchmark) | **POST** /model/{mid}/benchmark | Create new benchmark
*algorithmhub.BenchmarkTestsApi* | [**deleteBenchmark**](docs/BenchmarkTestsApi.md#deleteBenchmark) | **DELETE** /model/{mid}/benchmark/{bid} | Delete a benchmark
*algorithmhub.BenchmarkTestsApi* | [**listBenchmark**](docs/BenchmarkTestsApi.md#listBenchmark) | **GET** /model/{mid}/benchmark | List benchmark tests
*algorithmhub.BenchmarkTestsApi* | [**runBenchmark**](docs/BenchmarkTestsApi.md#runBenchmark) | **GET** /model/{mid}/benchmark/{bid} | Run benchmark
*algorithmhub.BenchmarkTestsApi* | [**updateBenchmark**](docs/BenchmarkTestsApi.md#updateBenchmark) | **PUT** /model/{mid}/benchmark/{bid} | Update a benchmark
*algorithmhub.BenchmarkTestsApi* | [**validateBenchmark**](docs/BenchmarkTestsApi.md#validateBenchmark) | **GET** /run/{mid}/benchmark/results | Validation using default parameters
*algorithmhub.ClusterApi* | [**createCluster**](docs/ClusterApi.md#createCluster) | **POST** /cluster | Creates new cluster
*algorithmhub.ClusterApi* | [**deleteCluster**](docs/ClusterApi.md#deleteCluster) | **DELETE** /cluster/{cid} | Delete an existing cluster
*algorithmhub.ClusterApi* | [**detailCluster**](docs/ClusterApi.md#detailCluster) | **GET** /cluster/{cid} | Gets cluster metadata
*algorithmhub.ClusterApi* | [**listClusters**](docs/ClusterApi.md#listClusters) | **GET** /cluster | Returns list of cluster resources
*algorithmhub.ComputeApi* | [**createCompute**](docs/ComputeApi.md#createCompute) | **POST** /compute | Creates new compute
*algorithmhub.ComputeApi* | [**deleteCompute**](docs/ComputeApi.md#deleteCompute) | **DELETE** /compute/{cnid} | Delete an existing compute
*algorithmhub.ComputeApi* | [**detailCompute**](docs/ComputeApi.md#detailCompute) | **GET** /compute/{cnid} | Gets compute metadata
*algorithmhub.ComputeApi* | [**listCompute**](docs/ComputeApi.md#listCompute) | **GET** /compute | Returns list of compute resources
*algorithmhub.DataApi* | [**deleteData**](docs/DataApi.md#deleteData) | **DELETE** /data/{did} | Deletes the data object
*algorithmhub.DataApi* | [**downloadData**](docs/DataApi.md#downloadData) | **GET** /data/{did} | Get the data object
*algorithmhub.DataApi* | [**getData**](docs/DataApi.md#getData) | **GET** /data/{did}/info | Get information on the data
*algorithmhub.DataApi* | [**listData**](docs/DataApi.md#listData) | **GET** /data | Return a list of data
*algorithmhub.DataApi* | [**uploadData**](docs/DataApi.md#uploadData) | **POST** /data | Upload data
*algorithmhub.ModelApi* | [**createModel**](docs/ModelApi.md#createModel) | **POST** /model | Create a new model
*algorithmhub.ModelApi* | [**createModel_0**](docs/ModelApi.md#createModel_0) | **POST** /service | Create a new model
*algorithmhub.ModelApi* | [**deleteModel**](docs/ModelApi.md#deleteModel) | **DELETE** /model/{mid} | Delete details of model
*algorithmhub.ModelApi* | [**deleteModelTrain**](docs/ModelApi.md#deleteModelTrain) | **DELETE** /model/{mid}/train/{trid} | Delete trained model
*algorithmhub.ModelApi* | [**deleteModel_0**](docs/ModelApi.md#deleteModel_0) | **DELETE** /service/{mid} | Delete details of model
*algorithmhub.ModelApi* | [**detailModel**](docs/ModelApi.md#detailModel) | **GET** /model/{mid} | Get details of model
*algorithmhub.ModelApi* | [**detailModel_0**](docs/ModelApi.md#detailModel_0) | **GET** /service/{mid} | Get details of model
*algorithmhub.ModelApi* | [**editModel**](docs/ModelApi.md#editModel) | **PUT** /model/{mid} | Edit a model
*algorithmhub.ModelApi* | [**editModelTrain**](docs/ModelApi.md#editModelTrain) | **PUT** /model/{mid}/train/{trid} | Edit a trained model
*algorithmhub.ModelApi* | [**editModel_0**](docs/ModelApi.md#editModel_0) | **PUT** /service/{mid} | Edit a model
*algorithmhub.ModelApi* | [**fitModelTrain**](docs/ModelApi.md#fitModelTrain) | **POST** /model/{mid}/train | Fit the model
*algorithmhub.ModelApi* | [**listModelTrain**](docs/ModelApi.md#listModelTrain) | **GET** /model/{mid}/train | List out trained models
*algorithmhub.ModelApi* | [**listModels**](docs/ModelApi.md#listModels) | **GET** /model | Return models owned
*algorithmhub.ModelApi* | [**listModels_0**](docs/ModelApi.md#listModels_0) | **GET** /service | Return models owned
*algorithmhub.ModelApi* | [**runModel**](docs/ModelApi.md#runModel) | **POST** /model/{mid} | Run a model
*algorithmhub.ModelApi* | [**runModelTrain**](docs/ModelApi.md#runModelTrain) | **POST** /model/{mid}/train/{trid} | Run a training
*algorithmhub.ModelApi* | [**runModel_0**](docs/ModelApi.md#runModel_0) | **POST** /service/{mid} | Run a model
*algorithmhub.RunApi* | [**addFileRun**](docs/RunApi.md#addFileRun) | **POST** /run/{rid}/file | PRIVATE
*algorithmhub.RunApi* | [**detailRun**](docs/RunApi.md#detailRun) | **GET** /run/{rid} | Get info about run
*algorithmhub.RunApi* | [**getInput**](docs/RunApi.md#getInput) | **GET** /run/{rid}/input | Input parameters
*algorithmhub.RunApi* | [**getOutput**](docs/RunApi.md#getOutput) | **GET** /run/{rid}/output | Get the output
*algorithmhub.RunApi* | [**getOutputFigure**](docs/RunApi.md#getOutputFigure) | **GET** /run/{rid}/figure/{fid}/* | Get figure as app
*algorithmhub.RunApi* | [**getOutputFile**](docs/RunApi.md#getOutputFile) | **GET** /run/{rid}/file/{filename} | Get a file
*algorithmhub.RunApi* | [**getStatus**](docs/RunApi.md#getStatus) | **GET** /run/{rid}/status | Get status of the run
*algorithmhub.RunApi* | [**listOutputFigures**](docs/RunApi.md#listOutputFigures) | **GET** /run/{rid}/figures | Get list of figures
*algorithmhub.RunApi* | [**listOutputFiles**](docs/RunApi.md#listOutputFiles) | **GET** /run/{rid}/files | Get list of output files
*algorithmhub.RunApi* | [**listRuns**](docs/RunApi.md#listRuns) | **GET** /run | Get list of runs
*algorithmhub.RunApi* | [**postError**](docs/RunApi.md#postError) | **POST** /run/{rid}/error | PRIVATE
*algorithmhub.RunApi* | [**postFigure**](docs/RunApi.md#postFigure) | **POST** /run/{rid}/figure | PRIVATE
*algorithmhub.RunApi* | [**postStatus**](docs/RunApi.md#postStatus) | **POST** /run/{rid}/status | PRIVATE
*algorithmhub.RunApi* | [**setSuccess**](docs/RunApi.md#setSuccess) | **POST** /run/{rid} | PRIVATE
*algorithmhub.UnitTestsApi* | [**createTest**](docs/UnitTestsApi.md#createTest) | **POST** /model/{mid}/test | Create new spec test
*algorithmhub.UnitTestsApi* | [**deleteTest**](docs/UnitTestsApi.md#deleteTest) | **DELETE** /model/{mid}/test/{tid} | Delete a spec test
*algorithmhub.UnitTestsApi* | [**listTest**](docs/UnitTestsApi.md#listTest) | **GET** /model/{mid}/test | List spec tests
*algorithmhub.UnitTestsApi* | [**runKeyboardInterrupt**](docs/UnitTestsApi.md#runKeyboardInterrupt) | **GET** /run/{rid}/test/keyboardInterrupt | Check for keyboard interrupt
*algorithmhub.UnitTestsApi* | [**runRuntimeError**](docs/UnitTestsApi.md#runRuntimeError) | **GET** /run/{rid}/test/runtimeError | Check for runtime error
*algorithmhub.UnitTestsApi* | [**runTest**](docs/UnitTestsApi.md#runTest) | **POST** /model/{mid}/test/{tid} | Run the tests
*algorithmhub.UnitTestsApi* | [**updateTest**](docs/UnitTestsApi.md#updateTest) | **PUT** /model/{mid}/test/{tid} | Update a spec test
*algorithmhub.UnitTestsApi* | [**validateData**](docs/UnitTestsApi.md#validateData) | **GET** /data/{did}/test/validate | Checks valid data set
*algorithmhub.UnitTestsApi* | [**validateModel**](docs/UnitTestsApi.md#validateModel) | **GET** /model/{mid}/test/validate | Runs the unit test cases
*algorithmhub.UnitTestsApi* | [**validateRun**](docs/UnitTestsApi.md#validateRun) | **GET** /run/{rid}/test/validate | Runs the unit test cases
*algorithmhub.WorkspaceApi* | [**cloneWorkspace**](docs/WorkspaceApi.md#cloneWorkspace) | **POST** /workspace/{wmid}/clone | Clone the workspace
*algorithmhub.WorkspaceApi* | [**createWorkspace**](docs/WorkspaceApi.md#createWorkspace) | **POST** /workspace | Creates new workspace
*algorithmhub.WorkspaceApi* | [**deleteWorkspace**](docs/WorkspaceApi.md#deleteWorkspace) | **DELETE** /workspace/{wmid} | Delete an existing workspace
*algorithmhub.WorkspaceApi* | [**detailWorkspace**](docs/WorkspaceApi.md#detailWorkspace) | **GET** /workspace/{wmid} | Gets workspace metadata
*algorithmhub.WorkspaceApi* | [**listServices**](docs/WorkspaceApi.md#listServices) | **GET** /workspace/{wmid}/model | Get models associated
*algorithmhub.WorkspaceApi* | [**listServices_0**](docs/WorkspaceApi.md#listServices_0) | **GET** /workspace/{wmid}/service | Get models associated
*algorithmhub.WorkspaceApi* | [**listWorkspaces**](docs/WorkspaceApi.md#listWorkspaces) | **GET** /workspace | Returns list of workspaces
*algorithmhub.WorkspaceApi* | [**publishWorkspace**](docs/WorkspaceApi.md#publishWorkspace) | **POST** /workspace/{wmid}/publish | Publish workspace to repo
*algorithmhub.WorkspaceApi* | [**shareWorkspace**](docs/WorkspaceApi.md#shareWorkspace) | **POST** /workspace/{wmid}/share | Share workspace with another user
*algorithmhub.WorkspaceApi* | [**turnOffWorkspace**](docs/WorkspaceApi.md#turnOffWorkspace) | **POST** /workspace/{wmid}/off | Turn off the workspace
*algorithmhub.WorkspaceApi* | [**turnOnWorkspace**](docs/WorkspaceApi.md#turnOnWorkspace) | **POST** /workspace/{wmid}/on | Turn on the workspace


## Documentation for Models

 - [algorithmhub.Body](docs/Body.md)
 - [algorithmhub.Body1](docs/Body1.md)
 - [algorithmhub.Body2](docs/Body2.md)
 - [algorithmhub.Body3](docs/Body3.md)
 - [algorithmhub.Body4](docs/Body4.md)
 - [algorithmhub.InlineResponse200](docs/InlineResponse200.md)
 - [algorithmhub.InlineResponse2001](docs/InlineResponse2001.md)
 - [algorithmhub.InlineResponse20010](docs/InlineResponse20010.md)
 - [algorithmhub.InlineResponse20011](docs/InlineResponse20011.md)
 - [algorithmhub.InlineResponse20012](docs/InlineResponse20012.md)
 - [algorithmhub.InlineResponse20013](docs/InlineResponse20013.md)
 - [algorithmhub.InlineResponse20014](docs/InlineResponse20014.md)
 - [algorithmhub.InlineResponse20015](docs/InlineResponse20015.md)
 - [algorithmhub.InlineResponse20016](docs/InlineResponse20016.md)
 - [algorithmhub.InlineResponse20017](docs/InlineResponse20017.md)
 - [algorithmhub.InlineResponse20017Files](docs/InlineResponse20017Files.md)
 - [algorithmhub.InlineResponse20018](docs/InlineResponse20018.md)
 - [algorithmhub.InlineResponse20019](docs/InlineResponse20019.md)
 - [algorithmhub.InlineResponse2002](docs/InlineResponse2002.md)
 - [algorithmhub.InlineResponse2003](docs/InlineResponse2003.md)
 - [algorithmhub.InlineResponse2004](docs/InlineResponse2004.md)
 - [algorithmhub.InlineResponse2005](docs/InlineResponse2005.md)
 - [algorithmhub.InlineResponse2006](docs/InlineResponse2006.md)
 - [algorithmhub.InlineResponse2007](docs/InlineResponse2007.md)
 - [algorithmhub.InlineResponse2008](docs/InlineResponse2008.md)
 - [algorithmhub.InlineResponse2009](docs/InlineResponse2009.md)
 - [algorithmhub.InlineResponseDefault](docs/InlineResponseDefault.md)
 - [algorithmhub.ModelName](docs/ModelName.md)
 - [algorithmhub.ModelName1](docs/ModelName1.md)


## Documentation for Authorization

 All endpoints do not require authorization.

