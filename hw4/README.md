# hw3
1. Project Description
# Problem 1
This app is built with react-native and djangorestframework. Additional feature includes user authentication and star widget for rating. Each user will only be able to view their own playlist.
# Problem 2
The web version is deployed on https://musify-cl.web.app/ It is based on the previous homework and does not share the same features. And the database will take a few seconds to load.

2. Environment setup
# If want to test on expo mobile, in App.js change all the http requests according to the IPv4 address of your machine. And start backend with python3 manage.py runserver <IPv4>:8000

# Create a virtual environment.
python3 -m venv venv
# activate venv
source venv/bin/activate
# Install Django
pip3 install django
# install libraries
pip3 install djangorestframework django-cors-headers
# run backend
cd backend
python3 manage.py migrate
python3 manage.py runserver
# run frontend
cd frontend
npm install
npm install -g expo-cli
brew install watchman
npm install --save axios
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-stars --save
npm start

3. Work Distribution
Yizhuang worked on the react-native part of the assignment. The app is functional based and utilizes stack screen navigation.
Charlie worked on the web deployment and the style of the native app.
