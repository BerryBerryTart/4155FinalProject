# 4155 WiFi Activity Capstone Project

Created with Django and React.js

### Requirements
- Python3 <= 3.6
- Pip3
- Node.js <= 8.0

### Installation
```sh
python3 -m venv env
source env/bin/activate # On Windows use `env\Scripts\activate`
git clone {this project}
cd app
pip install -r requirements.txt
python3 manage.py migrate
python3 manage.py runserver
npm i
npm run dev #starts the webpack dev service, npm run build for production
```

### To Demo
Unzip the files in ./dataSeeding and run the respective python files within each
folder while the server is running to import data. This may take some time.

# Backend Overview

## Data Endpoints
### aps/
- `GET` returns the most recent access point

### timeslices/
- `GET` returns all the timeslices
- `POST` to create a new timeslice

### view/\<int:pk>/
- `GET` returns the timeslice with the specified primary key
- `DELETE` to delete the timeslice with the specified primary key

### minslices/
- `GET` returns a minified list of just the primary key ID and timestamp of the timeslices

### average/
- `GET` returns all the averages
- `POST` to create a new avearage object

### average/\<str:ap>/
- `GET` returns the average with the specified name `<str:ap>`
- `DELETE` to delete the timeslice with the specified name `<str:ap>`

## Required Data Structure Of JSON Files

### Timeslices
Timeslices contain a timestamp, and an array of the access points.Each access point
then contains a building name, the full access point name and the current count
recorded. The structure used is as follows.

```
{
    "datetime": "%Y-%M-%D %H-%M-%S",
    "aps": [
        {
            "name": "$ACCESS POINT NAME",
            "building": "$MINIFIED BUILDING CODE",
            "count": $OBSERVED INTEGER COUNT,
        }, ...,
    ]
}
```

### Averages
Each average is unique. If an attempt to add an average that already exists, an
error will be thrown. Each element in the averages array must have a unique hour.
The structure used is as follows.

```
{
    "name": "$ACCESS POINT NAME",
    "averages": [
        {
            "hour": "$24 HOUR FORMAT OF THE HOUR",
            "count": $OBSERVED INTEGER COUNT,
        }, ...,
    ]
}
```