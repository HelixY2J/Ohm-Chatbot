from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from django.middleware.csrf import get_token
import google.generativeai as genai
from dotenv import load_dotenv
import os, json

load_dotenv()

def call_the_bard(msg):
    api_key = os.getenv('GEMINI_API_KEY')
    print(msg)
    if not api_key:
        raise ValueError("Get the api key first !!!")
    
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(msg)
    return response.text


# system prompt - " assume - actions - decide - breathing exercise  
def home(request):
    csrf_token = get_token(request)
    return render(request,'index.html',{'csrf_token':csrf_token})

def bard(request):
    csrf_token = get_token(request)
    
    if request.method == 'POST':
    
       # msg = request.POST.get('message')
        data = json.loads(request.body)
        msg = data.get('message', '')
        print("Received message:", msg)
    
        response = call_the_bard(msg)

        if not msg:
            return JsonResponse({'error': 'Message cannot be empty'}, status=400)
        
        try:
            response = call_the_bard(msg)
            return JsonResponse({'message': msg, 'response': response, 'csrf_token': csrf_token})
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
      
    return JsonResponse({'message':msg,'response':response,'csrf_token': csrf_token})
    
