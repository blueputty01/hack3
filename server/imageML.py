import tensorflow as tf
import numpy as np
import sys
from tensorflow.keras.models import load_model
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

print(5)


# model_dir = '../models/'

# fileLocation = sys.argv[2]
# type = sys.argv[1]

# stderr = sys.stderr  # disable stderr
# sys.stderr = open(os.devnull, 'w')
# image = tf.keras.preprocessing.image
# sys.stderr = stderr  # re-enable stderr

# ## UTIL CODE CREDIT GIVEN TO AUTHOR


# def dice_coef(y_true, y_pred):
#     y_true_f = K.flatten(y_true)
#     y_pred = K.cast(y_pred, 'float32')
#     y_pred_f = K.cast(K.greater(K.flatten(y_pred), 0.5), 'float32')
#     intersection = y_true_f * y_pred_f
#     score = 2. * K.sum(intersection) / (K.sum(y_true_f) + K.sum(y_pred_f))
#     return score


# def dice_loss(y_true, y_pred):
#     smooth = 1.
#     y_true_f = K.flatten(y_true)
#     y_pred_f = K.flatten(y_pred)
#     intersection = y_true_f * y_pred_f
#     score = (2. * K.sum(intersection) + smooth) / \
#         (K.sum(y_true_f) + K.sum(y_pred_f) + smooth)
#     return 1. - score


# def bce_dice_loss(y_true, y_pred):
#     return binary_crossentropy(y_true, y_pred) + dice_loss(y_true, y_pred)


# def bce_logdice_loss(y_true, y_pred):
#     return binary_crossentropy(y_true, y_pred) - K.log(1. - dice_loss(y_true, y_pred))


# def get_iou_vector(A, B):
#     # Numpy version
#     batch_size = A.shape[0]
#     metric = 0.0
#     for batch in range(batch_size):
#         t, p = A[batch], B[batch]
#         true = np.sum(t)
#         pred = np.sum(p)

#         # deal with empty mask first
#         if true == 0:
#             metric += (pred == 0)
#             continue

#         # non empty mask case.  Union is never empty
#         # hence it is safe to divide by its number of pixels
#         intersection = np.sum(t * p)
#         union = true + pred - intersection
#         iou = intersection / union

#         # iou metrric is a stepwise approximation of the real iou over 0.5
#         iou = np.floor(max(0, (iou - 0.45)*20)) / 10

#         metric += iou
#     metric /= batch_size
#     return metric


# def my_iou_metric(label, pred):
#     # Tensorflow version
#     return tf.py_func(get_iou_vector, [label, pred > 0.5], tf.float64)

# model = load_model('./keras.model', custom_objects={
#                    "bce_dice_loss": bce_dice_loss, "my_iou_metric": my_iou_metric})
# model.compile(optimizer='adam', loss='binary_crossentropy',
#               metrics=['accuracy'])


# def predict(path):
#     test_image = image.load_img(path,
#                                 target_size=(128, 128))
#     test_image = np.expand_dims(test_image, axis=0)
#     predict = model.predict(test_image, verbose=0)
#     # verbose=0 disables progress bar
#     # https://keras.io/api/models/model_training_apis/
#     result = np.argmax(predict)
#     return result


# print(predict(fileLocation))
