#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        db.create_all()
        # Seed code goes here!

# ScienceQuiz Seed Data

science_quiz_data = [
    {
        "question": "What is the chemical symbol for the element gold?",
        "options": {
            "A": "Au",
            "B": "Ag",
            "C": "Fe",
            "D": "Hg",
        },
        "answer": "A",  # Au
    },
    {
        "question": 'Which planet is known as the "Red Planet"?',
        "options": {
            "A": "Jupiter",
            "B": "Mars",
            "C": "Saturn",
            "D": "Venus",
        },
        "answer": "B",  # Mars
    },
    {
        "question": "What is the powerhouse of the cell?",
        "options": {
            "A": "Nucleus",
            "B": "Mitochondria",
            "C": "Ribosome",
            "D": "Endoplasmic reticulum",
        },
        "answer": "B",  # Mitochondria
    },
    {
        "question": "Who is credited with the discovery of penicillin?",
        "options": {
            "A": "Alexander Fleming",
            "B": "Louis Pasteur",
            "C": "Marie Curie",
            "D": "Isaac Newton",
        },
        "answer": "A",  # Alexander Fleming
    },
    {
        "question": "What is the chemical formula for water?",
        "options": {
            "A": "CO2",
            "B": "H2O",
            "C": "CH4",
            "D": "O2",
        },
        "answer": "B",  # H2O
    },
    {
        "question": "Which force is responsible for objects falling to the ground?",
        "options": {
            "A": "Electromagnetic force",
            "B": "Gravitational force",
            "C": "Nuclear force",
            "D": "Magnetic force",
        },
        "answer": "B",  # Gravitational force
    },
    {
        "question": "What is the largest organ in the human body?",
        "options": {
            "A": "Liver",
            "B": "Skin",
            "C": "Heart",
            "D": "Lungs",
        },
        "answer": "B",  # Skin
    },
    {
        "question": "Which scientist is famous for his theory of general relativity?",
        "options": {
            "A": "Isaac Newton",
            "B": "Albert Einstein",
            "C": "Galileo Galilei",
            "D": "Stephen Hawking",
        },
        "answer": "B",  # Albert Einstein
    },
    {
        "question": "What is the chemical symbol for the element oxygen?",
        "options": {
            "A": "O2",
            "B": "O",
            "C": "Ox",
            "D": "Om",
        },
        "answer": "B",  # O
    },
    {
        "question": "Which gas do plants absorb from the atmosphere during photosynthesis?",
        "options": {
            "A": "Carbon monoxide",
            "B": "Nitrogen",
            "C": "Oxygen",
            "D": "Carbon dioxide",
        },
        "answer": "D",  # Carbon dioxide
    },
]

# TechQuiz Seed Data

tech_quiz_data = [
    {
        "question": "What does CPU stand for?",
        "options": {
            "A": "Central Processing Unit",
            "B": "Computer Personal Unit",
            "C": "Central Process Unit",
            "D": "Central Processor Unit",
        },
        "answer": "A",
    },
    {
        "question": "Which of the following programming languages is known for its use in developing web pages?",
        "options": {
            "A": "Java",
            "B": "Python",
            "C": "HTML",
            "D": "C++",
        },
        "answer": "C",
    },
    {
        "question": "What is the main purpose of an SSD in a computer?",
        "options": {
            "A": "To provide extra storage space",
            "B": "To increase processing speed",
            "C": "To connect to the internet",
            "D": "To manage the cooling system",
        },
        "answer": "B",
    },
    {
        "question": "Which company is responsible for the development of the Windows operating system?",
        "options": {
            "A": "Apple",
            "B": "Microsoft",
            "C": "Linux",
            "D": "Android",
        },
        "answer": "B",
    },
    {
        "question": 'What does the acronym "URL" stand for?',
        "options": {
            "A": "Universal Resource Locator",
            "B": "Uniform Resource Locator",
            "C": "Universal Reference Locator",
            "D": "Uniform Reference Locator",
        },
        "answer": "B",
    },
    {
        "question": "Which of the following is a wireless communication technology that allows devices to exchange data over short distances?",
        "options": {
            "A": "NFC (Near Field Communication)",
            "B": "GPS (Global Positioning System)",
            "C": "DSL (Digital Subscriber Line)",
            "D": "HDMI (High-Definition Multimedia Interface)",
        },
        "answer": "A",
    },
    {
        "question": "What is the purpose of a firewall in network security?",
        "options": {
            "A": "To enhance internet speed",
            "B": "To prevent unauthorized access",
            "C": "To increase computer storage",
            "D": "To improve graphic performance",
        },
        "answer": "B",
    },
    {
        "question": "Which programming language is commonly used for developing mobile apps?",
        "options": {
            "A": "Java",
            "B": "Python",
            "C": "Swift",
            "D": "C#",
        },
        "answer": "C",
    },
    {
        "question": 'What does the term "HTML" stand for in the context of web development?',
        "options": {
            "A": "Hyperlink Text Markup Language",
            "B": "Hypertext Transfer Markup Language",
            "C": "High-Level Text Markup Language",
            "D": "Hyperlink and Text Manipulation Language",
        },
        "answer": "B",
    },
    {
        "question": "What is the purpose of a QR code?",
        "options": {
            "A": "To store music files",
            "B": "To encode text data",
            "C": "To scan barcodes in stores",
            "D": "To transmit radio signals",
        },
        "answer": "B",
    },
]

# AnimalsQuiz Seed Data

