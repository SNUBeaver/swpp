from rest_framework import status
from rest_framework.decorators import api_view
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import generics
from promises.models import Promise
from promises.serializers import UserSerializer, PromiseSerializer, PromiseSerializerUpdate
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.views import auth_login, logout
from promises.serializers import UserSerializer, UserAllSerializer
from datetime import datetime
from rest_framework import permissions
from promises.permissions import IsUserOrReadOnly
class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)
@csrf_exempt
def user_login(request):
    print("Request is : ")
    print(request)
    data = JSONParser().parse(request)
    print("data check %s", data)
    user = authenticate(username=data['username'], password=data['password'])
    print(user)
    if user:
        print("auth in process")
        auth_login(request, user)
    else:
        return JSONResponse({}, status=status.HTTP_401_UNAUTHORIZED)
    serializer = UserSerializer(user)
    data = serializer.data.copy()
    data.update({
        'csrftoken': request.META['CSRF_COOKIE']
    })
    return JSONResponse(data, status=status.HTTP_200_OK)
def user_logout(request):
    logout(request)
    return JSONResponse({}, status=status.HTTP_202_ACCEPTED)

class PromiseList(generics.ListCreateAPIView):
    queryset = Promise.objects.all()
    serializer_class = PromiseSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def post(self, request, format=None):
        serializer = PromiseSerializer(data=request.data)

        if serializer.is_valid():
            if (request.data['sinceWhen'] < request.data['tilWhen']) and (int(self.request.user.id) != int(request.data['user2'])):
                serializer.save(user1=self.request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                pass
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PromiseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Promise.objects.all()
    serializer_class = PromiseSerializerUpdate
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsUserOrReadOnly,)

    def put(self, request, pk, format=None):

        promise = self.get_object()
        serializer = PromiseSerializerUpdate(promise, data=request.data)
        if serializer.is_valid():
            print(request.data)
            if request.data['sinceWhen'] < request.data['tilWhen']:
                serializer.save()
                return Response(serializer.data)
            else:
                pass
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserAllList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserAllSerializer

class UserAllDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserAllSerializer
