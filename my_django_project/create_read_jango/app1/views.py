from django.shortcuts import render, redirect

from app1.models import Employee
from app1.forms import employee_form


def employee_details(request):
    emp = Employee.objects.all()

    form = employee_form()
    if request.method == "POST":
        form = employee_form(request.POST)
        if form.is_valid():
            form.save()
            return redirect("emp_details")

    return render(request, 'app1_templates/home.html', {'emp':emp, 'form': form})