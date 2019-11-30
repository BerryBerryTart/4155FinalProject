import requests, json



def main():

    headers = {'Content-type': 'application/json'}

    url = 'http://127.0.0.1:8000/timeslices/'



    with open('data4.json', 'r') as targetJson:

        r = requests.post(url=url , data=targetJson, headers=headers)

        print(r)



if __name__ == '__main__':

    main()



