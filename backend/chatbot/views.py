from django.shortcuts import render
from django.http import JsonResponse
from django.middleware.csrf import get_token
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

def call_the_bard(msg):
    api_key = os.getenv('GEMINI_API_KEY')

    if not api_key:
        raise ValueError("Get the api key first !!!")
    
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(msg)
   # print(response.text)
    return response.text



def home(request):
    csrf_token = get_token(request)
    if request.method == 'POST':
        msg = request.POST.get('message')
        # response = 'Just say Ohmmmm !!!'
        response = call_the_bard(msg)
        return JsonResponse({'message':msg,'response':response})
    

    return render(request,'index.html',{'csrf_token':csrf_token})