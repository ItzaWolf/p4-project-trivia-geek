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

    serialize_rules = ('-gamesession.user',)

    @validates('username')
    def validate_username(self, key, username):
        if len(username) < 2:
            raise ValueError("Username must be at least two characters long")
        return username

    @validates('password')
    def validate_password(self, key, password):
        if len(password) < 4:
            raise ValueError("Password must be at least four characters long")
        return password

class Quiz(db.Model, SerializerMixin):
    __tablename__ = "quizes"

    id = db.Column(db.Integer, primary_key=True)
    quizcategory = db.Column(db.String)
    question_id = db.Column(db.Integer, db.ForeignKey("questions.id"))
    questions = db.relationship("Question", back_populates="quiz", foreign_keys="Question.quiz_id")
    gamesession = db.relationship("GameSession", back_populates="quiz", cascade="all,delete")

    serialize_rules = ('-questions.quiz', '-gamesession.quiz',)


class Question(db.Model, SerializerMixin):
    __tablename__ = "questions"

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String)
    answer = db.Column(db.String)
    options = db.Column(db.JSON)
    quiz_id = db.Column(db.Integer, db.ForeignKey("quizes.id"))
    quiz = db.relationship("Quiz", back_populates="questions", foreign_keys=[quiz_id])

    serialize_rules = ('-quiz.questions',)

class GameSession(db.Model, SerializerMixin):
    __tablename__ = "gamesessions"

    id = db.Column(db.Integer, primary_key=True)
    userscore = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    quiz_id = db.Column(db.Integer, db.ForeignKey("quizes.id"))
    user = db.relationship("User", back_populates="gamesession")
    quiz = db.relationship("Quiz", back_populates="gamesession")
    serialize_rules = ('-quiz.gamesession','-user.gamesession',)
