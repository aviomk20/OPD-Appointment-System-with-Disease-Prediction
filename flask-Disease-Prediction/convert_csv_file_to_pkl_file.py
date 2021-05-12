import csv
from six.moves import cPickle as pickle
import numpy as np

def convert_csv_to_pickle(path_csv, path_pickle):

    x = []
    with open(path_csv,'r') as f:
        reader = csv.reader(f)
        for line in reader: x.append(line)

    with open(path_pickle,'wb') as f:
        pickle.dump(x, f, pickle.HIGHEST_PROTOCOL)

convert_csv_to_pickle("Training.csv", "model.pkl")