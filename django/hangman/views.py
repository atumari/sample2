from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Author, Question
from .serializers import AuthorSerializer, PlayerSerializer
from .forms import AuthorForm
from . import play_func as pf

import random

@api_view(['GET', 'POST'])
def play(request, format=None):
    if request.method == 'GET':
        q_num = Question.objects.count()
        rand_idx = random.randint(0, q_num-1) + 1
        correct = Question.objects.get(id=rand_idx).correct
        string= '-' * len(correct)
        player = PlayerSerializer(data={'correct': correct, 'string': string, 'question_id': rand_idx})
        if player.is_valid():
            return Response(player.data)
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    elif request.method == 'POST':
        correct = request.POST["correct"]
        string = request.POST["string"]
        score = int(request.POST["score"])
        ans = request.POST["ans"].lower()
        id = request.POST['question_id']
        score, string = pf.get_score(ans, correct, string, score)
        player = PlayerSerializer(data={'correct': correct, 'string': string,
                                        'score': score, 'question_id': id})
        if player.is_valid():
            return Response(player.data)
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def vote(request, format=None):
    if 'vote' not in request.POST:
        return Response(status=status.HTTP_204_NO_CONTENT)
    id = request.POST['question_id']
    question = Question.objects.get(id=id)
    question.point += 1
    author = question.author
    author.point += 1
    question.save()
    author.save()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def admin(request, format=None):
    name = request.POST['name']
    author = Author.objects.filter(name=name).first()
    if author and author.password == request.POST['password']:
        serializer = AuthorSerializer(author)
        return Response(serializer.data)

    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def register(request, format=None):
    name = request.POST['name']
    check_auth = Author.objects.filter(name=name).first()

    if check_auth:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    else:
        obj = Author()
        author = AuthorForm(request.POST, instance=obj)
        author.save()
        serializer = AuthorSerializer(obj)
        return Response(serializer.data)


@api_view(['POST'])
def create(request, format=None):
    correct = request.POST['correct'].lower()
    if Question.objects.filter(correct=correct).first():
        return Response(status=status.HTTP_400_BAD_REQUEST)

    name = request.POST['name']
    author = Author.objects.filter(name=name).first()
    question = Question()
    question.author = author
    question.correct = correct
    question.save()
    author.num_questions += 1
    author.save()

    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def ranking(request, format=None):
    authors = Author.objects.all().order_by("point").reverse()
    serializer = AuthorSerializer(authors, many=True)
    return Response(serializer.data)