from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'key': 'hello_world'}

class Test(Resource):
    def get(self):
        return {'key': 'test'}

api.add_resource(HelloWorld, '/')
api.add_resource(Test, '/test')

if __name__ == '__main__':
    app.run(debug=True)