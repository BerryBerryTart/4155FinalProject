import requests, json



def main():

    headers = {'Content-type': 'application/json'}

    url = 'http://127.0.0.1:8000/timeslices/'



    with open('2019-08-16--09-00-00.json', 'r') as targetJson:

        r = requests.post(url=url , data=targetJson, headers=headers)

        print(r)



if __name__ == '__main__':

    main()



