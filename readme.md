# Deploy Google AutoML Edge Model using NodeJS in AWS Lambda


Set of APIs to load and run models produced by [AutoML Edge](https://cloud.google.com/vision/automl/docs/edge-quickstart). 

## Installation

```bash
npm install
```
## Usage

```nodejs
classify('./abc.jpg');
```

## Output

```json
[
  { label: 'singapore_skyline', prob: 0.03774097561836243 },
  { label: 'singapore_heritage', prob: 0.01816747896373272 },
  { label: 'people', prob: 0.11496452242136002 },
  { label: 'food', prob: 0.04573282226920128 },
  { label: 'nature_and_animals', prob: 0.042944956570863724 },
  { label: 'daily_life', prob: 0.28606438636779785 },
  { label: 'business', prob: 0.6989666223526001 }
 ]
```

