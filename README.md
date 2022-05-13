# kudapity_v1.0
## Setup
The first thing to do is to clone the repository:
```shell
$ git clone https://github.com/Kudapity/kudapity_v1.0.git
$ cd kudapity_v1.0
```
Create a virtual environment to install dependencies 
in and activate it:
```shell
$ python -m venv venv
$ venv\Scripts\activate
```
Then install the dependencies:
```shell
(venv)$ pip install -r requirements.txt
```
Note the `(venv)` in front of the prompt. 

This indicates that this terminal session 
operates in a virtual environment set up 
by `venv`.

Once `pip` has finished downloading the dependencies:
```shell
(venv)$ cd be
(venv)$ python manage.py makemigrations
(venv)$ python manage.py migrate
(venv)$ python manage.py runserver
```
And navigate to `http://127.0.0.1:8000/`.