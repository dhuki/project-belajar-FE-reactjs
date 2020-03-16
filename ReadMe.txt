Tryna implemented atomic design in react.js

Asset : 
store -> https://imagebin.ca/
API view-image : https://imagebin.ca/upload.jpg 

Deployment depedency to heroku :
downgrade -> "react-scripts": "3.2.0"

cause "react-scripts": "3.3.0" (latest/default)
error -> SecurityError: Failed to construct 'WebSocket'
solve : 
a. https://stackoverflow.com/questions/59241291/securityerror-failed-to-construct-websocket-when-i-upload-react-js-applicatio
b. https://github.com/facebook/create-react-app/pull/8079#issuecomment-562373869
solution : "react-scripts": "3.2.0"