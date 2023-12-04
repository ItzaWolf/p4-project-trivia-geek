from flask import Flask, request
from flask_restful import Resource
from config import app, db, Api
from models import Question, Quiz, GameSession, User
# app = Flask(__name__)
api = Api(app)

class UserResource(Resource):
    def get(self, user_id):
        user = User.query.get(user_id)
        if user:
            return {"user_id": user.id, "username": user.username}
        else:
            return {"message": "User not found"}, 404

    def post(self):
        data = request.get_json()
        username = data['username']
        password = data['password']

        # Check if the username already exists
        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            return {"message": "Username already exists. Choose a different username."}, 400

        user = User(username=username, password=password)
        db.session.add(user)
        db.session.commit()
        return {"message": "User created successfully", "user_id": user.id}, 201
    
    def delete(self, user_id):
        user = User.query.get(user_id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return {'message': 'User deleted successfully'}, 200
        else:
            return {'message': 'User not found'}, 404

    def patch(self, user_id):
        user = User.query.get(user_id)
        if user:
            data = request.get_json()
            if 'username' in data:
                user.username = data['username']
            if 'password' in data:
                user.password = data['password']

            db.session.commit()
            return {'message': 'User updated successfully'}, 200
        else:
            return {'message': 'User not found'}, 404
    
class GameSessionResource(Resource):
    def get(self, session_id):
        session = GameSession.query.get(session_id)
        if session:
            return {"session_id": session.id, "user_id": session.user_id, "quiz_id": session.quiz_id}
        else:
            return {"message": "Game Session not found"}, 404

    def post(self):
        data = request.get_json()
        session = GameSession(user_id=data['user_id'], quiz_id=data['quiz_id'])
        db.session.add(session)
        db.session.commit()
        return {"message": "Game Session created successfully", "session_id": session.id}, 201

class QuizResource(Resource):
    def get(self):
        # Retrieve quiz details by quiz_id
        quiz = [q.to_dict() for q in Quiz.query.all()]
        if quiz:
            # Serialize the quiz data as needed
            # Return the serialized data
            return quiz, 200
        else:
            return {"message": "Quiz not found"}, 404
        
    def post(self):
        data = request.get_json()
        quiz = Quiz(quizcategory=data['quizcategory'])
        db.session.add(quiz)
        db.session.commit()
        return {"message": "Quiz created successfully", "quiz_id": quiz.id}, 201

class QuestionResource(Resource):
    def get(self, question_id):
        question = Question.query.get(question_id)
        if question:
            # Serialize the question data as needed
            # Return the serialized data
            return {"question_id": question.id, "question_text": question.question, "options": question.options}
        else:
            return {"message": "Question not found"}, 404
    def post(self):
        data = request.get_json()

        # Assuming you need 'question_text' and 'options' in the request body
        question_text = data.get('question_text')
        options = data.get('options')

        # Create a new question
        new_question = Question(question=question_text, options=options)

        # Add to the database
        db.session.add(new_question)
        db.session.commit()

        # Return the response
        return {"message": "Question created successfully", "question_id": new_question.id}, 201
    
class QuizResourceById(Resource):
    def get(self, quiz_id):
        # Retrieve quiz details by quiz_id
        quiz = Quiz.query.filter_by(id=quiz_id).first()
        if quiz:
            # Serialize the quiz data as needed
            # Return the serialized data
            return quiz.to_dict(), 200
        else:
            return {"message": "Quiz not found"}, 404
# Define routes
api.add_resource(UserResource, '/user', '/user/', '/user/<int:user_id>')
api.add_resource(GameSessionResource, '/gamesession/<int:session_id>')
api.add_resource(QuizResource, '/quiz')
api.add_resource(QuizResourceById, '/quiz/<int:quiz_id>')
api.add_resource(QuestionResource, '/question/<int:question_id>')



@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

