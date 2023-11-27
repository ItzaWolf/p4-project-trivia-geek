from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from config import db

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    password = db.Column(db.String)

    gamesession = db.relationship("GameSession", back_populates="user", cascade ="all,delete")

    serialize_rules = ('-password', 'gamesession')



class Quiz(db.Model, SerializerMixin):
    __tablename__ = "quizes"

    id = db.Column(db.Integer, primary_key=True)
    quizcategory = db.Column(db.String)
    question_id = db.Column(db.Integer, db.ForeignKey("questions.id"))
    questions = db.relationship("Question", back_populates="quiz")
    gamesession = db.relationship("GameSession", back_populates="quiz")

    serialize_rules = ('-questions', '-gamesession')


class Question(db.Model, SerializerMixin):
    __tablename__ = "questions"

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String)
    answer = db.Column(db.String)
    quiz_id = db.Column(db.Integer, db.ForeignKey("quizes.id"))
    quiz = db.relationship("Quiz", back_populates="questions")

class GameSession(db.Model, SerializerMixin):
    __tablename__ = "gamesessions"

    id = db.Column(db.Integer, primary_key=True)
    userscore = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    quiz_id = db.Column(db.Integer, db.ForeignKey("quizes.id"))
    user = db.relationship("User", back_populates="gamesession")
    quiz = db.relationship("Quiz", back_populates="gamesession")
