const auto_ml = require('@tensorflow/tfjs-automl');
const fs = require('fs');
const jpeg = require('jpeg-js');
const tf = require('@tensorflow/tfjs');

const NUMBER_OF_CHANNELS = 3;

const readImage = path => {
    const buf = fs.readFileSync(path);
    const pixels = jpeg.decode(buf, true);
    return pixels;
};

const imageByteArray = (image, numChannels) => {
    const pixels = image.data;
    const numPixels = image.width * image.height;
    const values = new Int32Array(numPixels * numChannels);

    for (let i = 0; i < numPixels; i++) {
        for (let channel = 0; channel < numChannels; ++channel) {
            values[i * numChannels + channel] = pixels[i * 4 + channel];
        }
    }

    return values;
};

const imageToInput = (image, numChannels) => {
    const values = imageByteArray(image, numChannels)
    const outShape = [image.height, image.width, numChannels];
    const input = tf.tensor3d(values, outShape, 'int32');

    return input;
};

const classify = async (path) => {
    const image = readImage(path);
    const input = imageToInput(image, NUMBER_OF_CHANNELS);

    //const mn_model = await loadModel(model);
    modelUrl = 'https://example.com/model/v1/model.json';
    const model = await auto_ml.loadImageClassification(modelUrl);
    const predictions = await model.classify(input);
    
    console.log(predictions);

};

classify('./abc.jpg');