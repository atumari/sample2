from rest_framework import serializers
from .models import Author, Question

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('name', 'point', 'num_questions', 'register_date')



class PlayerSerializer(serializers.Serializer):
    correct = serializers.CharField(max_length=10, min_length=5)
    string = serializers.CharField(max_length=10, min_length=5)
    score = serializers.IntegerField(default=0)
    question_id = serializers.IntegerField()