from rest_framework import serializers
from promises.models import Promise
from django.contrib.auth.models import User


class PromiseSerializer(serializers.ModelSerializer):
    # def to_representation(self, obj):
    #     return {
    #         "id":obj.id,
    #         "created":obj.created,
    #         "user1": obj.user1.id,
    #         "user2": obj.user2.id
    #     }
    user1 = serializers.ReadOnlyField(source='user1.id')

    class Meta:
        model = Promise
        fields = ('id', 'created', 'sinceWhen', 'tilWhen', 'user1', 'user2')
        
class PromiseSerializerUpdate(serializers.ModelSerializer):
    user1 = serializers.ReadOnlyField(source='user1.id')
    user2 = serializers.ReadOnlyField(source='user2.id')

    class Meta:
        model = Promise
        fields = ('id', 'created', 'sinceWhen', 'tilWhen', 'user1', 'user2')

class UserSerializer(serializers.ModelSerializer):
    promises_as_inviter = serializers.PrimaryKeyRelatedField(many=True, queryset=Promise.objects.all())
    promises_as_invitee = serializers.PrimaryKeyRelatedField(many=True, queryset=Promise.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'promises_as_inviter', 'promises_as_invitee')


class UserAllSerializer(serializers.BaseSerializer):
    def to_representation(self, obj):
        promises_all = obj.promises_as_inviter.all() | obj.promises_as_invitee.all()
        id_list = promises_all.values_list('id', flat=True)
        
        return {
            "id":obj.id,
            "username":obj.username,
            "whole_promises": id_list
        }
    promises_as_inviter = serializers.PrimaryKeyRelatedField(many=True, queryset=Promise.objects.all())
    promises_as_invitee = serializers.PrimaryKeyRelatedField(many=True, queryset=Promise.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'promises_as_inviter', 'promises_as_invitee')