animals_quiz_data = [
    {
        "question": "What percentage of wildlife on Earth is found in the ocean?",
        "options": {
            "A": "46%",
            "B": "20%",
            "C": "94%",
            "D": "75%",
        },
        "answer": "C",  # 94%
    },
    {
        "question": "What is the largest mammal on Earth?",
        "options": {
            "A": "Elephant",
            "B": "Blue Whale",
            "C": "Giraffe",
            "D": "Gorilla",
        },
        "answer": "B",  # Blue Whale
    },
    {
        "question": "Which bird is known for its ability to mimic human speech?",
        "options": {
            "A": "Penguin",
            "B": "Parrot",
            "C": "Eagle",
            "D": "Owl",
        },
        "answer": "B",  # Parrot
    },
    {
        "question": "What is the collective name for a group of lions?",
        "options": {
            "A": "Flock",
            "B": "Herd",
            "C": "Pride",
            "D": "Pack",
        },
        "answer": "C",  # Pride
    },
    {
        "question": "Which animal is a natural habitat for the Amazon River?",
        "options": {
            "A": "Nile Crocodile",
            "B": "Anaconda",
            "C": "Bengal Tiger",
            "D": "Kangaroo",
        },
        "answer": "B",  # Anaconda
    },
    {
        "question": "What is the world's fastest land animal?",
        "options": {
            "A": "Cheetah",
            "B": "Gazelle",
            "C": "Jaguar",
            "D": "Antelope",
        },
        "answer": "A",  # Cheetah
    },
    {
        "question": "Which of the following animals is a marsupial?",
        "options": {
            "A": "Koala",
            "B": "Panda",
            "C": "Zebra",
            "D": "Rhino",
        },
        "answer": "A",  # Koala
    },
    {
        "question": "What is the largest species of bear?",
        "options": {
            "A": "Polar Bear",
            "B": "Black Bear",
            "C": "Grizzly Bear",
            "D": "Panda Bear",
        },
        "answer": "A",  # Polar Bear
    },
    {
        "question": "Which snake is known for its hood and deadly venom?",
        "options": {
            "A": "Python",
            "B": "Anaconda",
            "C": "King Cobra",
            "D": "Rattlesnake",
        },
        "answer": "C",  # King Cobra
    },
    {
        "question": "What is the only marsupial native to North America?",
        "options": {
            "A": "Kangaroo",
            "B": "Wombat",
            "C": "Opossum",
            "D": "Wallaby",
        },
        "answer": "C",  # Opossum
    },
    {
        "question": "Which insect is known for its ability to produce light through bioluminescence?",
        "options": {
            "A": "Butterfly",
            "B": "Firefly",
            "C": "Dragonfly",
            "D": "Grasshopper",
        },
        "answer": "B",  # Firefly
    },
]

# EntertainmentTrivia Seed Data

entertainment_quiz_data = [
    {
        "question": "Which movie features a character named Jack Dawson and takes place aboard the ship RMS Titanic?",
        "options": {
            "A": "The Notebook",
            "B": "Titanic",
            "C": "Pearl Harbor",
            "D": "Inception",
        },
        "answer": "B",  # Titanic
    },
    {
        "question": "Who played the iconic character of James Bond in the 2000s?",
        "options": {
            "A": "Sean Connery",
            "B": "Daniel Craig",
            "C": "Pierce Brosnan",
            "D": "Roger Moore",
        },
        "answer": "B",  # Daniel Craig
    },
    {
        "question": "Which animated film features a talking snowman named Olaf?",
        "options": {
            "A": "Moana",
            "B": "Frozen",
            "C": "Zootopia",
            "D": "Toy Story",
        },
        "answer": "B",  # Frozen
    },
    {
        "question": "In the TV series Friends, what is the name of Ross Geller's second wife?",
        "options": {
            "A": "Rachel",
            "B": "Monica",
            "C": "Janice",
            "D": "Emily",
        },
        "answer": "D",  # Emily
    },
    {
        "question": "Who is known as the 'Queen of Pop'?",
        "options": {
            "A": "Beyoncé",
            "B": "Madonna",
            "C": "Lady Gaga",
            "D": "Taylor Swift",
        },
        "answer": "B",  # Madonna
    },
    {
        "question": "Which rock band released the album 'The Dark Side of the Moon'?",
        "options": {
            "A": "The Rolling Stones",
            "B": "Led Zeppelin",
            "C": "Pink Floyd",
            "D": "The Beatles",
        },
        "answer": "C",  # Pink Floyd
    },
    {
        "question": "In the Harry Potter series, what is the name of Harry's pet owl?",
        "options": {
            "A": "Hedwig",
            "B": "Fawkes",
            "C": "Errol",
            "D": "Crookshanks",
        },
        "answer": "A",  # Hedwig
    },
    {
        "question": "Who won the Academy Award for Best Actor for his role in the movie 'The Revenant'?",
        "options": {
            "A": "Leonardo DiCaprio",
            "B": "Matthew McConaughey",
            "C": "Brad Pitt",
            "D": "Joaquin Phoenix",
        },
        "answer": "A",  # Leonardo DiCaprio
    },
    {
        "question": "Which superhero is known for wielding a shield made of vibranium?",
        "options": {
            "A": "Iron Man",
            "B": "Captain America",
            "C": "Thor",
            "D": "Black Widow",
        },
        "answer": "B",  # Captain America
    },
    {
        "question": "What is the fictional setting of the TV series 'Stranger Things'?",
        "options": {
            "A": "Hawkinsville",
            "B": "Mystic Falls",
            "C": "Hill Valley",
            "D": "Hawkins",
        },
        "answer": "D",  # Hawkins
    },
]

