# hw3
1. Project Description

This app is built with react and djangorestframework.
Additional features include a sorting algorithm. The users can sort their playlist forward or backward by release dates or names of the songs.

2. Environment setup

# Create a virtual environment.
python3 -m venv venv
# activate venv
source venv/bin/activate
# Install Django
pip3 install django
# install libraries
pip3 install djangorestframework django-cors-headers djangorestframework-jwt
# run backend
cd backend
python3 manage.py migrate
python3 manage.py runserver
# run frontend
cd frontend
npm add axios
npm i prop-types -S
npm install --save react-rating
npm install font-awesome --save
npm install @material-ui/core
npm install @material-ui/icons
npm start

3. Work Distribution

Yizhuang primarily focuses on the functionality of the app, including making standard requests with axios and making sure the buttons function as desired. He also implements the sorting algorithm.

Charlie works on the design implementation part of the app, including using css to make possible the rating stars, as well as creating a "hacker style" interface.
