from flask import Flask , jsonify, request, url_for, redirect, render_template
import pickle
import numpy as np

app = Flask(__name__)

DecisionTree_model=pickle.load(open('DecisionTree.pkl','rb'))
randomforest_model=pickle.load(open('randomforest.pkl','rb'))
NaiveBayes_model=pickle.load(open('NaiveBayes.pkl','rb'))


@app.route('/')
def hello():
    return jsonify({"about": 'Hello World!'})

@app.route('/predict',methods=['POST'])
def predict():
    print("-------------------------------------------")
    print(request.form['diseaseList'])
    print("-------------------------------------------")
    print("helloooo")

    iplist=list(map(str,request.form['diseaseList'].split('\n')))
    print(iplist)
    print("-------------------------------------------")

    iplist.pop()
    psymptoms=iplist
    print(psymptoms)
    print(len(psymptoms))
    print("-------------------------------------------")
    print("-------------------------------------------")

    print("-------------------------------------------")

    pickle_files = "model.pkl"

    l1=['back_pain','constipation','abdominal_pain','diarrhoea','mild_fever','yellow_urine',
    'yellowing_of_eyes','acute_liver_failure','fluid_overload','swelling_of_stomach',
    'swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
    'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs',
    'fast_heart_rate','pain_during_bowel_movements','pain_in_anal_region','bloody_stool',
    'irritation_in_anus','neck_pain','dizziness','cramps','bruising','obesity','swollen_legs',
    'swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
    'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips',
    'slurred_speech','knee_pain','hip_joint_pain','muscle_weakness','stiff_neck','swelling_joints',
    'movement_stiffness','spinning_movements','loss_of_balance','unsteadiness',
    'weakness_of_one_body_side','loss_of_smell','bladder_discomfort','foul_smell_of urine',
    'continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
    'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain',
    'abnormal_menstruation','dischromic _patches','watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum',
    'rusty_sputum','lack_of_concentration','visual_disturbances','receiving_blood_transfusion',
    'receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen',
    'history_of_alcohol_consumption','fluid_overload','blood_in_sputum','prominent_veins_on_calf',
    'palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
    'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose',
    'yellow_crust_ooze']

    disease=['Fungal infection','Allergy','GERD','Chronic cholestasis','Drug Reaction',
    'Peptic ulcer diseae','AIDS','Diabetes','Gastroenteritis','Bronchial Asthma','Hypertension',
    'Migraine','Cervical spondylosis',
    'Paralysis (brain hemorrhage)','Jaundice','Malaria','Chicken pox','Dengue','Typhoid','hepatitis A',
    'Hepatitis B','Hepatitis C','Hepatitis D','Hepatitis E','Alcoholic hepatitis','Tuberculosis',
    'Common Cold','Pneumonia','Dimorphic hemmorhoids(piles)',
    'Heartattack','Varicoseveins','Hypothyroidism','Hyperthyroidism','Hypoglycemia','Osteoarthristis',
    'Arthritis','(vertigo) Paroymsal  Positional Vertigo','Acne','Urinary tract infection','Psoriasis',
    'Impetigo']

    l2=[]
    for x in range(0,len(l1)):
        l2.append(0)
    print("l2")
    print(l2)
    #psymptoms = ["red_spots_over_body","receiving_blood_transfusion","blackheads","red_sore_around_nose"]
    for k in range(0,len(l1)):
        for z in psymptoms:
            if(z==l1[k]):
                l2[k]=1
    print("-------------------------------------------")
    print("l2")
    print(l2)
    print("-------------------------------------------")
    DecisionTree_prediction=DecisionTree_model.predict([l2])
    randomforest_prediction=randomforest_model.predict([l2])
    NaiveBayes_prediction=NaiveBayes_model.predict([l2])

    print(DecisionTree_prediction)
    print(randomforest_prediction)
    print(NaiveBayes_prediction)

    print("hi")

    DecisionTree_disease = disease[DecisionTree_prediction[0]]
    randomforest_disease = disease[randomforest_prediction[0]]
    NaiveBayes_disease = disease[NaiveBayes_prediction[0]]

    print(DecisionTree_disease)
    print(randomforest_disease)
    print(NaiveBayes_disease)
    ansDict={}


    return jsonify({"DecisionTree_disease": DecisionTree_disease,
                    "randomforest_disease":randomforest_disease,
                    "NaiveBayes_disease":NaiveBayes_disease,
                  })

if __name__ == '__main__':
    app.run(debug=True)
