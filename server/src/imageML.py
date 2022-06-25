import tensorflow as tf
import numpy as np
import sys
from tensorflow.keras.models import load_model
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'


model_dir = '../models/'

fileLocation = sys.argv[2]
type = sys.argv[1]

stderr = sys.stderr  # disable stderr
sys.stderr = open(os.devnull, 'w')
image = tf.keras.preprocessing.image
sys.stderr = stderr  # re-enable stderr

files = {
    'fruit': {
        'file': 'fruits.h5',
        'target_size': (244, 244, 3)
    },
    'leaves': {
        'file': 'model.h5',
        'target_size': (256, 256)
    }
}

info = files[type]

target_size = info['target_size']
model_file = info['file']

model = load_model(f"{model_dir}{model_file}")
model.compile(optimizer='adam', loss='binary_crossentropy',
              metrics=['accuracy'])


def predict(path):
    test_image = image.load_img(path,
                                target_size=target_size)
    test_image = np.expand_dims(test_image, axis=0)
    predict = model.predict(test_image, verbose=0)
    # verbose=0 disables progress bar
    # https://keras.io/api/models/model_training_apis/
    result = np.argmax(predict)
    return result


print(predict(fileLocation))
