import requests, json
import glob

def main():
    headers = {'Content-type': 'application/json'}
    ## URL FOR IMPORTING APS /timeslices/
    ## URL FOR IMPORTING AVERAGES /average/
    url = 'http://127.0.0.1:8000/average/'
    filearray = []
    faulty = []

    #TO USE
    #point PATH TO DATA to where all your files are and just run it

    for filename in glob.glob('/PATH TO DATA/*.json'):
        filearray.append(filename)

    for k in range(len(filearray)):
        with open(filearray[k], 'r') as targetJson:
            print(filearray[k])
            try:
                r = requests.post(url=url , data=targetJson, headers=headers, timeout = 10)
            except:
                faulty.append(filearray[k])
            print(r)
    print(faulty)

if __name__ == '__main__':
    main()

