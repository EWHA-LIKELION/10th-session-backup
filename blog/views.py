from webbrowser import get
from django.shortcuts import redirect, render, get_object_or_404
from .models import Blog
from django.utils import timezone
from .forms import BlogForm


# Create your views here.
def home(request):
     blogs=Blog.objects
     return render(request,'home.html',{'blogs':blogs})

def detail(request,blog_id):
    blog_detail=get_object_or_404(Blog,pk=blog_id)
    return render(request,'detail.html',{'blog':blog_detail})

def new(request):
     form = BlogForm()
     return render(request, 'new.html',{'form':form})

def create(request):
     form = BlogForm(request.POST,request.FILES)
     if form.is_valid():
          new_blog = form.save(commit=False)
          new_blog.date = timezone.now()
          new_blog.save()
          return redirect('detail',new_blog.id)
     return redirect('home')

def edit(request, blog_id):
     blog_detail = get_object_or_404(Blog,pk=blog_id)
     return render(request, 'edit.html',{'blog':blog_detail})

def update(request, blog_id):
     blog_update = get_object_or_404(Blog, pk=blog_id)
     blog_update.title = request.POST['title']
     blog_update.body = request.POST['body']
     blog_update.save()
     return redirect('detail',blog_update.id)

def delete(request, blog_id):
     blog_delete = get_object_or_404(Blog,pk=blog_id)
     blog_delete.delete()
     return redirect('home')